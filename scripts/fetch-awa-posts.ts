#!/usr/bin/env tsx
/**
 * Fetch AweReactNative Posts
 *
 * Fetches blog post metadata from AweReactNative.com RSS feed
 */

import Parser from 'rss-parser';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const RSS_URL = process.env.AWA_RSS_URL || 'https://awereactnative.com/author/utkarsh-lubal/feed/';
const CONTENT_DIR = join(process.cwd(), 'content');
const POSTS_DIR = join(process.cwd(), 'docs', 'blog');

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  guid: string;
}

async function fetchPosts() {
  console.log('📥 Fetching posts from AweReactNative.com...');

  try {
    const parser = new Parser();
    const feed = await parser.parseURL(RSS_URL);

    if (!feed.items) {
      console.log('⚠️  No posts found in feed');
      return;
    }

    const posts: BlogPost[] = feed.items.map(item => ({
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      contentSnippet: item.contentSnippet || '',
      guid: item.guid || item.link || '',
    }));

    // Ensure directories exist
    if (!existsSync(POSTS_DIR)) {
      mkdirSync(POSTS_DIR, { recursive: true });
    }

    // Save posts metadata
    const postsFile = join(CONTENT_DIR, 'posts.json');
    writeFileSync(postsFile, JSON.stringify({ posts, lastFetched: new Date().toISOString() }, null, 2));

    console.log(`✅ Fetched ${posts.length} posts`);
    console.log(`📝 Latest post: ${posts[0]?.title}`);

  } catch (error) {
    console.error('❌ Error fetching posts:', error);
    process.exit(1);
  }
}

fetchPosts();


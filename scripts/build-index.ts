#!/usr/bin/env tsx
/**
 * Build Index Script
 *
 * Generates searchable index from library JSON files
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

interface Library {
  name: string;
  description: string;
  category: string;
  npmPackage?: string;
  githubUrl?: string;
  documentation?: string;
}

const CONTENT_DIR = join(process.cwd(), 'content');
const LIBRARIES_DIR = join(CONTENT_DIR, 'libraries');
const INDEX_FILE = join(CONTENT_DIR, 'index.json');

function buildIndex() {
  console.log('📦 Building library index...');

  if (!existsSync(LIBRARIES_DIR)) {
    console.log('⚠️  Libraries directory not found');
    return;
  }

  const files = readdirSync(LIBRARIES_DIR).filter(f => f.endsWith('.json'));
  const libraries: Library[] = [];

  for (const file of files) {
    try {
      const content = readFileSync(join(LIBRARIES_DIR, file), 'utf-8');
      const library = JSON.parse(content);
      libraries.push(library);
    } catch (error) {
      console.error(`❌ Error parsing ${file}:`, error);
    }
  }

  const index = {
    generated: new Date().toISOString(),
    total: libraries.length,
    libraries: libraries.sort((a, b) => a.name.localeCompare(b.name)),
  };

  writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2));
  console.log(`✅ Index built with ${libraries.length} libraries`);
}

buildIndex();


/**
 * Utility to write badge SVG with metadata and data-date attribute
 */

import { writeFileSync } from 'fs';
import { join } from 'path';

interface BadgeMetadata {
  lastSync: string;
  libraryCount: number;
}

export function writeBadge(metadata: BadgeMetadata): void {
  const badgeFile = join(process.cwd(), 'content', 'badges.svg');
  const now = new Date();
  const dateStr = now.toISOString();
  const dateDisplay = new Date(metadata.lastSync).toLocaleDateString();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="250" height="20" data-date="${dateStr}">
  <rect width="250" height="20" fill="#555"/>
  <text x="10" y="14" font-size="11" fill="#fff" font-family="monospace">
    Libraries: ${metadata.libraryCount} | Sync: ${dateDisplay}
  </text>
</svg>`;

  writeFileSync(badgeFile, svg);
}

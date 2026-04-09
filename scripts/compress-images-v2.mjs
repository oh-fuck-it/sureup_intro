import sharp from 'sharp';
import { readdir, stat, mkdir, copyFile, writeFile } from 'fs/promises';
import { join, extname, basename } from 'path';

const ORIGINAL_DIR = 'public/images-original';
const IMAGES_DIR = 'public/images';
const THUMB_DIR = 'public/images/thumbs'; // small versions for image wall
const POLICY_DIR = 'public/policy';

// High-quality settings for main images
const HQ_MAX_WIDTH = 1800;
const HQ_QUALITY_PNG = 90;
const HQ_QUALITY_JPG = 88;

// Low-quality settings for image wall thumbnails
const THUMB_MAX_WIDTH = 480;
const THUMB_QUALITY = 72;

// Images used in the image wall
const WALL_IMAGES = [
  'cockpit-overview.png', 'evaluation-students.png', 'grading-detail-scoring.png',
  'alert-list.png', 'classroom-attendance-detail.png', 'ai-chat-desktop.jpg',
  'analysis-1.png', 'evaluation-categories.png', 'grading-report-overview.png',
  'question-bank-list.png', 'cockpit-drilldown-1.png', 'classroom-homework-grading.png',
  'evaluation-profile.png', 'grading-structure-rubric.png', 'analysis-3.png',
  'alert-detail.png', 'teaching-quality.png', 'cockpit-students.png',
  'cockpit-drilldown-2.png', 'question-bank-detail.png', 'analysis-5.png',
];

async function main() {
  // Step 1: Restore originals with high-quality compression
  console.log('=== Step 1: High-quality compression for main images ===\n');
  const files = await readdir(ORIGINAL_DIR);
  let totalBefore = 0, totalAfter = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const srcPath = join(ORIGINAL_DIR, file);
    const destPath = join(IMAGES_DIR, file);
    const fileStat = await stat(srcPath);
    totalBefore += fileStat.size;

    try {
      let buffer;
      if (ext === '.png') {
        buffer = await sharp(srcPath)
          .resize(HQ_MAX_WIDTH, null, { withoutEnlargement: true })
          .png({ quality: HQ_QUALITY_PNG, compressionLevel: 8 })
          .toBuffer();
      } else {
        buffer = await sharp(srcPath)
          .resize(HQ_MAX_WIDTH, null, { withoutEnlargement: true })
          .jpeg({ quality: HQ_QUALITY_JPG, mozjpeg: true })
          .toBuffer();
      }

      await writeFile(destPath, buffer);
      totalAfter += buffer.length;
      const saved = ((1 - buffer.length / fileStat.size) * 100).toFixed(1);
      console.log(`  ${file}: ${(fileStat.size / 1024).toFixed(0)}KB → ${(buffer.length / 1024).toFixed(0)}KB (${saved}%)`);
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
      // fallback: just copy original
      await copyFile(srcPath, destPath);
      totalAfter += fileStat.size;
    }
  }

  console.log(`\n  Main images: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB\n`);

  // Step 2: Create small thumbnails for image wall
  console.log('=== Step 2: Thumbnails for image wall ===\n');
  await mkdir(THUMB_DIR, { recursive: true });

  for (const file of WALL_IMAGES) {
    const srcPath = join(ORIGINAL_DIR, file);
    const ext = extname(file).toLowerCase();
    const destPath = join(THUMB_DIR, file);

    try {
      let buffer;
      if (ext === '.png') {
        buffer = await sharp(srcPath)
          .resize(THUMB_MAX_WIDTH, null, { withoutEnlargement: true })
          .png({ quality: THUMB_QUALITY, compressionLevel: 9 })
          .toBuffer();
      } else {
        buffer = await sharp(srcPath)
          .resize(THUMB_MAX_WIDTH, null, { withoutEnlargement: true })
          .jpeg({ quality: THUMB_QUALITY, mozjpeg: true })
          .toBuffer();
      }

      await writeFile(destPath, buffer);
      console.log(`  ${file}: → ${(buffer.length / 1024).toFixed(0)}KB (thumb)`);
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  // Step 3: Policy images (moderate)
  console.log('\n=== Step 3: Policy images ===\n');
  const policyFiles = await readdir(POLICY_DIR);
  for (const file of policyFiles) {
    const ext = extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
    // These are already compressed, skip
  }
  console.log('  (already compressed, skipping)\n');

  // Summary
  const finalSize = await dirSize(IMAGES_DIR);
  console.log(`✓ Final public/images/ size: ${(finalSize / 1024 / 1024).toFixed(1)}MB (including thumbs)`);
}

async function dirSize(dir) {
  const files = await readdir(dir, { recursive: true });
  let total = 0;
  for (const f of files) {
    try {
      const s = await stat(join(dir, f));
      if (s.isFile()) total += s.size;
    } catch {}
  }
  return total;
}

main();

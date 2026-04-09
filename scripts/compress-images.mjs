import sharp from 'sharp';
import { readdir, stat, mkdir, rename } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGES_DIR = 'public/images';
const POLICY_DIR = 'public/policy';
const BACKUP_DIR = 'public/images-original';
const MAX_WIDTH = 1200;
const QUALITY = 78;

async function compressDir(dir, maxWidth = MAX_WIDTH) {
  const files = await readdir(dir);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    totalBefore += fileStat.size;

    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      let pipeline = sharp(filePath);

      // Resize if wider than max
      if (metadata.width > maxWidth) {
        pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
      }

      // Convert to WebP
      const webpName = basename(file, ext) + '.webp';
      const webpPath = join(dir, webpName);
      const buffer = await pipeline.webp({ quality: QUALITY, effort: 4 }).toBuffer();

      // Also create optimized fallback in original format (for <img> src compatibility)
      let fallbackBuffer;
      if (ext === '.png') {
        fallbackBuffer = await sharp(filePath)
          .resize(maxWidth, null, { withoutEnlargement: true })
          .png({ quality: QUALITY, compressionLevel: 9 })
          .toBuffer();
      } else {
        fallbackBuffer = await sharp(filePath)
          .resize(maxWidth, null, { withoutEnlargement: true })
          .jpeg({ quality: QUALITY, mozjpeg: true })
          .toBuffer();
      }

      // Write compressed original format back (overwrite)
      const { writeFile } = await import('fs/promises');
      await writeFile(filePath, fallbackBuffer);

      const newStat = await stat(filePath);
      totalAfter += newStat.size;

      const saved = ((1 - newStat.size / fileStat.size) * 100).toFixed(1);
      console.log(`  ${file}: ${(fileStat.size / 1024).toFixed(0)}KB → ${(newStat.size / 1024).toFixed(0)}KB (${saved}% saved)`);
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
      totalAfter += fileStat.size;
    }
  }

  return { totalBefore, totalAfter };
}

async function main() {
  // Backup originals
  try {
    await mkdir(BACKUP_DIR, { recursive: true });
    console.log(`Backing up originals to ${BACKUP_DIR}/...`);
    const files = await readdir(IMAGES_DIR);
    for (const f of files) {
      const ext = extname(f).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const { copyFile } = await import('fs/promises');
        await copyFile(join(IMAGES_DIR, f), join(BACKUP_DIR, f));
      }
    }
  } catch (e) {
    console.log('Backup skipped:', e.message);
  }

  console.log('\n=== Compressing public/images/ ===');
  const r1 = await compressDir(IMAGES_DIR);

  console.log('\n=== Compressing public/policy/ ===');
  const r2 = await compressDir(POLICY_DIR, 900);

  const before = r1.totalBefore + r2.totalBefore;
  const after = r1.totalAfter + r2.totalAfter;
  console.log(`\n✓ Total: ${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024 / 1024).toFixed(1)}MB (${((1 - after / before) * 100).toFixed(1)}% saved)`);
}

main();

import sharp from 'sharp';
import { existsSync, copyFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const SOURCE_IMAGE = join(__dirname, '../src/assets/images/default.png');
const BACKUP_IMAGE = join(__dirname, '../src/assets/images/default.original.png');
const OUTPUT_IMAGE = SOURCE_IMAGE;
const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 628;

async function processOGImage() {
  try {
    // Check if source image exists
    if (!existsSync(SOURCE_IMAGE)) {
      console.error('❌ Error: Source image not found at:', SOURCE_IMAGE);
      process.exit(1);
    }

    // Create backup if it doesn't already exist
    if (!existsSync(BACKUP_IMAGE)) {
      console.log('📦 Creating backup of original image...');
      copyFileSync(SOURCE_IMAGE, BACKUP_IMAGE);
      console.log('✅ Backup saved to:', BACKUP_IMAGE);
    } else {
      console.log('ℹ️  Backup already exists, skipping backup creation');
    }

    // Get original image dimensions
    const metadata = await sharp(SOURCE_IMAGE).metadata();
    console.log(`\n📐 Original image: ${metadata.width}x${metadata.height}`);
    console.log(`🎯 Target size: ${TARGET_WIDTH}x${TARGET_HEIGHT}`);

    // Process the image
    console.log('\n🔄 Processing image...');
    await sharp(SOURCE_IMAGE)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: 'cover',
        position: 'north', // Center-top: crops from sides and bottom
      })
      .png({
        quality: 90,
        compressionLevel: 9,
      })
      .toFile(OUTPUT_IMAGE + '.tmp');

    // Replace original with processed version
    copyFileSync(OUTPUT_IMAGE + '.tmp', OUTPUT_IMAGE);

    // Clean up temp file
    const fs = await import('fs');
    fs.unlinkSync(OUTPUT_IMAGE + '.tmp');

    // Verify output
    const outputMetadata = await sharp(OUTPUT_IMAGE).metadata();
    console.log(`\n✅ Image processed successfully!`);
    console.log(`📏 Output size: ${outputMetadata.width}x${outputMetadata.height}`);
    console.log(`💾 Saved to: ${OUTPUT_IMAGE}`);
    console.log(`\n💡 Tip: Your original image is backed up at: ${BACKUP_IMAGE}`);

  } catch (error) {
    console.error('\n❌ Error processing image:', error.message);
    process.exit(1);
  }
}

processOGImage();

const sharp = require('sharp');

async function trimLogo() {
  try {
    console.log('Trimming logo.png...');
    await sharp('public/logo.png')
      .trim()
      .toFile('public/logo_cropped.png');
    console.log('Successfully created public/logo_cropped.png');
  } catch (err) {
    console.error('Error trimming image:', err);
  }
}

trimLogo();

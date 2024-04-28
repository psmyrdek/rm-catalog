import fs, { existsSync, mkdirSync } from 'fs';
import https from 'https';
import unzipper from 'unzipper';

const urls = ['https://d2mv4g2jxahmy1.cloudfront.net/mf/client/@mf-types.zip'];

const OUTPUT_PREFIX = './module-federation/types';

const downloadFile = (url, destination) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      })
      .on('error', (error) => {
        fs.unlink(destination);
        reject(error);
      });
  });
};

const unzipFile = (source, destination) => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(source)
      .pipe(unzipper.Extract({ path: destination }))
      .on('close', resolve)
      .on('error', reject);
  });
};

const downloadAllFiles = async () => {
  if (!existsSync(OUTPUT_PREFIX)) {
    mkdirSync(OUTPUT_PREFIX, { recursive: true });
  }

  for (const url of urls) {
    const fileName = url.split('/').pop();
    const destination = `${OUTPUT_PREFIX}/${fileName}`;
    try {
      await downloadFile(url, destination);
      console.log(`Downloaded ${fileName}`);
      unzipFile(destination, OUTPUT_PREFIX);
    } catch (error) {
      console.error(`Failed to download ${fileName}: ${error.message}`);
    }
  }
};

downloadAllFiles();

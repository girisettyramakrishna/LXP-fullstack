import dotenv from 'dotenv';
import * as Minio from 'minio';

dotenv.config();

const endPoint = process.env.MINIO_ENDPOINT || 'minio';

export const minioClient = new Minio.Client({
  endPoint,
  port: parseInt(process.env.MINIO_PORT || '9000', 10),
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY || 'minioadmin',
  secretKey: process.env.MINIO_SECRET_KEY || 'minioadmin',
});

export const bucketName = process.env.MINIO_BUCKET_NAME || 'uploads';

(async () => {
  try {
    await new Promise((r) => setTimeout(r, 3000)); // wait for MinIO ready
    const exists = await minioClient.bucketExists(bucketName);
    if (!exists) {
      await minioClient.makeBucket(bucketName, 'us-east-1');
      console.log(`✅ MinIO bucket '${bucketName}' created`);
    } else {
      console.log(`✅ MinIO bucket '${bucketName}' already exists`);
    }
  } catch (error) {
    console.error('❌ MinIO setup failed:', error.message);
  }
})();

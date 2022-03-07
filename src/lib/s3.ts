import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const client = new S3Client({});

export const putJSON = (key: string, body: string) => {
  return client.send(
    new PutObjectCommand({
      Bucket: 'sensorpia',
      Key: key,
      Body: body,
      ContentType: 'application/json; charset=utf-8',
    })
  );
};

export const getPresignedURL = async (key: string) => {
  const signedURL = await getSignedUrl(
    client,
    new PutObjectCommand({ Bucket: 'sensorpia', Key: key }),
    { expiresIn: 3600 }
  );
  return signedURL;
};

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const client = new S3Client({})

// body
export const putJSON = (key: string, body: string) => {
  return client.send(
    new PutObjectCommand({
      Bucket: 'sensorpia',
      Key: key,
      Body: body,
      ContentType: 'application/json; charset=utf-8',
    })
  )
}

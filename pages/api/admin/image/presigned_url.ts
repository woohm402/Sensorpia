import type { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../../../src/lib/withSession';
import { getPresignedURL } from '../../../../src/lib/s3';

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405);
    return;
  }

  const { key } = req.body;

  if (!key) {
    res.status(400).json({ message: 'no key' });
    return;
  }

  try {
    const url = await getPresignedURL(key);
    res.status(201).json({ url });
  } catch (err) {
    res.status(500);
  }
});

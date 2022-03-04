import type { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../../../src/lib/withSession';
import { putJSON } from '../../../../src/lib/s3';

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    res.status(405);
    return;
  }

  const { body } = req.body;

  try {
    await putJSON('language/en.json', body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500);
  }
});

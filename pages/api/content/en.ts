import type { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../../src/lib/withSession';
import axios from 'axios';

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405);
    return;
  }

  try {
    const data = await axios.get(
      'https://sensorpia.s3.ap-northeast-2.amazonaws.com/language/en.json'
    );
    res.status(200).json(data.data);
  } catch (err) {
    res.status(500);
  }
});

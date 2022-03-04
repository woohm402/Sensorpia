import type { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../../src/lib/withSession';

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // @ts-ignore
  if (!req.session.user.admin) {
    res.status(403).json({ message: '로그인되어 있지 않습니다.' });
    return;
  }

  await req.session.destroy();
  res.status(200).json({ success: true });
});

import type { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../../src/lib/withSession';
import bcrypt from 'bcrypt';

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;

  if (!username) {
    res.status(400).json({ message: '이메일을 입력해 주세요.' });
    return;
  }

  if (!password) {
    res.status(400).json({ message: '비밀번호를 입력해 주세요.' });
    return;
  }

  if (!process.env.USERNAME || !process.env.PASSWORD) {
    res.status(500);
  }

  const isCorrectUsername = process.env.USERNAME === username;
  const isCorrectPassword = await bcrypt.compare(
    password,
    '$2a$07$' + process.env.PASSWORD!
  );

  if (!isCorrectPassword || !isCorrectUsername) {
    res
      .status(401)
      .json({ message: '사용자 이름이나 비밀번호가 올바르지 않습니다.' });
    return;
  }

  // @ts-ignore
  req.session.user = {
    admin: true,
  };

  await req.session.save();
  res.status(200).json({ success: true });
});

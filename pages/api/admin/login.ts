import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body

  if (!username) {
    res.status(400).json({ message: '이메일을 입력해 주세요.' })
    return
  }

  if (!password) {
    res.status(400).json({ message: '비밀번호를 입력해 주세요.' })
    return
  }

  res.status(200).json({ name: 'John Doe' })
}

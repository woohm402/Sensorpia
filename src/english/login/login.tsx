import { FormEventHandler } from 'react'
import { Form } from './login.style'

const Login = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input type={'password'} name={'password'} />
      <button>로그인</button>
    </Form>
  )
}

export default Login

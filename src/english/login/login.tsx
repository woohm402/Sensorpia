import { FormEventHandler } from 'react';
import { Form } from './login.style';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/dist/client/router';

const Login = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/admin/login', {
        username: (e.target as unknown as { username: HTMLInputElement })
          .username.value,
        password: (e.target as unknown as { password: HTMLInputElement })
          .password.value,
      });

      await router.push('/');
    } catch (err) {
      if ('message' in (err as any)?.response?.data) {
        toast.error((err as any).response.data.message);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input name={'username'} />
      <input type={'password'} name={'password'} />
      <button>로그인</button>
    </Form>
  );
};

export default Login;

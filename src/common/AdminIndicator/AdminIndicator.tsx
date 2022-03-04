import { useAdminContext } from '../../context/admin/admin';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/dist/client/router';
import { Wrapper } from './AdminIndicator.style';

const AdminIndicator = () => {
  const { isAdmin } = useAdminContext();
  const router = useRouter();

  if (!isAdmin) return null;

  const handleLogout = async () => {
    try {
      await axios.post('/api/admin/logout');
      toast.success('로그아웃 되었습니다.');
      router.reload();
    } catch (err) {
      //
    }
  };

  return (
    <Wrapper>
      관리자 모드
      <button
        style={{ width: 80, height: 40, cursor: 'pointer' }}
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </Wrapper>
  );
};

export default AdminIndicator;

import { useAdminContext } from '../../context/admin/admin';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/dist/client/router';
import { Wrapper, LogoutButton, SaveButton } from './AdminIndicator.style';
import { useLanguageContext } from '../../context/language/language';

const AdminIndicator = () => {
  const { isAdmin } = useAdminContext();
  const { handleSave, fetchLanguage, isEdited } = useLanguageContext();
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
      <br />
      <br />
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      <br />
      <br />
      <SaveButton onClick={handleSave} disabled={!isEdited}>
        적용
      </SaveButton>
      <br />
      <br />
      <SaveButton onClick={fetchLanguage} disabled={!isEdited}>
        초기화
      </SaveButton>
    </Wrapper>
  );
};

export default AdminIndicator;

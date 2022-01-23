import { useAdminContext } from '../../context/admin/admin'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/dist/client/router'

const AdminIndicator = () => {
  const { isAdmin } = useAdminContext()
  const router = useRouter()

  if (!isAdmin) return null

  const handleLogout = async () => {
    try {
      await axios.post('/api/admin/logout')
      toast.success('로그아웃 되었습니다.')
      router.reload()
    } catch (err) {
      //
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 10,
        left: 10,
        height: 67,
        backgroundColor: 'black',
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        padding: 20,
        color: 'white',
        fontWeight: 'bold',
        zIndex: 2,
      }}
    >
      관리자 모드{' '}
      <button style={{ width: 80, height: 40 }} onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  )
}

export default AdminIndicator

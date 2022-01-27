import React, {
  ElementType,
  FormEventHandler,
  memo,
  useCallback,
  useState,
} from 'react'
import { TextArea, Button } from './TextBox.style'
import { useAdminContext } from '../../context/admin/admin'
import { useLanguageContext } from '../../context/language/language'
import axios from 'axios'
import { replaceValue } from '../../lib/replaceValue'
import { toast } from 'react-hot-toast'

type Props = {
  as?: ElementType
  className?: string
  value: string
  name: string
}

const TextBox = ({ value, as: Tag = 'div', className, name }: Props) => {
  const [editingValue, setEditingValue] = useState<string>('')
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const { language, languageData, fetchLanguage } = useLanguageContext()
  const { isAdmin } = useAdminContext()

  const handleClick = () => {
    if (!isAdmin) return
    if (!isEditing) {
      setEditingValue(value)
      setIsEditing(true)
    }
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditingValue('')
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault()

      if (editingValue === value) {
        handleCancelEdit()
        return
      }

      const newData = replaceValue(languageData, name, editingValue)

      axios
        .put(`/api/admin/content/${language}`, {
          body: JSON.stringify(newData),
        })
        .then(() => fetchLanguage())
        .then(() => toast.success('값이 변경되었습니다.'))
        .then(handleCancelEdit)
    },
    [editingValue, value, name, language, languageData]
  )

  const tagProps = {
    className,
    onClick: isAdmin ? handleClick : undefined,
  }

  return isEditing ? (
    <form
      style={{ display: 'flex', zIndex: 2 }}
      className={className}
      onSubmit={handleSubmit}
    >
      <TextArea
        value={editingValue}
        onChange={(e) => setEditingValue(e.target.value)}
      />
      <Button type={'button'} onClick={handleCancelEdit}>
        취소
      </Button>
      <Button>수정</Button>
    </form>
  ) : (
    <Tag {...tagProps}>{value}</Tag>
  )
}

export default memo(TextBox)

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

      const newData = JSON.parse(JSON.stringify(languageData))

      let cursor = newData
      const keys = name.split('.')
      keys.slice(0, keys.length - 1).forEach((key) => {
        cursor = cursor[key]
      })

      // @ts-ignore
      cursor[keys[keys.length - 1]] = editingValue

      axios
        .put(`/api/admin/content/${language}`, {
          body: JSON.stringify(newData),
        })
        .then(() => fetchLanguage())
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

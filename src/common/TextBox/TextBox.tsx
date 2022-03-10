import { ElementType, FormEventHandler, memo, useState } from 'react';
import { TextArea, Button } from './TextBox.style';
import { useAdminContext } from '../../context/admin/admin';
import { useLanguageContext } from '../../context/language/language';
import { replaceValue } from '../../lib/replaceValue';

const TextBox = ({
  onDelete,
  value,
  as: Tag = 'div',
  className,
  name,
}: {
  as?: ElementType;
  className?: string;
  value: string;
  name: string;
  onDelete?: () => void;
}) => {
  const [editingValue, setEditingValue] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { languageData, setCurrentLanguageData } = useLanguageContext();
  const { isAdmin } = useAdminContext();

  const deletable = !!onDelete;

  const handleClick = () => {
    if (!isAdmin) return;
    if (!isEditing) {
      setEditingValue(value);
      setIsEditing(true);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingValue('');
  };

  const handleSubmit = () => {
    if (editingValue === value) {
      handleCancelEdit();
      return;
    }

    setCurrentLanguageData(replaceValue(languageData, name, editingValue));
  };

  const tagProps = {
    className,
    onClick: isAdmin ? handleClick : undefined,
  };

  return isEditing ? (
    <form
      style={{ display: 'flex', zIndex: 2 }}
      className={className}
      onSubmit={(e) => e.preventDefault()}
    >
      <TextArea
        value={editingValue}
        onChange={(e) => setEditingValue(e.target.value)}
      />
      <Button type="button" onClick={handleCancelEdit}>
        취소
      </Button>
      <Button type="button" onClick={handleSubmit}>
        수정
      </Button>
      {deletable && <Button onClick={onDelete}>삭제</Button>}
    </form>
  ) : (
    <Tag {...tagProps}>{value}</Tag>
  );
};

export default memo(TextBox);

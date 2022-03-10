import React, { ChangeEvent } from 'react';
import { useAdminContext } from '../../context/admin/admin';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { replaceValue } from '../../lib/replaceValue';
import { useLanguageContext } from '../../context/language/language';
import {
  SpecificationButton,
  SpecificationButtonWrapperHref,
} from './PdfBox.style';

const PdfBox = ({
  className,
  name,
  href,
  onDelete,
}: {
  className?: string;
  name: string;
  href: string;
  onDelete?: () => void;
}) => {
  const { isAdmin } = useAdminContext();
  const { languageData, setCurrentLanguageData } = useLanguageContext();

  const handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const extension = (() => {
      const fileSplit = file.name.split('.');
      return fileSplit[fileSplit.length - 1];
    })();

    const filename =
      Math.random().toString(36).substr(2, 22) +
      Math.random().toString(36).substr(2, 22) +
      `.${extension}`;

    // upload
    const key = `images/${filename}`;

    try {
      const response = await axios.post('/api/admin/image/presigned_url', {
        key,
      });
      const url = response?.data?.url;
      if (!url) throw 'error';

      await axios.put(url, file, { headers: { 'Content-Type': file.type } });

      const finalURL =
        'https://sensorpia.s3.ap-northeast-2.amazonaws.com/' + key;

      const newData = replaceValue(languageData, name, finalURL);

      setCurrentLanguageData(newData);
    } catch (err) {
      toast.error('오류가 발생했습니다.');
    } finally {
      e.target.value = '';
    }
  };

  return (
    <>
      <SpecificationButtonWrapperHref
        className={className}
        href={href}
        target="_blank"
      >
        <SpecificationButton>Specification</SpecificationButton>
      </SpecificationButtonWrapperHref>
      {isAdmin && (
        <div style={{ display: 'flex' }}>
          <button>
            <label>
              pdf 수정
              <input
                accept="application/pdf"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  handleSubmit(e);
                }}
              />
            </label>
          </button>
          {onDelete && <button onClick={onDelete}>항목 제거</button>}
        </div>
      )}
    </>
  );
};

export default PdfBox;

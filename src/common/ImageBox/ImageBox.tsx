import React, { useCallback } from 'react';
import { useAdminContext } from '../../context/admin/admin';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { replaceValue } from '../../lib/replaceValue';
import { useLanguageContext } from '../../context/language/language';

type Props = {
  className?: string;
  src?: string;
  alt?: string;
  name: string;
  as?: 'img' | 'div';
};

const ImageBox = ({
  src,
  className,
  name,
  alt = '',
  as = 'div',
}: Props): JSX.Element => {
  const { isAdmin } = useAdminContext();
  const { enLanguage, korLanguage, fetchLanguage } = useLanguageContext();

  const handleSubmit = useCallback(
    async (e) => {
      const file = e?.path[0]?.files?.[0];
      if (!file) {
        toast.error('오류가 발생했습니다.');
        return;
      }

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

        const newEnData = replaceValue(enLanguage, name, finalURL);
        const newKorData = replaceValue(korLanguage, name, finalURL);

        await Promise.allSettled([
          axios.put(`/api/admin/content/en`, {
            body: JSON.stringify(newEnData),
          }),
          axios.put(`/api/admin/content/kor`, {
            body: JSON.stringify(newKorData),
          }),
        ]);
        await fetchLanguage();
        toast.success('값이 변경되었습니다.');
      } catch (err) {
        toast.error('오류가 발생했습니다.');
      }
    },
    [enLanguage, korLanguage, name, fetchLanguage]
  );

  const handleClick = () => {
    if (!isAdmin) return;

    const inputElem = document.createElement('input');
    inputElem.type = 'file';
    inputElem.accept = 'image/*';
    inputElem.onchange = (e) => handleSubmit(e);
    inputElem.click();
  };

  const props = {
    className,
    onClick: isAdmin ? handleClick : undefined,
  };

  return as === 'img' ? (
    <img src={src} alt={alt} {...props} />
  ) : (
    <div {...props} style={{ backgroundSize: 'cover' }} />
  );
};

export default ImageBox;

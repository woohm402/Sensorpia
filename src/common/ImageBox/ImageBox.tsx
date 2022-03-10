import React, { ChangeEvent } from 'react';
import { useAdminContext } from '../../context/admin/admin';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { replaceValue } from '../../lib/replaceValue';
import { useLanguageContext } from '../../context/language/language';

const ImageBox = ({
  src,
  className,
  name,
  alt = '',
  as = 'div',
}: {
  className?: string;
  src?: string;
  alt?: string;
  name: string;
  as?: 'img' | 'div';
}) => {
  const { isAdmin } = useAdminContext();
  const { languageData, setCurrentLanguageData } = useLanguageContext();

  const handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
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

      const newData = replaceValue(languageData, name, finalURL);

      setCurrentLanguageData(newData);
    } catch (err) {
      toast.error('오류가 발생했습니다.');
    }
  };

  const handleClick = () => {
    if (!isAdmin) return;

    const inputElem = document.createElement('input');
    inputElem.type = 'file';
    inputElem.accept = 'image/*';
    inputElem.onchange = (e) =>
      handleSubmit(e as unknown as ChangeEvent<HTMLInputElement>);
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

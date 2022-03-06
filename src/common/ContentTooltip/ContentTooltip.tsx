import { PropsWithChildren, useState } from 'react';
import { Pop, Wrapper } from './ContentTooltip.style';

export const ContentTooltip = ({
  children,
  onModify,
}: PropsWithChildren<{
  onModify: (e: string) => void;
}>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');

  const close = () => {
    setContent('');
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Pop>
          <input value={content} onChange={(e) => setContent(e.target.value)} />
          <button
            onClick={() => {
              onModify(content);
              close();
            }}
          >
            수정
          </button>
          <button onClick={close}>취소</button>
        </Pop>
      )}
      <Wrapper
        style={{ border: 'none', background: 'transparent', padding: 0 }}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </Wrapper>
    </>
  );
};

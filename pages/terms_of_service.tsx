import styled from '@emotion/styled';
import { useEffect } from 'react';
import TextBox from '../src/common/TextBox/TextBox';
import { useAdminContext } from '../src/context/admin/admin';
import { useLanguageContext } from '../src/context/language/language';
import { withSessionSsr } from '../src/lib/withSession';

const Main = styled.main`
  margin: 0 auto;
  max-width: 560px;
  padding: 20px;
  min-height: calc(100vh - 196px);

  p {
    line-height: 28px;
    white-space: pre-line;
  }
`;

const TermsOfService = ({ isAdmin }: { isAdmin: boolean }) => {
  const { setIsAdmin } = useAdminContext();
  const { languageData } = useLanguageContext();

  useEffect(() => {
    setIsAdmin(isAdmin);
  }, [isAdmin, setIsAdmin]);

  return (
    <Main>
      <h1>홈페이지 이용약관</h1>
      <TextBox
        as="p"
        name="terms_of_service"
        value={languageData.terms_of_service ?? '홈페이지 이용약관'}
      />
    </Main>
  );
};

export default TermsOfService;

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  // @ts-ignore
  const isAdmin = !!req.session?.user?.admin;

  return {
    props: { isAdmin },
  };
});

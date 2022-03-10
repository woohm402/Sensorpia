import { useRouter } from 'next/dist/client/router';
import {
  FooterAddressDetailWrapper,
  FooterBigWrapper,
  FooterDivider,
  FooterLogoWrapper,
  FooterOthersOne,
  FooterOtherTwo,
  FooterWrapper,
} from './Footer.styles';
interface IProps {
  data: any;
}
const FooterUI = ({ data }: IProps) => {
  const router = useRouter();
  const selected = router.pathname;
  return (
    <>
      <FooterBigWrapper selected={selected === '/contactUs'}>
        <FooterWrapper>
          <FooterLogoWrapper
            //@ts-ignore
            src={data.main.logo}
          />
          <FooterAddressDetailWrapper
            value={data.footer.Address}
            name={'footer.Address'}
          />
          <FooterOthersOne href="/terms_of_service">
            {data.footer.Others[0]}
          </FooterOthersOne>
          <FooterDivider />
          <FooterOtherTwo href="/privacy_policy">
            {data.footer.Others[1]}
          </FooterOtherTwo>
        </FooterWrapper>
      </FooterBigWrapper>
    </>
  );
};

export default FooterUI;

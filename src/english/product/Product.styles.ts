import styled from '@emotion/styled';
import ImageBox from '../../common/ImageBox/ImageBox';
import TextBox from '../../common/TextBox/TextBox';

interface IPropsTwo {
  src: string;
}

export const ImageWrapper = styled(ImageBox)`
  width: 702px;
  height: 369px;
  margin-top: 35px;
  ${({ src }: IPropsTwo) => `background:url(${src})`};
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const ExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 370px;
`;
export const SubImageOuterWrappers = styled.div``;
export const SubImageMidWrappers = styled.div`
  position: relative;
`;

export const SubImageWrappers = styled(ImageBox)`
  width: 268px;
  object-fit: cover;
`;

export const SubImageTexts = styled(TextBox)`
  top: 89%;
  left: 82%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  position: absolute;
`;

export const ExplanationTitle = styled(TextBox)`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
  margin-bottom: 20px;
`;
export const ExplanationDetail = styled(TextBox)`
  width: 370px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
  list-style-type: disc;
  list-style-position: inside;
  text-indent: -1.5em;
  padding-left: 1.5em;
`;
export const MagneticInstrumentImageOneWrapper = styled(ImageBox)`
  width: 702px;
  height: 370px;
  margin-top: 35px;
  margin-left: 70px;
  ${({ src }: IPropsTwo) => `background:url(${src})`};
`;

export const ProductImageCaption = styled(TextBox)`
  margin-top: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
`;

export const MagneticInstrumentDCBHWrapper = styled.div`
  margin-top: 27px;
  margin-left: 70px;
  display: flex;
  align-items: center;
`;

export const MagneticInstrumentDCBHExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MagneticInstrumentDCBHTitle = styled(TextBox)`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
  margin-bottom: 15px;
`;

export const MagneticInstrumentDCBHImageButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 181px;
`;

export const MagneticInstrumentDCBHImageWrapper = styled(ImageBox)`
  width: 284px;
  height: 188px;
  ${({ src }: IPropsTwo) => `background:url(${src})`};
`;

export const MagneticInstrumentACMagneticWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  margin-left: 70px;
  align-items: center;
`;
export const MagneticInstrumentACMagneticExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MagneticInstrumentACMagneticTitle = styled(TextBox)`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
  margin-bottom: 20px;
`;
export const MagneticInstrumentACMagneticDetails = styled(TextBox)`
  width: 236px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
`;

export const ACMagneticButtonImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 143px;
  align-items: center;
`;

export const MagneticInstrumentACMagneticImageWrapper = styled(ImageBox)`
  width: 323px;
  height: 162px;
  ${({ src }: IPropsTwo) => `background:url(${src})`};
`;
export const SpecificationButton = styled.button`
  width: 152px;
  height: 30px;
  background: #f4f7ff;
  border: 1px solid #0070c0;
  box-sizing: border-box;
  border-radius: 30px;
  color: #0070c0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const SubImageMidTwoWrappers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 64px;
`;
export const SpecificationButtonWrapperHref = styled.a``;

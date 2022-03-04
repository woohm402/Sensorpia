import styled from '@emotion/styled';
import TextBox from '../../common/TextBox/TextBox';
import ImageBox from '../../common/ImageBox/ImageBox';

interface IProps {
  url: any;
}

interface Props {
  src: string;
}

export const AboutUsBigWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AboutUsImageOneWrapper = styled(ImageBox)`
  width: 842px;
  height: 449px;
  ${(props: Props) => `background:url(${props.src})`}
`;
export const AboutUsFirstTextWrapper = styled.div`
  max-width: 702px;
  margin: 30px 70px 0 70px;
  text-align: justify;
`;

export const AboutUsFirstText = styled(TextBox)`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 25px;
  color: #262626;
`;
export const CircleWrapper = styled.div`
  position: relative;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #262626;
  width: 984px;
  height: 256px;
`;
export const OrangeCircle = styled.div`
  position: absolute;
  top: 40px;
  left: 70px;
  border-radius: 50%;
  background: rgba(190, 94, 94, 0.1);
  width: 216px;
  height: 216px;
  border: 2px solid #be5e5e;
  box-sizing: border-box;
`;
export const BlueCirlce = styled.div`
  position: absolute;
  top: 40px;
  left: 179px;
  background: rgba(94, 104, 190, 0.1);
  border: 2px solid #5e68be;
  width: 216px;
  height: 216px;
  border-radius: 50%;
`;
export const DefenseText = styled(TextBox)`
  position: absolute;
  top: 137px;
  left: 95px;
`;
export const MagneticSensorsText = styled(TextBox)`
  position: absolute;
  top: 126px;
  left: 179px;
  max-width: 109px;
  word-break: normal;
`;
export const SatelliteText = styled(TextBox)`
  position: absolute;
  top: 137px;
  left: 304px;
  max-width: 111px;
  word-break: normal;
`;
export const MeasurementAndTestText = styled(TextBox)`
  position: absolute;
  top: 103px;
  left: 423px;
  max-width: 163px;
  word-break: normal;
`;
export const AboutUsArrowImageWrapper = styled.div`
  width: 134px;
  height: 18px;
  position: absolute;
  top: 193px;
  left: 440px;
  ${(props: IProps) => `background:url(${props.url})`};
  background-repeat: no-repeat;
`;
export const GreenCircle = styled.div`
  position: absolute;
  top: 40px;
  left: 596px;
  background: rgba(124, 189, 138, 0.1);
  border: 2px solid #7cbd8a;
  box-sizing: border-box;
  width: 216px;
  height: 216px;
  border-radius: 50%;
`;
export const MagneticInstrumentsText = styled(TextBox)`
  position: absolute;
  max-width: 144px;
  top: 126px;
  left: 629px;
`;
export const SecondTextWrapper = styled(TextBox)`
  margin-top: 40px;
  margin-left: 70px;
  max-width: 702px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #262626;
`;
export const OurCustomersTitleWrapper = styled(TextBox)`
  margin-top: 65px;
  margin-left: 70px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #0070c0;
`;
export const OurCustomersDivider = styled.div`
  width: 701px;
  height: 0;
  margin: 10px 71px 0 70px;
  border: 1px solid #c9c9c9;
`;
export const OurCustomersImageFirstLineWrapper = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
`;
export const LIGImageWrapper = styled(ImageBox)`
  width: 107px;
  height: 51px;
  margin-left: 101px;
  ${(props: Props) => `background:url(${props.src})`};
`;
export const HanhwaImageWrapper = styled(ImageBox)`
  width: 143px;
  height: 39px;
  margin-left: 63px;
  ${(props: Props) => `background:url(${props.src})`};
`;
export const KaiImageWrapper = styled(ImageBox)`
  width: 179px;
  height: 36px;
  margin-left: 49px;
  ${(props: Props) => `background:url(${props.src})`};
`;
export const KariImageWrapper = styled(ImageBox)`
  width: 77px;
  height: 77px;
  margin-left: 53px;
  ${(props: Props) => `background:url(${props.src})`};
`;
export const OurCustomersImageSecondLineWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 116px;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const KasiImageWrapper = styled(ImageBox)`
  width: 177px;
  height: 52px;
  margin-left: 70px;
  ${(props: Props) => `background:url(${props.src})`};
`;
export const SiImageWrapper = styled(ImageBox)`
  width: 95px;
  height: 75px;
  margin-left: 32px;
  ${(props: Props) => `background:url(${props.src})`};
`;
export const PoscoImageWrapper = styled(ImageBox)`
  width: 117px;
  height: 31px;
  margin-left: 43px;
  ${(props: Props) => `background:url(${props.src})`};
`;

export const SatracImageWrapper = styled(ImageBox)`
  width: 186px;
  height: 75px;
  margin-left: 52px;
  ${(props: Props) => `background:url(${props.src})`};
`;
export const VisionAndHistoryTitleWrapper = styled(TextBox)`
  margin-top: 35px;
  margin-left: 70px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #0070c0;
`;
export const VisionAndHistoryLineDivider = styled.div`
  width: 701px;
  height: 0;
  margin-top: 11px;
  border: 1px solid #c9c9c9;
  margin-left: 70px;
`;
export const VisionAndHistoryImagesWrapper = styled.div`
  display: flex;
  margin-top: 52px;
  margin-left: 70px;
`;

export const VisionAndHistoryImageOne = styled(ImageBox)`
  width: 325px;
  height: 329px;
  border-radius: 50%;
  ${(props: Props) => `background:url(${props.src})`};
`;
export const VisionAndHistoryImageTwo = styled(ImageBox)`
  width: 325px;
  height: 329px;
  margin-left: 48px;
  border-radius: 50%;
  ${(props: Props) => `background:url(${props.src})`};
`;

export const VisionAndHistoryExplanationsWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 70px;
`;
export const VisionAndHistoryExplanation = styled(TextBox)`
  max-width: 325px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #262626;

  &:last-of-type {
    margin-left: 49px;
  }
`;
export const VisionAndHistorySecondTitleWrapper = styled.div`
  margin-top: 100px;
  margin-left: 70px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #0070c0;
`;

export const VisionAndHistoryYearsWrapper = styled.div`
  margin-top: 31px;
  margin-left: 70px;
  display: flex;
`;
export const VisionAndHistoryArrowWrapper = styled.div`
  width: 30px;
  height: 470px;
  ${(props: IProps) => `background:url(${props.url})`};
  background-repeat: no-repeat;
`;
export const VisionAndHistoryYearExplanation = styled(TextBox)`
  margin-left: 42px;
  margin-bottom: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
`;

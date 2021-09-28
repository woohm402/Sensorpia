import {
  AboutUsArrowImageWrapper,
  AboutUsBigWrapper,
  AboutUsFirstText,
  AboutUsFirstTextWrapper,
  AboutUsImageOneWrapper,
  BlueCirlce,
  CircleWrapper,
  DefenseText,
  GreenCircle,
  HanhwaImageWrapper,
  KaiImageWrapper,
  KariImageWrapper,
  KasiImageWrapper,
  LIGImageWrapper,
  MagneticInstrumentsText,
  MagneticSensorsText,
  MeasurementAndTestText,
  OrangeCircle,
  OurCustomersDivider,
  OurCustomersImageFirstLineWrapper,
  OurCustomersImageSecondLineWrapper,
  OurCustomersTitleWrapper,
  PoscoImageWrapper,
  SatelliteText,
  SatracImageWrapper,
  SecondTextWrapper,
  SiImageWrapper,
  ThirdTextWrapper,
} from './AboutUs.styles'

interface IProps {
  menu: any
  data: any
}
const AboutUsUI = ({ menu, data }: IProps) => {
  return (
    <>
      {menu === 'Sensorpia intro.& our customers' && (
        <AboutUsBigWrapper>
          <AboutUsImageOneWrapper />
          <AboutUsFirstTextWrapper>
            <AboutUsFirstText>
              {data.aboutUs.sensorpiaIntro.first}
            </AboutUsFirstText>
          </AboutUsFirstTextWrapper>
          <CircleWrapper>
            <OrangeCircle />
            <BlueCirlce />
            <DefenseText>
              {data.aboutUs.sensorpiaIntro.circleTexts[0]}
            </DefenseText>
            <MagneticSensorsText>
              {data.aboutUs.sensorpiaIntro.circleTexts[1]}
            </MagneticSensorsText>
            <SatelliteText>
              {data.aboutUs.sensorpiaIntro.circleTexts[2]}
            </SatelliteText>
            <MeasurementAndTestText>
              {data.aboutUs.sensorpiaIntro.circleTexts[3]}
            </MeasurementAndTestText>
            <AboutUsArrowImageWrapper />
            <GreenCircle />
            <MagneticInstrumentsText>
              {data.aboutUs.sensorpiaIntro.circleTexts[4]}
            </MagneticInstrumentsText>
          </CircleWrapper>
          <SecondTextWrapper>
            {data.aboutUs.sensorpiaIntro.second}
          </SecondTextWrapper>
          <ThirdTextWrapper>
            {data.aboutUs.sensorpiaIntro.third}
          </ThirdTextWrapper>
          <OurCustomersTitleWrapper>
            {data.aboutUs.sensorpiaIntro.ourCustomers}
          </OurCustomersTitleWrapper>
          <OurCustomersDivider />
          <OurCustomersImageFirstLineWrapper>
            <LIGImageWrapper />
            <HanhwaImageWrapper />
            <KaiImageWrapper />
            <KariImageWrapper />
          </OurCustomersImageFirstLineWrapper>
          <OurCustomersImageSecondLineWrapper>
            <KasiImageWrapper />
            <SiImageWrapper />
            <PoscoImageWrapper />
            <SatracImageWrapper />
          </OurCustomersImageSecondLineWrapper>
        </AboutUsBigWrapper>
      )}
    </>
  )
}

export default AboutUsUI

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
  VisionAndHistoryArrowWrapper,
  VisionAndHistoryExplanationsWrapper,
  VisionAndHistoryFirstExplanation,
  VisionAndHistoryImageOne,
  VisionAndHistoryImagesWrapper,
  VisionAndHistoryImageTwo,
  VisionAndHistoryLineDivider,
  VisionAndHistorySecondExplanation,
  VisionAndHistorySecondTitleWrapper,
  VisionAndHistoryTitleWrapper,
  VisionAndHistoryYearExplanation,
  VisionAndHistoryYearsWrapper,
} from './AboutUs.styles'

interface IProps {
  menu: any
  data: any
}
const AboutUsUI = ({ menu, data }: IProps) => {
  return (
    <>
      {(menu === 'Sensorpia intro.& our customers' ||
        menu === '회사소개 & 주요 고객사') && (
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
      {(menu === 'Vision & History' || menu === '비전 & 회사 이력') && (
        <>
          <VisionAndHistoryTitleWrapper>
            {data.aboutUs.visionAndHistory.title}
          </VisionAndHistoryTitleWrapper>
          <VisionAndHistoryLineDivider />
          <VisionAndHistoryImagesWrapper>
            <VisionAndHistoryImageOne />
            <VisionAndHistoryImageTwo />
          </VisionAndHistoryImagesWrapper>
          <VisionAndHistoryExplanationsWrapper>
            <VisionAndHistoryFirstExplanation>
              {data.aboutUs.visionAndHistory.explanations.first}
            </VisionAndHistoryFirstExplanation>
            <VisionAndHistorySecondExplanation>
              {data.aboutUs.visionAndHistory.explanations.second}
            </VisionAndHistorySecondExplanation>
          </VisionAndHistoryExplanationsWrapper>
          <VisionAndHistorySecondTitleWrapper>
            {data.aboutUs.visionAndHistory.secondTitle}
          </VisionAndHistorySecondTitleWrapper>
          <VisionAndHistoryLineDivider />
          <VisionAndHistoryYearsWrapper>
            <VisionAndHistoryArrowWrapper />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {data.aboutUs.visionAndHistory.years.map((value: any) => (
                <VisionAndHistoryYearExplanation key="">
                  {`${value.year} ${value.content}`}
                </VisionAndHistoryYearExplanation>
              ))}
            </div>
          </VisionAndHistoryYearsWrapper>
        </>
      )}
    </>
  )
}

export default AboutUsUI

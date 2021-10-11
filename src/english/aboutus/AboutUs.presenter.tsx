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
          <AboutUsImageOneWrapper data={data.aboutUs.images[0]} />
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
            <AboutUsArrowImageWrapper data={data.aboutUs.images[1]} />
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
            <LIGImageWrapper data={data.aboutUs.clientImages[0]} />
            <HanhwaImageWrapper data={data.aboutUs.clientImages[1]} />
            <KaiImageWrapper data={data.aboutUs.clientImages[2]} />
            <KariImageWrapper data={data.aboutUs.clientImages[3]} />
          </OurCustomersImageFirstLineWrapper>
          <OurCustomersImageSecondLineWrapper>
            <KasiImageWrapper data={data.aboutUs.clientImages[4]} />
            <SiImageWrapper data={data.aboutUs.clientImages[5]} />
            <PoscoImageWrapper data={data.aboutUs.clientImages[6]} />
            <SatracImageWrapper data={data.aboutUs.clientImages[7]} />
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
            <VisionAndHistoryImageOne data={data.aboutUs.images[2]} />
            <VisionAndHistoryImageTwo data={data.aboutUs.images[3]} />
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
            <VisionAndHistoryArrowWrapper data={data.aboutUs.images[4]} />
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

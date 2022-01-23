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
  data: any
  pageIndex: any
  introPage: any
  visionPage: any
}
const AboutUsUI = ({ pageIndex, data, introPage, visionPage }: IProps) => {
  return (
    <>
      {data.aboutUs[pageIndex]?.layout === introPage && (
        <AboutUsBigWrapper>
          <AboutUsImageOneWrapper
            url={data.aboutUs[pageIndex]?.data.mainImage}
          />
          <AboutUsFirstTextWrapper>
            {data.aboutUs[pageIndex].data.circleAboveTexts.map((data: any, i: number) => (
              <AboutUsFirstText key={i}>{data}</AboutUsFirstText>
            ))}
          </AboutUsFirstTextWrapper>
          <CircleWrapper>
            <OrangeCircle />
            <BlueCirlce />
            <DefenseText>
              {data.aboutUs[pageIndex].data.circleTexts[0]}
            </DefenseText>
            <MagneticSensorsText>
              {data.aboutUs[pageIndex].data.circleTexts[1]}
            </MagneticSensorsText>
            <SatelliteText>
              {data.aboutUs[pageIndex].data.circleTexts[2]}
            </SatelliteText>
            <MeasurementAndTestText>
              {data.aboutUs[pageIndex].data.circleTexts[3]}
            </MeasurementAndTestText>
            <AboutUsArrowImageWrapper url={data.aboutUs[pageIndex].arrow} />
            <GreenCircle />
            <MagneticInstrumentsText>
              {data.aboutUs[pageIndex].data.circleTexts[4]}
            </MagneticInstrumentsText>
          </CircleWrapper>
          <SecondTextWrapper>
            {data.aboutUs[pageIndex].data.circleBelowTexts[0]}
          </SecondTextWrapper>
          <ThirdTextWrapper>
            {data.aboutUs[pageIndex].data.circleBelowTexts[1]}
          </ThirdTextWrapper>
          <OurCustomersTitleWrapper>
            {data.aboutUs[pageIndex].data.subTitle}
          </OurCustomersTitleWrapper>
          <OurCustomersDivider />
          <OurCustomersImageFirstLineWrapper>
            <LIGImageWrapper
              url={data.aboutUs[pageIndex].data.subClientImages[0]}
            />
            <HanhwaImageWrapper
              url={data.aboutUs[pageIndex].data.subClientImages[1]}
            />
            <KaiImageWrapper
              url={data.aboutUs[pageIndex].data.subClientImages[2]}
            />
            <KariImageWrapper
              url={data.aboutUs[pageIndex].data.subClientImages[3]}
            />
          </OurCustomersImageFirstLineWrapper>
          <OurCustomersImageSecondLineWrapper>
            <KasiImageWrapper
              url={data.aboutUs[pageIndex].data.subClientImages[4]}
            />
            <SiImageWrapper
              url={data.aboutUs[pageIndex].data.subClientImages[5]}
            />
            <PoscoImageWrapper
              url={data.aboutUs[pageIndex].data.subClientImages[6]}
            />
            <SatracImageWrapper
              url={data.aboutUs[pageIndex].data.subClientImages[7]}
            />
          </OurCustomersImageSecondLineWrapper>
        </AboutUsBigWrapper>
      )}
      {data.aboutUs[pageIndex]?.layout === visionPage && (
        <>
          <VisionAndHistoryTitleWrapper>
            {data.aboutUs[pageIndex].data.mainTitle}
          </VisionAndHistoryTitleWrapper>
          <VisionAndHistoryLineDivider />
          <VisionAndHistoryImagesWrapper>
            <VisionAndHistoryImageOne
              url={data.aboutUs[pageIndex].data.mainImages[0]}
            />
            <VisionAndHistoryImageTwo
              url={data.aboutUs[pageIndex].data.mainImages[1]}
            />
          </VisionAndHistoryImagesWrapper>
          <VisionAndHistoryExplanationsWrapper>
            <VisionAndHistoryFirstExplanation>
              {data.aboutUs[pageIndex].data.explanations[0]}
            </VisionAndHistoryFirstExplanation>
            <VisionAndHistorySecondExplanation>
              {data.aboutUs[pageIndex].data.explanations[1]}
            </VisionAndHistorySecondExplanation>
          </VisionAndHistoryExplanationsWrapper>
          <VisionAndHistorySecondTitleWrapper>
            {data.aboutUs[pageIndex].data.subTitle}
          </VisionAndHistorySecondTitleWrapper>
          <VisionAndHistoryLineDivider />
          <VisionAndHistoryYearsWrapper>
            <VisionAndHistoryArrowWrapper
              url={data.aboutUs[pageIndex]?.arrow}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {data.aboutUs[pageIndex].data.years?.map((value: any, i: number) => (
                <VisionAndHistoryYearExplanation key={i}>
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

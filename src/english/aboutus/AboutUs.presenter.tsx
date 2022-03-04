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
  VisionAndHistoryArrowWrapper,
  VisionAndHistoryExplanationsWrapper,
  VisionAndHistoryImageOne,
  VisionAndHistoryImagesWrapper,
  VisionAndHistoryImageTwo,
  VisionAndHistoryLineDivider,
  VisionAndHistoryExplanation,
  VisionAndHistorySecondTitleWrapper,
  VisionAndHistoryTitleWrapper,
  VisionAndHistoryYearExplanation,
  VisionAndHistoryYearsWrapper,
} from './AboutUs.styles';

interface IProps {
  data: any;
  pageIndex: any;
  introPage: any;
  visionPage: any;
}
const AboutUsUI = ({ pageIndex, data, introPage, visionPage }: IProps) => {
  return (
    <>
      {data.aboutUs[pageIndex]?.layout === introPage && (
        <AboutUsBigWrapper>
          <AboutUsImageOneWrapper
            src={data.aboutUs[pageIndex]?.data.mainImage}
            name={`aboutUs.${pageIndex}.data.mainImage`}
          />
          <AboutUsFirstTextWrapper>
            {data.aboutUs[pageIndex].data.circleAboveTexts.map(
              (v: any, i: number) => (
                <AboutUsFirstText
                  as={'span'}
                  value={v}
                  key={i}
                  name={`aboutUs.${pageIndex}.data.circleAboveTexts.${i}`}
                />
              )
            )}
          </AboutUsFirstTextWrapper>
          <CircleWrapper>
            <OrangeCircle />
            <BlueCirlce />
            <DefenseText
              value={data.aboutUs[pageIndex].data.circleTexts[0]}
              name={`aboutUs.${pageIndex}.data.circleTexts.0`}
            />
            <MagneticSensorsText
              value={data.aboutUs[pageIndex].data.circleTexts[1]}
              name={`aboutUs.${pageIndex}.data.circleTexts.1`}
            />
            <SatelliteText
              value={data.aboutUs[pageIndex].data.circleTexts[2]}
              name={`aboutUs.${pageIndex}.data.circleTexts.2`}
            />
            <MeasurementAndTestText
              value={data.aboutUs[pageIndex].data.circleTexts[3]}
              name={`aboutUs.${pageIndex}.data.circleTexts.3`}
            />
            <AboutUsArrowImageWrapper url={data.aboutUs[pageIndex].arrow} />
            <GreenCircle />
            <MagneticInstrumentsText
              value={data.aboutUs[pageIndex].data.circleTexts[4]}
              name={`aboutUs.${pageIndex}.data.circleTexts.4`}
            />
          </CircleWrapper>
          <SecondTextWrapper
            value={data.aboutUs[pageIndex].data.circleBelowTexts[0]}
            name={`aboutUs.${pageIndex}.data.circleBelowTexts.0`}
          />
          <SecondTextWrapper
            value={data.aboutUs[pageIndex].data.circleBelowTexts[1]}
            name={`aboutUs.${pageIndex}.data.circleBelowTexts.1`}
          />
          <OurCustomersTitleWrapper
            value={data.aboutUs[pageIndex].data.subTitle}
            name={`aboutUs.${pageIndex}.data.subTitle`}
          />
          <OurCustomersDivider />
          <OurCustomersImageFirstLineWrapper>
            <LIGImageWrapper
              src={data.aboutUs[pageIndex].data.subClientImages[0]}
              name={`aboutUs.${pageIndex}.data.subClientImages.0`}
            />
            <HanhwaImageWrapper
              src={data.aboutUs[pageIndex].data.subClientImages[1]}
              name={`aboutUs.${pageIndex}.data.subClientImages.1`}
            />
            <KaiImageWrapper
              src={data.aboutUs[pageIndex].data.subClientImages[2]}
              name={`aboutUs.${pageIndex}.data.subClientImages.2`}
            />
            <KariImageWrapper
              src={data.aboutUs[pageIndex].data.subClientImages[3]}
              name={`aboutUs.${pageIndex}.data.subClientImages.3`}
            />
          </OurCustomersImageFirstLineWrapper>
          <OurCustomersImageSecondLineWrapper>
            <KasiImageWrapper
              src={data.aboutUs[pageIndex].data.subClientImages[4]}
              name={`aboutUs.${pageIndex}.data.subClientImages.4`}
            />
            <SiImageWrapper
              src={data.aboutUs[pageIndex].data.subClientImages[5]}
              name={`aboutUs.${pageIndex}.data.subClientImages.5`}
            />
            <PoscoImageWrapper
              src={data.aboutUs[pageIndex].data.subClientImages[6]}
              name={`aboutUs.${pageIndex}.data.subClientImages.6`}
            />
            <SatracImageWrapper
              src={data.aboutUs[pageIndex].data.subClientImages[7]}
              name={`aboutUs.${pageIndex}.data.subClientImages.7`}
            />
          </OurCustomersImageSecondLineWrapper>
        </AboutUsBigWrapper>
      )}
      {data.aboutUs[pageIndex]?.layout === visionPage && (
        <>
          <VisionAndHistoryTitleWrapper
            value={data.aboutUs[pageIndex].data.mainTitle}
            name={`aboutUs.${pageIndex}.data.mainTitle`}
          />
          <VisionAndHistoryLineDivider />
          <VisionAndHistoryImagesWrapper>
            <VisionAndHistoryImageOne
              src={data.aboutUs[pageIndex].data.mainImages[0]}
              name={`aboutUs.${pageIndex}.data.mainImages.0`}
            />
            <VisionAndHistoryImageTwo
              src={data.aboutUs[pageIndex].data.mainImages[1]}
              name={`aboutUs.${pageIndex}.data.mainImages.1`}
            />
          </VisionAndHistoryImagesWrapper>
          <VisionAndHistoryExplanationsWrapper>
            {[0, 1].map((item) => (
              <VisionAndHistoryExplanation
                key={item}
                value={data.aboutUs[pageIndex].data.explanations[item]}
                name={`aboutUs.${pageIndex}.data.explanations.${item}`}
              />
            ))}
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
              {data.aboutUs[pageIndex].data.years?.map(
                (value: any, i: number) => (
                  <VisionAndHistoryYearExplanation
                    key={i}
                    value={value}
                    name={`aboutUs.${pageIndex}.data.years.${i}`}
                  />
                )
              )}
            </div>
          </VisionAndHistoryYearsWrapper>
        </>
      )}
    </>
  );
};

export default AboutUsUI;

import { useRouter } from 'next/dist/client/router';
import {
  ACMagneticButtonImageWrapper,
  MagneticInstrumentACMagneticDetails,
  MagneticInstrumentACMagneticExplanationWrapper,
  MagneticInstrumentACMagneticImageWrapper,
  MagneticInstrumentACMagneticTitle,
  MagneticInstrumentACMagneticWrapper,
  MagneticInstrumentDCBHImageButtonWrapper,
  MagneticInstrumentDCBHImageWrapper,
  MagneticInstrumentDCBHTitle,
  MagneticInstrumentDCBHWrapper,
  MagneticInstrumentImageOneDetail,
  MagneticInstrumentImageOneWrapper,
  MagneticInstrumentDCBHExplanationWrapper,
  SpecificationButton,
  SpecificationButtonWrapperHref,
} from './Product.styles';
import { useLanguageContext } from '../../context/language/language';

const MagneticInstrumentsPage = () => {
  const { languageData: data } = useLanguageContext();
  const router = useRouter();
  const pageIndex = Number(router.query.item);

  return (
    <>
      <MagneticInstrumentImageOneWrapper
        src={data.products[pageIndex]?.data.subSections[0]?.mainImage}
        name={`products.${pageIndex}.data.subSections.0.mainImage`}
      />
      <MagneticInstrumentImageOneDetail
        as={'li'}
        value={
          data.products[pageIndex]?.data.subSections[0]
            ?.textExplanationDetails[0]
        }
        name={`products.${pageIndex}.data.subSections.0.textExplanationDetails.0`}
      />
      <MagneticInstrumentDCBHWrapper>
        <MagneticInstrumentDCBHExplanationWrapper>
          <MagneticInstrumentDCBHTitle
            value={
              data.products[pageIndex]?.data.subSections[0]
                ?.subImagesAndTexts[0]?.title
            }
            name={`products.${pageIndex}.data.subSections.0.subImagesAndTexts.0.title`}
          />

          {data.products[
            pageIndex
          ]?.data.subSections[0]?.subImagesAndTexts[0].details.map(
            (detail: string, index: number) => (
              <MagneticInstrumentACMagneticDetails
                as={'li'}
                key={index}
                value={detail}
                name={`products.${pageIndex}.data.subSections.0.subImagesAndTexts.0.details.${index}`}
              />
            )
          )}
        </MagneticInstrumentDCBHExplanationWrapper>
        <MagneticInstrumentDCBHImageButtonWrapper>
          <MagneticInstrumentDCBHImageWrapper
            src={
              data.products[pageIndex]?.data.subSections[0]
                ?.subImagesAndTexts[0].image
            }
            name={`products.${pageIndex}.data.subSections.0.subImagesAndTexts.0.image`}
          />
          <SpecificationButtonWrapperHref
            href={
              data.products[pageIndex]?.data.subSections[0]
                ?.subImagesAndTexts[0].pdf
            }
          >
            <SpecificationButton>
              {data.main.specificationButton}
            </SpecificationButton>
          </SpecificationButtonWrapperHref>
        </MagneticInstrumentDCBHImageButtonWrapper>
      </MagneticInstrumentDCBHWrapper>
      <MagneticInstrumentACMagneticWrapper>
        <MagneticInstrumentACMagneticExplanationWrapper>
          <MagneticInstrumentACMagneticTitle
            value={
              data.products[pageIndex]?.data.subSections[0]
                ?.subImagesAndTexts[1]?.title
            }
            name={`products.${pageIndex}.data.subSections.0.subImagesAndTexts.1.title`}
          />
          {data.products[
            pageIndex
          ]?.data.subSections[0]?.subImagesAndTexts[1].details.map(
            (detail: string, index: number) => (
              <MagneticInstrumentACMagneticDetails
                value={detail}
                key={index}
                name={`products.${pageIndex}.data.subSections.0.subImagesAndTexts.1.details.${index}`}
              />
            )
          )}
        </MagneticInstrumentACMagneticExplanationWrapper>
        <ACMagneticButtonImageWrapper>
          <MagneticInstrumentACMagneticImageWrapper
            src={
              data.products[pageIndex]?.data.subSections[0]
                ?.subImagesAndTexts[1].image
            }
            name={`products.${pageIndex}.data.subSections.0.subImagesAndTexts.1.image`}
          />
          <SpecificationButtonWrapperHref
            href={
              data.products[pageIndex]?.data.subSections[0]
                ?.subImagesAndTexts[1].pdf
            }
          >
            <SpecificationButton>
              {data.main.specificationButton}
            </SpecificationButton>
          </SpecificationButtonWrapperHref>
        </ACMagneticButtonImageWrapper>
      </MagneticInstrumentACMagneticWrapper>
    </>
  );
};

export default MagneticInstrumentsPage;

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
import { replaceValue } from '../../lib/replaceValue';

const MagneticInstrumentsPage = () => {
  const { languageData: data, setCurrentLanguageData } = useLanguageContext();
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
                key={detail + index}
                value={detail}
                name={`products.${pageIndex}.data.subSections.0.subImagesAndTexts.0.details.${index}`}
                onDelete={() =>
                  setCurrentLanguageData(
                    replaceValue(
                      data,
                      `products.${pageIndex}.data.subSections.0.subImagesAndTexts.0.details`,
                      data.products[
                        pageIndex
                      ]?.data.subSections[0]?.subImagesAndTexts[0].details.filter(
                        (_: string, i: number) => i !== index
                      )
                    )
                  )
                }
              />
            )
          )}
          <button
            style={{ marginTop: 16 }}
            onClick={() => {
              const newData = replaceValue(
                data,
                `products.${pageIndex}.data.subSections.0.subImagesAndTexts.0.details`,
                data.products[
                  pageIndex
                ]?.data.subSections[0]?.subImagesAndTexts[0].details.concat(
                  'content'
                )
              );
              setCurrentLanguageData(newData);
            }}
          >
            추가
          </button>
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
                key={detail + index}
                name={`products.${pageIndex}.data.subSections.0.subImagesAndTexts.1.details.${index}`}
                onDelete={() =>
                  setCurrentLanguageData(
                    replaceValue(
                      data,
                      `products.${pageIndex}.data.subSections.0.subImagesAndTexts.1.details`,
                      data.products[
                        pageIndex
                      ]?.data.subSections[0]?.subImagesAndTexts[1].details.filter(
                        (_: string, i: number) => i !== index
                      )
                    )
                  )
                }
              />
            )
          )}
          <button
            style={{ marginTop: 16 }}
            onClick={() => {
              const newData = replaceValue(
                data,
                `products.${pageIndex}.data.subSections.0.subImagesAndTexts.1.details`,
                data.products[
                  pageIndex
                ]?.data.subSections[0]?.subImagesAndTexts[1].details.concat(
                  'content'
                )
              );
              setCurrentLanguageData(newData);
            }}
          >
            추가
          </button>
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

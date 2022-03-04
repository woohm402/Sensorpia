import { useRouter } from 'next/dist/client/router';
import {
  ContentWrapper,
  ExplanationDetail,
  ExplanationTitle,
  ExplanationWrapper,
  ImageWrapper,
  SubImageWrappers,
  SubImageOuterWrappers,
  SubImageTexts,
  SubImageMidWrappers,
  SpecificationButton,
  SubImageMidTwoWrappers,
  SpecificationButtonWrapperHref,
} from './Product.styles';
import MagneticInstrumentsPage from './ProductMagnecticInstruments.presenter';
import { useLanguageContext } from '../../context/language/language';
import { replaceValue } from '../../lib/replaceValue';
import axios from 'axios';
import toast from 'react-hot-toast';

const ProductUI = () => {
  const { languageData: data, language, fetchLanguage } = useLanguageContext();
  const router = useRouter();
  const basicPage = 'productBasicPage';
  const magneticPage = 'productMagneticInstrumentsPage';
  const pageIndex = Number(router.query.item);
  const buttonName = router.query.keyword;
  const buttonIndex = data.products[pageIndex]?.data.subSections.findIndex(
    (data: any) => data.name === buttonName
  );
  return (
    <div style={{ position: 'relative', marginLeft: '70px' }}>
      {data.products[pageIndex]?.layout === basicPage && (
        <>
          <ImageWrapper
            src={
              data.products[pageIndex]?.data.subSections[buttonIndex]?.mainImage
            }
            name={`products.${pageIndex}.data.subSections.${buttonIndex}.mainImage`}
          />
          <ContentWrapper>
            <ExplanationWrapper>
              <ExplanationTitle
                value={
                  data.products[pageIndex]?.data.subSections[buttonIndex]
                    ?.textExplanationTitle
                }
                name={`products.${pageIndex}.data.subSections.${buttonIndex}.textExplanationTitle`}
              />
              {data.products[pageIndex]?.data.subSections[
                buttonIndex
              ]?.textExplanationDetails.map(
                (explanation: string, i: number) => (
                  <ExplanationDetail
                    as={'li'}
                    value={explanation}
                    key={i}
                    name={`products.${pageIndex}.data.subSections.${buttonIndex}.textExplanationDetails.${i}`}
                    onDelete={() => {
                      const newData = replaceValue(
                        data,
                        `products.${pageIndex}.data.subSections.${buttonIndex}.textExplanationDetails`,
                        data.products[pageIndex]?.data.subSections[
                          buttonIndex
                        ]?.textExplanationDetails.filter(
                          (_: string, index: number) => i !== index
                        )
                      );
                      axios
                        .put(`/api/admin/content/${language}`, {
                          body: JSON.stringify(newData),
                        })
                        .then(() => fetchLanguage())
                        .then(() => toast.success('값이 제거되었습니다.'));
                    }}
                  />
                )
              )}
              <button
                style={{ marginTop: 16 }}
                onClick={() => {
                  const newData = replaceValue(
                    data,
                    `products.${pageIndex}.data.subSections.${buttonIndex}.textExplanationDetails`,
                    data.products[pageIndex]?.data.subSections[
                      buttonIndex
                    ]?.textExplanationDetails.concat('content')
                  );
                  axios
                    .put(`/api/admin/content/${language}`, {
                      body: JSON.stringify(newData),
                    })
                    .then(() => fetchLanguage())
                    .then(() => toast.success('값이 추가되었습니다.'));
                }}
              >
                추가
              </button>
            </ExplanationWrapper>
            <SubImageOuterWrappers>
              {data.products[pageIndex]?.data.subSections[
                buttonIndex
              ]?.subImagesAndTexts.map((value: any, i: number) => (
                <SubImageMidTwoWrappers key={i}>
                  <SubImageMidWrappers>
                    <SubImageWrappers
                      as={'img'}
                      src={value.image}
                      name={`products.${pageIndex}.data.subSections.${buttonIndex}.subImagesAndTexts.${i}.image`}
                    />
                    <SubImageTexts
                      value={value.text}
                      name={`products.${pageIndex}.data.subSections.${buttonIndex}.subImagesAndTexts.${i}.text`}
                    />
                  </SubImageMidWrappers>
                  <SpecificationButtonWrapperHref href={value.pdf}>
                    <SpecificationButton>
                      {data.main.specificationButton}
                    </SpecificationButton>
                  </SpecificationButtonWrapperHref>
                </SubImageMidTwoWrappers>
              ))}
            </SubImageOuterWrappers>
          </ContentWrapper>
        </>
      )}
      {data.products[pageIndex]?.layout === magneticPage && (
        <MagneticInstrumentsPage />
      )}
    </div>
  );
};

export default ProductUI;

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
  ProductImageCaption,
} from './Product.styles';
import { useLanguageContext } from '../../context/language/language';
import { replaceValue } from '../../lib/replaceValue';

const ProductUI = () => {
  const { languageData: data, setCurrentLanguageData } = useLanguageContext();
  const router = useRouter();
  const pageIndex = Number(router.query.item);
  const buttonName = router.query.keyword;
  const buttonIndex = data.products[pageIndex]?.data.subSections.findIndex(
    (data) => data.name === buttonName
  );
  return (
    <div style={{ position: 'relative', marginLeft: '70px' }}>
      <>
        <ImageWrapper
          src={
            data.products[pageIndex]?.data.subSections[buttonIndex]?.mainImage
          }
          name={`products.${pageIndex}.data.subSections.${buttonIndex}.mainImage`}
        />
        {data.products[pageIndex]?.data.subSections[0]?.captions.map(
          (item, i) => (
            <ProductImageCaption
              key={item + i}
              as={'li'}
              value={item}
              name={`products.${pageIndex}.data.subSections.0.captions.${i}`}
            />
          )
        )}

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
            ]?.textExplanationDetails.map((explanation: string, i: number) => (
              <ExplanationDetail
                as={'li'}
                value={explanation}
                key={`${explanation}_${i}`}
                name={`products.${pageIndex}.data.subSections.${buttonIndex}.textExplanationDetails.${i}`}
                onDelete={() =>
                  setCurrentLanguageData(
                    replaceValue(
                      data,
                      `products.${pageIndex}.data.subSections.${buttonIndex}.textExplanationDetails`,
                      data.products[pageIndex]?.data.subSections[
                        buttonIndex
                      ]?.textExplanationDetails.filter(
                        (_: string, index: number) => i !== index
                      )
                    )
                  )
                }
              />
            ))}
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
                setCurrentLanguageData(newData);
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
    </div>
  );
};

export default ProductUI;

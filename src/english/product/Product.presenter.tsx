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

  if (pageIndex < 0 || pageIndex >= data.products.length || isNaN(pageIndex)) {
    router.push({
      query: {
        item: 0,
        keyword: data.products[0]?.data.subSections[0].name,
      },
    });

    return null;
  }

  if (buttonIndex === -1 || buttonIndex === undefined) {
    router.push({
      query: {
        item: router.query.item,
        keyword: data.products[pageIndex]?.data.subSections[0].name,
      },
    });

    return null;
  }

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

        {data.products[pageIndex]?.data.subSections[buttonIndex]?.contents.map(
          (content, i) => {
            const contentBaseName = `products.${pageIndex}.data.subSections.${buttonIndex}.contents.${i}`;
            return (
              <ContentWrapper key={i}>
                <ExplanationWrapper>
                  <ExplanationTitle
                    value={content.title}
                    name={`${contentBaseName}.title`}
                  />
                  {content.descriptions.map(
                    (explanation: string, i: number) => (
                      <ExplanationDetail
                        as={'li'}
                        value={explanation}
                        key={`${explanation}_${i}`}
                        name={`${contentBaseName}.descriptions.${i}`}
                        onDelete={() =>
                          setCurrentLanguageData(
                            replaceValue(
                              data,
                              `${contentBaseName}.descriptions`,
                              content.descriptions.filter(
                                (_: string, index: number) => i !== index
                              )
                            )
                          )
                        }
                      />
                    )
                  )}
                  <button
                    style={{ margin: '16px 0' }}
                    onClick={() => {
                      const newData = replaceValue(
                        data,
                        `${contentBaseName}.descriptions`,
                        content.descriptions.concat('content')
                      );
                      setCurrentLanguageData(newData);
                    }}
                  >
                    추가
                  </button>
                </ExplanationWrapper>
                <SubImageOuterWrappers>
                  {content.images?.map((value, i) => (
                    <SubImageMidTwoWrappers key={i}>
                      <SubImageMidWrappers>
                        <SubImageWrappers
                          as={'img'}
                          src={value.src}
                          name={`${contentBaseName}.images.${i}.src`}
                        />
                        <SubImageTexts
                          value={value.text}
                          name={`${contentBaseName}.images.${i}.text`}
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
            );
          }
        )}
      </>
    </div>
  );
};

export default ProductUI;

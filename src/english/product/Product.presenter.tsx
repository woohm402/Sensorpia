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
  SubImageMidTwoWrappers,
  ProductImageCaption,
} from './Product.styles';
import { useLanguageContext } from '../../context/language/language';
import { replaceValue } from '../../lib/replaceValue';
import { DUMMY_DESCRIPTION } from '../../lib/dummy/dummyDescription';
import { useAdminContext } from '../../context/admin/admin';
import { DUMMY_PRODUCT } from '../../lib/dummy/dummyProduct';
import PdfBox from '../../common/PdfBox.tsx/PdfBox';
import { DUMMY_CONTENT } from '../../lib/dummy/dummyContent';

const ProductUI = () => {
  const { languageData: data, setCurrentLanguageData } = useLanguageContext();
  const router = useRouter();
  const pageIndex = Number(router.query.item);
  const buttonName = router.query.keyword;
  const buttonIndex = data.products[pageIndex]?.data.subSections.findIndex(
    (data) => data.name === buttonName
  );

  const { isAdmin } = useAdminContext();

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
              <ContentWrapper
                key={content.title + content.descriptions.join('') + i}
              >
                <ExplanationWrapper>
                  <div
                    style={{ display: 'flex', gap: 16, alignItems: 'center' }}
                  >
                    <ExplanationTitle
                      value={content.title}
                      name={`${contentBaseName}.title`}
                    />
                    {isAdmin && (
                      <button
                        onClick={() => {
                          setCurrentLanguageData(
                            replaceValue(
                              data,
                              `products.${pageIndex}.data.subSections.${buttonIndex}.contents`,
                              data.products[pageIndex]?.data.subSections[
                                buttonIndex
                              ]?.contents.filter((_, cI) => cI !== i)
                            )
                          );
                        }}
                      >
                        섹션 제거
                      </button>
                    )}
                  </div>

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
                  {isAdmin && (
                    <button
                      style={{ margin: '16px 0' }}
                      onClick={() => {
                        const newData = replaceValue(
                          data,
                          `${contentBaseName}.descriptions`,
                          content.descriptions.concat(DUMMY_DESCRIPTION)
                        );
                        setCurrentLanguageData(newData);
                      }}
                    >
                      추가
                    </button>
                  )}
                </ExplanationWrapper>
                <SubImageOuterWrappers>
                  {content.images?.map((value, i) => (
                    <SubImageMidTwoWrappers key={value.src + value.text + i}>
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
                      <PdfBox
                        name={`${contentBaseName}.images.${i}.pdf`}
                        href={value.pdf}
                        onDelete={() =>
                          setCurrentLanguageData(
                            replaceValue(
                              data,
                              `${contentBaseName}.images`,
                              content.images.filter(
                                (_, imageIndex) => i !== imageIndex
                              )
                            )
                          )
                        }
                      />
                    </SubImageMidTwoWrappers>
                  ))}
                  {isAdmin && (
                    <button
                      style={{
                        margin: '16px 0 16px 64px',
                        width: 'calc(100% - 64px)',
                      }}
                      onClick={() => {
                        setCurrentLanguageData(
                          replaceValue(
                            data,
                            `${contentBaseName}.images`,
                            content.images.concat(DUMMY_PRODUCT)
                          )
                        );
                      }}
                    >
                      추가
                    </button>
                  )}
                </SubImageOuterWrappers>
              </ContentWrapper>
            );
          }
        )}
      </>
      {isAdmin && (
        <button
          style={{ width: '100%' }}
          onClick={() => {
            setCurrentLanguageData(
              replaceValue(
                data,
                `products.${pageIndex}.data.subSections.${buttonIndex}.contents`,
                data.products[pageIndex]?.data.subSections[
                  buttonIndex
                ]?.contents.concat(DUMMY_CONTENT)
              )
            );
          }}
        >
          추가
        </button>
      )}
    </div>
  );
};

export default ProductUI;

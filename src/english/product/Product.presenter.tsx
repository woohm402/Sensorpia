import { useRouter } from 'next/dist/client/router'
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
} from './Product.styles'
import MagneticInstrumentsPage from './ProductMagnecticInstruments.presenter'
import { useLanguageContext } from '../../context/language/language'

const ProductUI = () => {
  const { language, languageData: data } = useLanguageContext()
  const router = useRouter()
  const basicPage = 'productBasicPage'
  const magneticPage = 'productMagneticInstrumentsPage'
  const path = router.pathname
  const pageIndex = Number(router.query.item)
  const buttonName = router.query.keyword
  const buttonIndex = data.products[pageIndex]?.data.subSections.findIndex(
    (data: any) => data.name === buttonName
  )
  const onClickProductDetails = (event: any) => {
    router.push({
      pathname: path,
      query: { item: router.query.item, keyword: event.target.id },
    })
  }
  return (
    <div style={{ position: 'relative', marginLeft: '70px' }}>
      {data.products[pageIndex]?.layout === basicPage && (
        <>
          <ImageWrapper
            url={
              data.products[pageIndex]?.data.subSections[buttonIndex]?.mainImage
            }
          />
          <ContentWrapper>
            <ExplanationWrapper>
              <ExplanationTitle>
                {
                  data.products[pageIndex]?.data.subSections[buttonIndex]
                    ?.textExplanationTitle
                }
              </ExplanationTitle>
              {data.products[pageIndex]?.data.subSections[
                buttonIndex
              ]?.textExplanationDetails.map((data: any, i: number) => (
                <ExplanationDetail key={i}>{data}</ExplanationDetail>
              ))}
            </ExplanationWrapper>
            <SubImageOuterWrappers>
              {data.products[pageIndex]?.data.subSections[
                buttonIndex
              ]?.subImagesAndTexts.map((value: any, i: number) => (
                <SubImageMidTwoWrappers key={i}>
                  <SubImageMidWrappers>
                    <SubImageWrappers src={value.image} />
                    <SubImageTexts>{value.text}</SubImageTexts>
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
        <>
          <MagneticInstrumentsPage />
        </>
      )}
    </div>
  )
}

export default ProductUI

import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import {
  ContentWrapper,
  DefenseContentWrapper,
  DefenseExplanationDetail,
  DefenseExplanationTitle,
  DefenseExplanationWrapper,
  DefenseImageMSSeven,
  DefenseImageMSThirteen,
  DefenseImageMSTwentySeven,
  DefenseImageWrapper,
  DefenseImageWrapperTwo,
  ExplanationDetail,
  ExplanationTitle,
  ExplanationWrapper,
  MagneticInstrumentDCBHTitle,
  MagneticInstrumentDCBHWrapper,
  MagneticInstrumentDetails,
  MagneticInstrumentImageOneDetail,
  MagneticInstrumentImageOneWrapper,
  MagneticInstumentDCBHExplanationWrapper,
  MagneticInstrumentDCBHImageWrapper,
  MagneticInstrumentACMagneticWrapper,
  MagneticInstrumentACMagneticExplanationWrapper,
  MagneticInstrumentACMagneticTitle,
  MagneticInstrumentACMagneticDetails,
  MagneticInstrumentACMagneticImageWrapper,
  ThreeAxisButtons,
  ImageWrapper,
  SubImageWrappers,
  SubImageOuterWrappers,
} from './Product.styles'

const ProductUI = () => {
  const { menu, setMenu, language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
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
          {data.products[pageIndex]?.data.subSections.map((data: any) => (
            <ThreeAxisButtons
              key=""
              onClick={onClickProductDetails}
              id={data.name}
              //@ts-ignore
              color={data.name === buttonName}
            >
              {data.name}
            </ThreeAxisButtons>
          ))}
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
              ]?.textExplanationDetails.map((data: any) => (
                <ExplanationDetail key="">{data}</ExplanationDetail>
              ))}
            </ExplanationWrapper>
            <SubImageOuterWrappers>
              {data.products[pageIndex]?.data.subSections[
                buttonIndex
              ]?.subImagesAndTexts.map((data: any) => (
                <SubImageWrappers key="" url={data.image}></SubImageWrappers>
              ))}
            </SubImageOuterWrappers>
          </ContentWrapper>
        </>
      )}
      {data.products[pageIndex]?.layout === magneticPage && (
        <>
          <MagneticInstrumentImageOneWrapper
            url={data.products[pageIndex]?.data.subSections[0]?.mainImage}
          />
          <MagneticInstrumentImageOneDetail>
            {
              data.products[pageIndex]?.data.subSections[0]
                ?.textExplanationDetails[0]
            }
          </MagneticInstrumentImageOneDetail>
          <MagneticInstrumentDCBHWrapper>
            <MagneticInstumentDCBHExplanationWrapper>
              <MagneticInstrumentDCBHTitle>
                {
                  data.products[pageIndex]?.data.subSections[0]
                    ?.textExplanationTitle[0]
                }
              </MagneticInstrumentDCBHTitle>
              <MagneticInstrumentDetails>
                {
                  data.products[pageIndex]?.data.subSections[0]
                    ?.textExplanationDetails[1]
                }
              </MagneticInstrumentDetails>
              <MagneticInstrumentDetails>
                {
                  data.products[pageIndex]?.data.subSections[0]
                    ?.textExplanationDetails[2]
                }
              </MagneticInstrumentDetails>
            </MagneticInstumentDCBHExplanationWrapper>
            <MagneticInstrumentDCBHImageWrapper
              url={
                data.products[pageIndex]?.data.subSections[0]
                  ?.subImagesAndTexts[0].image
              }
            ></MagneticInstrumentDCBHImageWrapper>
          </MagneticInstrumentDCBHWrapper>
          <MagneticInstrumentACMagneticWrapper>
            <MagneticInstrumentACMagneticExplanationWrapper>
              <MagneticInstrumentACMagneticTitle>
                {
                  data.products[pageIndex]?.data.subSections[0]
                    ?.textExplanationTitle[1]
                }
              </MagneticInstrumentACMagneticTitle>
              <MagneticInstrumentACMagneticDetails>
                {
                  data.products[pageIndex]?.data.subSections[0]
                    ?.textExplanationDetails[3]
                }
              </MagneticInstrumentACMagneticDetails>
              <MagneticInstrumentACMagneticDetails>
                {
                  data.products[pageIndex]?.data.subSections[0]
                    ?.textExplanationDetails[4]
                }
              </MagneticInstrumentACMagneticDetails>
              <MagneticInstrumentACMagneticDetails>
                {
                  data.products[pageIndex]?.data.subSections[0]
                    ?.textExplanationDetails[5]
                }
              </MagneticInstrumentACMagneticDetails>
            </MagneticInstrumentACMagneticExplanationWrapper>
            <MagneticInstrumentACMagneticImageWrapper
              url={
                data.products[pageIndex]?.data.subSections[0]
                  ?.subImagesAndTexts[1].image
              }
            />
          </MagneticInstrumentACMagneticWrapper>
        </>
      )}
    </div>
  )
}

export default ProductUI

import { useRouter } from 'next/dist/client/router'
import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
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
  MagneticInstrumentDetails,
  MagneticInstrumentImageOneDetail,
  MagneticInstrumentImageOneWrapper,
  MagneticInstumentDCBHExplanationWrapper,
  SpecificationButton,
  SpecificationButtonWrapperHref,
} from './Product.styles'

const MagneticInstrumentsPage = () => {
  const { language } = useContext(GlobalContext)
  const data = require(`../../../pages/api/${language}.json`)
  const router = useRouter()
  const pageIndex = Number(router.query.item)

  return (
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
        <MagneticInstrumentDCBHImageButtonWrapper>
          <MagneticInstrumentDCBHImageWrapper
            url={
              data.products[pageIndex]?.data.subSections[0]
                ?.subImagesAndTexts[0].image
            }
          ></MagneticInstrumentDCBHImageWrapper>
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
        <ACMagneticButtonImageWrapper>
          <MagneticInstrumentACMagneticImageWrapper
            url={
              data.products[pageIndex]?.data.subSections[0]
                ?.subImagesAndTexts[1].image
            }
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
  )
}

export default MagneticInstrumentsPage

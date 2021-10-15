import { useRouter } from 'next/dist/client/router'
import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import {
  MagneticInstrumentACMagneticDetails,
  MagneticInstrumentACMagneticExplanationWrapper,
  MagneticInstrumentACMagneticImageWrapper,
  MagneticInstrumentACMagneticTitle,
  MagneticInstrumentACMagneticWrapper,
  MagneticInstrumentDCBHImageWrapper,
  MagneticInstrumentDCBHTitle,
  MagneticInstrumentDCBHWrapper,
  MagneticInstrumentDetails,
  MagneticInstrumentImageOneDetail,
  MagneticInstrumentImageOneWrapper,
  MagneticInstumentDCBHExplanationWrapper,
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
        <MagneticInstrumentDCBHImageWrapper
          url={
            data.products[pageIndex]?.data.subSections[0]?.subImagesAndTexts[0]
              .image
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
            data.products[pageIndex]?.data.subSections[0]?.subImagesAndTexts[1]
              .image
          }
        />
      </MagneticInstrumentACMagneticWrapper>
    </>
  )
}

export default MagneticInstrumentsPage

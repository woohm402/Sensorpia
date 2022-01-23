import { useRouter } from 'next/dist/client/router'
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
  MagneticInstumentDCBHExplanationWrapper,
  SpecificationButton,
  SpecificationButtonWrapperHref,
} from './Product.styles'
import { useLanguageContext } from '../../context/language/language'

const MagneticInstrumentsPage = () => {
  const { languageData: data } = useLanguageContext()
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
                ?.subImagesAndTexts[0]?.title
            }
          </MagneticInstrumentDCBHTitle>
          {data.products[
            pageIndex
          ]?.data.subSections[0]?.subImagesAndTexts[0].details.map(
            (detail: string, index: number) => (
              <MagneticInstrumentACMagneticDetails key={index}>
                {detail}
              </MagneticInstrumentACMagneticDetails>
            )
          )}
        </MagneticInstumentDCBHExplanationWrapper>
        <MagneticInstrumentDCBHImageButtonWrapper>
          <MagneticInstrumentDCBHImageWrapper
            url={
              data.products[pageIndex]?.data.subSections[0]
                ?.subImagesAndTexts[0].image
            }
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
          <MagneticInstrumentACMagneticTitle>
            {
              data.products[pageIndex]?.data.subSections[0]
                ?.subImagesAndTexts[1]?.title
            }
          </MagneticInstrumentACMagneticTitle>
          {data.products[
            pageIndex
          ]?.data.subSections[0]?.subImagesAndTexts[1].details.map(
            (detail: string, index: number) => (
              <MagneticInstrumentACMagneticDetails key={index}>
                {detail}
              </MagneticInstrumentACMagneticDetails>
            )
          )}
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

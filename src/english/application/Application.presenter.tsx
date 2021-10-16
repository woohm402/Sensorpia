import { DefenseWrapper } from '../main/Main.styles'
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
} from '../product/Product.styles'
import {
  ApplicationMagnetometerContentWrapper,
  ApplicationMagnetometerDetails,
  ApplicationMagnetometerImageWrapper,
  ApplicationMagnetometerTitle,
  ApplicationMagnetometerWrapper,
  DefenseExplanationDetails,
  DefenseImageRandomWrapper,
  SatelliteExplanationDetails,
  SatelliteImageWrapperOne,
} from './Application.styles'

interface IProps {
  finalRandomImage: any
  pageIndex: any
  data: any
}
const ApplicationUI = ({ finalRandomImage, pageIndex, data }: IProps) => {
  return (
    <>
      {pageIndex === 0 ? (
        <DefenseImageRandomWrapper
          finalRandomImage={finalRandomImage}
        ></DefenseImageRandomWrapper>
      ) : (
        data.applications[pageIndex]?.data.mainImage.map((data: any) => (
          <DefenseImageRandomWrapper key="" finalRandomImage={data} />
        ))
      )}
      {data.applications[pageIndex]?.data.mainTexts?.map((data: any) => (
        <DefenseExplanationDetails key="">{data}</DefenseExplanationDetails>
      ))}
      {data.applications[pageIndex]?.data.subImageAndDetails?.map(
        (data: any) => (
          <ApplicationMagnetometerWrapper key="">
            <ApplicationMagnetometerImageWrapper src={data.image} />
            <ApplicationMagnetometerContentWrapper>
              <ApplicationMagnetometerTitle>
                {data.title}
              </ApplicationMagnetometerTitle>
              {data.details.map((value: any) => (
                <ApplicationMagnetometerDetails key="">
                  {value}
                </ApplicationMagnetometerDetails>
              ))}
            </ApplicationMagnetometerContentWrapper>
          </ApplicationMagnetometerWrapper>
        )
      )}
    </>
  )
}
export default ApplicationUI

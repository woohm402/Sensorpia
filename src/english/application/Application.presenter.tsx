import { ProductDetails } from '../../layout/header/Header.styles'
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
import { ApplicationMenuItems } from './ApplicationMenuItems'

interface IProps {
  finalRandomImage: any
  item: string
  data: any
}

const ApplicationUI = ({ finalRandomImage, item, data }: IProps) => {

  if (item === ApplicationMenuItems.defense) {
    return <>
      <DefenseImageRandomWrapper
        finalRandomImage={finalRandomImage}
      />
      {data.applications.defense.map((data: any) => (
        <DefenseExplanationDetails key=''>{data}</DefenseExplanationDetails>
      ))}
    </>
  } else if (item === ApplicationMenuItems.satellite) {
    return <>
      <SatelliteImageWrapperOne
        data={data.applications.randomImages[2]}
      />
      {data.applications.satellite.map((data: any) => (
        <SatelliteExplanationDetails key=''>
          {data}
        </SatelliteExplanationDetails>
      ))}
      <ApplicationMagnetometerWrapper>
        <ApplicationMagnetometerImageWrapper
          data={data.applications.randomImages[3]}
        />
        <ApplicationMagnetometerContentWrapper>
          <ApplicationMagnetometerTitle>
            {data.applications.satelliteDetails.title}
          </ApplicationMagnetometerTitle>
          {data.applications.satelliteDetails.details.map((data: any) => (
            <ApplicationMagnetometerDetails key=''>
              {data}
            </ApplicationMagnetometerDetails>
          ))}
        </ApplicationMagnetometerContentWrapper>
      </ApplicationMagnetometerWrapper>
    </>
  } else if (item === ApplicationMenuItems.measurement) {
    return <>
      <MagneticInstrumentImageOneWrapper data={data.products.images[11]} />
      <MagneticInstrumentImageOneDetail>
        {data.applications.measurement.detailsFixed}
      </MagneticInstrumentImageOneDetail>
      <MagneticInstrumentDCBHWrapper>
        <MagneticInstumentDCBHExplanationWrapper>
          <MagneticInstrumentDCBHTitle>
            {data.products.magneticInstruments.Titles[0]}
          </MagneticInstrumentDCBHTitle>
          <MagneticInstrumentDetails>
            {data.products.magneticInstruments.Details[1]}
          </MagneticInstrumentDetails>
          <MagneticInstrumentDetails>
            {data.products.magneticInstruments.Details[2]}
          </MagneticInstrumentDetails>
        </MagneticInstumentDCBHExplanationWrapper>
        <MagneticInstrumentDCBHImageWrapper
          data={data.products.images[12]}
        />
      </MagneticInstrumentDCBHWrapper>
      <MagneticInstrumentACMagneticWrapper>
        <MagneticInstrumentACMagneticExplanationWrapper>
          <MagneticInstrumentACMagneticTitle>
            {data.products.magneticInstruments.Titles[1]}
          </MagneticInstrumentACMagneticTitle>
          <MagneticInstrumentACMagneticDetails>
            {data.products.magneticInstruments.Details[3]}
          </MagneticInstrumentACMagneticDetails>
          <MagneticInstrumentACMagneticDetails>
            {data.products.magneticInstruments.Details[4]}
          </MagneticInstrumentACMagneticDetails>
          <MagneticInstrumentACMagneticDetails>
            {data.products.magneticInstruments.Details[5]}
          </MagneticInstrumentACMagneticDetails>
        </MagneticInstrumentACMagneticExplanationWrapper>
        <MagneticInstrumentACMagneticImageWrapper
          data={data.products.images[13]}
        />
      </MagneticInstrumentACMagneticWrapper>
    </>
  }

  return (
    <>
      {/* TODO: 404 */}
    </>
  )
}
export default ApplicationUI

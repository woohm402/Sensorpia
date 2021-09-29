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
  MagneticTorquerContentWrapper,
  MagneticTorquerDetails,
  MagneticTorquerExplanationWrapper,
  MagneticTorquerSatelliteButton,
  MagneticTorquerSatelliteImageWrapper,
  MagneticTorquerSatelliteNoName,
  MagneticTorquerTitle,
  NormalImageWrapper,
  NormalImageWrapperTwo,
  NormalImageWrapperTwoText,
  SatelliteContentWrapper,
  SatelliteExplanationDetail,
  SatelliteExplanationTitle,
  SatelliteExplanationWrapper,
  SatelliteImageMSFifteen,
  SatelliteImageMSFifteenText,
  SatelliteImageMSTwentyTwo,
  SatelliteImageMSTwentyTwoText,
  SatelliteImageWrapper,
  SatelliteImageWrapperTwo,
  ThreeAxisDefenseButton,
  ThreeAxisNormalButton,
  ThreeAxisSatelliteButton,
  MagneticInstumentDCBHExplanationWrapper,
  MagneticInstrumentDCBHImageWrapper,
  MagneticInstrumentACMagneticWrapper,
  MagneticInstrumentACMagneticExplanationWrapper,
  MagneticInstrumentACMagneticTitle,
  MagneticInstrumentACMagneticDetails,
  MagneticInstrumentACMagneticImageWrapper,
  DefenseImageMSTwentySevenText,
  DefenseImageMSThirteenText,
  DefenseImageMSSevenText,
} from './Product.styles'

const ProductUI = () => {
  const { menu, setMenu, language } = useContext(GlobalContext)
  const [productDetailMenu, setProductDetailMenu] = useState('')
  const data = require(`../../../pages/api/${language}.json`)
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/products') {
      if (menu === '' || menu === '3-axis Flux-gate magnetometer') {
        setMenu('3-axis Flux-gate magnetometer')
        setProductDetailMenu(data.products.threeAxis[0])
      } else if (menu === 'Magnetic torquer') {
        setProductDetailMenu(data.products.magneticTorquer[0])
      } else if (
        menu !== '3-axis Flux-gate magnetometer' &&
        menu !== 'Magnetic torquer' &&
        menu !== 'Magnetic Instrument'
      ) {
        setMenu('3-axis Flux-gate magnetometer')
        setProductDetailMenu(data.products.threeAxis[0])
      }
    }
  }, [
    router.pathname,
    setMenu,
    data.products.threeAxis,
    menu,
    data.products.magneticTorquer,
  ])
  const onClickProductDetails = (event: any) => {
    setProductDetailMenu(event.target.id)
  }
  return (
    <div style={{ height: '200vh', position: 'relative' }}>
      {menu === '3-axis Flux-gate magnetometer' && (
        <>
          <ThreeAxisNormalButton
            id={data.products.threeAxis[0]}
            //@ts-ignore
            color={productDetailMenu === data.products.threeAxis[0]}
            onClick={onClickProductDetails}
          >
            {data.products.threeAxis[0]}
          </ThreeAxisNormalButton>
          <ThreeAxisSatelliteButton
            id={data.products.threeAxis[1]}
            //@ts-ignore
            color={productDetailMenu === data.products.threeAxis[1]}
            onClick={onClickProductDetails}
          >
            {data.products.threeAxis[1]}
          </ThreeAxisSatelliteButton>
          <ThreeAxisDefenseButton
            id={data.products.threeAxis[2]}
            //@ts-ignore
            color={productDetailMenu === data.products.threeAxis[2]}
            onClick={onClickProductDetails}
          >
            {data.products.threeAxis[2]}
          </ThreeAxisDefenseButton>
          {productDetailMenu === data.products.threeAxis[0] && (
            <>
              <NormalImageWrapper />
              <ContentWrapper>
                <ExplanationWrapper>
                  <ExplanationTitle>
                    {data.products.threeAxisDetails.Normal.Title}
                  </ExplanationTitle>
                  <ExplanationDetail>
                    {data.products.threeAxisDetails.Normal.Details}
                  </ExplanationDetail>
                </ExplanationWrapper>
                <NormalImageWrapperTwo>
                  <NormalImageWrapperTwoText>MS-17</NormalImageWrapperTwoText>
                </NormalImageWrapperTwo>
              </ContentWrapper>
            </>
          )}
          {productDetailMenu === data.products.threeAxis[1] && (
            <>
              <SatelliteImageWrapper />
              <SatelliteContentWrapper>
                <SatelliteExplanationWrapper>
                  <SatelliteExplanationTitle>
                    {data.products.threeAxisDetails.Satellite.Title}
                  </SatelliteExplanationTitle>
                  {data.products.threeAxisDetails.Satellite.Details.map(
                    (data: any) => (
                      <SatelliteExplanationDetail key="">
                        {data}
                      </SatelliteExplanationDetail>
                    )
                  )}
                </SatelliteExplanationWrapper>
                <SatelliteImageWrapperTwo>
                  <SatelliteImageMSFifteen>
                    <SatelliteImageMSFifteenText>
                      MS-15
                    </SatelliteImageMSFifteenText>
                  </SatelliteImageMSFifteen>
                  <SatelliteImageMSTwentyTwo>
                    <SatelliteImageMSTwentyTwoText>
                      MS-22
                    </SatelliteImageMSTwentyTwoText>
                  </SatelliteImageMSTwentyTwo>
                </SatelliteImageWrapperTwo>
              </SatelliteContentWrapper>
            </>
          )}
          {productDetailMenu === data.products.threeAxis[2] && (
            <>
              <DefenseImageWrapper />
              <DefenseContentWrapper>
                <DefenseExplanationWrapper>
                  <DefenseExplanationTitle>
                    {data.products.threeAxisDetails.Defense.Title}
                  </DefenseExplanationTitle>
                  {data.products.threeAxisDetails.Defense.Details.map(
                    (data: any) => (
                      <DefenseExplanationDetail key="">
                        {data}
                      </DefenseExplanationDetail>
                    )
                  )}
                </DefenseExplanationWrapper>
                <DefenseImageWrapperTwo>
                  <DefenseImageMSTwentySeven>
                    <DefenseImageMSTwentySevenText>
                      {
                        data.products.threeAxisDetails.Defense.ImageTexts
                          .TwentySeven
                      }
                    </DefenseImageMSTwentySevenText>
                  </DefenseImageMSTwentySeven>
                  <DefenseImageMSThirteen>
                    <DefenseImageMSThirteenText>
                      {
                        data.products.threeAxisDetails.Defense.ImageTexts
                          .Thirteen
                      }
                    </DefenseImageMSThirteenText>
                  </DefenseImageMSThirteen>
                  <DefenseImageMSSeven>
                    <DefenseImageMSSevenText>
                      {data.products.threeAxisDetails.Defense.ImageTexts.Seven}
                    </DefenseImageMSSevenText>
                  </DefenseImageMSSeven>
                </DefenseImageWrapperTwo>
              </DefenseContentWrapper>
            </>
          )}
        </>
      )}
      {menu === 'Magnetic torquer' && (
        <>
          <MagneticTorquerSatelliteButton
            onClick={onClickProductDetails}
            //@ts-ignore
            color={productDetailMenu === data.products.magneticTorquer[0]}
          >
            {data.products.magneticTorquer[0]}
          </MagneticTorquerSatelliteButton>
          <MagneticTorquerSatelliteImageWrapper />
          <MagneticTorquerContentWrapper>
            <MagneticTorquerExplanationWrapper>
              <MagneticTorquerTitle>
                {data.products.magneticTorquerDetails.Satellite.Title}
              </MagneticTorquerTitle>
              {data.products.magneticTorquerDetails.Satellite.Details.map(
                (data: any) => (
                  <MagneticTorquerDetails key="">{data}</MagneticTorquerDetails>
                )
              )}
            </MagneticTorquerExplanationWrapper>
            <MagneticTorquerSatelliteNoName></MagneticTorquerSatelliteNoName>
          </MagneticTorquerContentWrapper>
        </>
      )}
      {menu === 'Magnetic Instrument' && (
        <>
          <MagneticInstrumentImageOneWrapper />
          <MagneticInstrumentImageOneDetail>
            {data.products.magneticInstruments.Details[0]}
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
            <MagneticInstrumentDCBHImageWrapper></MagneticInstrumentDCBHImageWrapper>
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
            <MagneticInstrumentACMagneticImageWrapper />
          </MagneticInstrumentACMagneticWrapper>
        </>
      )}
    </div>
  )
}

export default ProductUI

import styled from '@emotion/styled'
interface IProps {
  color?: any
}
export const ThreeAxisNormalButton = styled.button`
  width: 279px;
  height: 53px;
  background: ${(props: IProps) => (props.color ? '#f4f7ff' : '#f9f9f9')};
  border: 2px solid #9c9d9e;
  box-sizing: border-box;
  border-radius: 30px;
  margin-top: 60px;
  margin-left: 149px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: ${(props: IProps) => (props.color ? '#0070c0' : '#9c9d9e')};
  cursor: pointer;
`
export const ThreeAxisSatelliteButton = styled.button`
  width: 279px;
  height: 53px;
  background: ${(props: IProps) => (props.color ? '#f4f7ff' : '#f9f9f9')};
  border: 2px solid #9c9d9e;
  box-sizing: border-box;
  border-radius: 30px;
  margin-left: 74px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: ${(props: IProps) => (props.color ? '#0070c0' : '#9c9d9e')};
`

export const ThreeAxisDefenseButton = styled.button`
  width: 279px;
  height: 53px;
  background: ${(props: IProps) => (props.color ? '#f4f7ff' : '#f9f9f9')};
  border: 2px solid #9c9d9e;
  box-sizing: border-box;
  border-radius: 30px;
  margin-left: 74px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: ${(props: IProps) => (props.color ? '#0070c0' : '#9c9d9e')};
`
export const NormalImageWrapper = styled.div`
  width: 984px;
  height: 518px;
  margin-left: 150px;
  margin-top: 60px;
  top: 273px;
  background: url('./NormalImage.svg');
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const ExplanationWrapper = styled.div`
  margin-top: 50px;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  max-width: 454px;
`
export const NormalImageWrapperTwo = styled.div`
  width: 427px;
  height: 337px;
  margin-top: 55px;
  margin-left: 103px;
  background: url('./NormalImage2MS-17.svg');
  position: relative;
`
export const NormalImageWrapperTwoText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #262626;
  top: 260px;
  left: 334px;
`
export const ExplanationTitle = styled.div`
  max-width: 142px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #262626;
`
export const ExplanationDetail = styled.li`
  margin-top: 15px;
  max-width: 454px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  text-align: justify;
  color: #636363;
`
export const SatelliteImageWrapper = styled.div`
  width: 984px;
  height: 518px;
  background: url('./SatelliteImage.svg');
  margin-top: 50px;
  margin-left: 150px;
`

export const SatelliteContentWrapper = styled.div`
  margin-top: 50px;
  margin-left: 150px;
  display: flex;
  flex-direction: row;
`
export const SatelliteExplanationWrapper = styled.div`
  max-width: 436px;
  display: flex;
  flex-direction: column;
`
export const SatelliteExplanationTitle = styled.div`
  max-width: 142px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #262626;
`
export const SatelliteExplanationDetail = styled.li`
  margin-top: 15px;
  max-width: 436px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  text-align: justify;
  color: #636363;
`
export const SatelliteImageWrapperTwo = styled.div`
  margin-left: 121px;
  display: flex;
  flex-direction: column;
`

export const SatelliteImageMSFifteen = styled.div`
  width: 427px;
  height: 270px;
  background: url('./SatelliteImageTwoMS-15.svg');
  position: relative;
`
export const SatelliteImageMSFifteenText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #262626;
  top: 222px;
  left: 334px;
  position: absolute;
`

export const SatelliteImageMSTwentyTwo = styled.div`
  margin-top: 113px;
  width: 427px;
  height: 270px;
  background: url('./SatelliteImageTwoMS-22.svg');
  position: relative;
`
export const SatelliteImageMSTwentyTwoText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #262626;
  top: 222px;
  left: 334px;
  position: absolute;
`
export const DefenseImageWrapper = styled.div`
  margin-top: 50px;
  margin-left: 150px;
  width: 984px;
  height: 518px;
  background: url('./DefenseImage.svg');
`
export const DefenseContentWrapper = styled.div`
  margin-top: 50px;
  margin-left: 150px;
  display: flex;
  flex-direction: row;
`
export const DefenseExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const DefenseExplanationTitle = styled.div`
  max-width: 142px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  line-height: 36px;
  color: #262626;
  margin-bottom: 15px;
`
export const DefenseExplanationDetail = styled.li`
  max-width: 389px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  text-align: justify;
  color: #636363;
`
export const DefenseImageWrapperTwo = styled.div`
  margin-left: 196px;
  display: flex;
  flex-direction: column;
`
export const DefenseImageMSTwentySeven = styled.div`
  width: 399px;
  height: 280px;
  background: url('./DefenseImageMS-27.svg');
`
export const DefenseImageMSThirteen = styled.div`
  margin-top: 113px;
  width: 399px;
  height: 280px;
  background: url('./DefenseImageMS-13.svg');
`
export const DefenseImageMSSeven = styled.div`
  margin-top: 113px;
  width: 399px;
  height: 280px;
  background: url('./DefenseImageMS-07.svg');
`
export const MagneticTorquerSatelliteButton = styled.button`
  width: 279px;
  height: 53px;
  background: ${(props: IProps) => (props.color ? '#f4f7ff' : '#f9f9f9')};
  border: 2px solid #9c9d9e;
  box-sizing: border-box;
  border-radius: 30px;
  margin-top: 60px;
  margin-left: 149px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: ${(props: IProps) => (props.color ? '#0070c0' : '#9c9d9e')};
  cursor: pointer;
`
export const MagneticTorquerSatelliteImageWrapper = styled.div`
  margin-left: 150px;
  margin-top: 50px;
  width: 984px;
  height: 518px;
  background: url('./MagneticTorquerSatellite.svg');
`
export const MagneticTorquerContentWrapper = styled.div`
  margin-left: 150px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
`
export const MagneticTorquerExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const MagneticTorquerTitle = styled.div`
  margin-bottom: 15px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #262626;
`
export const MagneticTorquerDetails = styled.li`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  text-align: justify;
  color: #636363;
  max-width: 422px;
`
export const MagneticTorquerSatelliteNoName = styled.div`
  width: 376px;
  height: 322px;
  margin-left: 186px;
  background: url('./MagneticTorquerSatelliteImageTwoNoName.svg');
`
export const MagneticInstrumentImageOneWrapper = styled.div`
  width: 984px;
  height: 518px;
  margin-top: 163px;
  margin-left: 150px;
  background: url('./MagneticInstrumentsOne.svg');
`
export const MagneticInstrumentImageOneDetail = styled.li`
  margin-top: 50px;
  margin-left: 150px;
  max-width: 984px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  text-align: justify;
  color: #636363;
`
export const MagneticInstrumentDCBHWrapper = styled.div`
  margin-top: 35px;
  margin-left: 150px;
  display: flex;
  align-items: center;
`
export const MagneticInstumentDCBHExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const MagneticInstrumentDCBHTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #262626;
  margin-bottom: 15px;
`
export const MagneticInstrumentDetails = styled.li`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  text-align: justify;
  color: #636363;
  max-width: 411px;
`
export const MagneticInstrumentDCBHImageWrapper = styled.div`
  margin-left: 119px;
  width: 454px;
  height: 301px;
  background: url('./MagneticInstrumentsTwo.svg');
`

export const MagneticInstrumentACMagneticWrapper = styled.div`
  display: flex;
  margin-top: 138px;
  margin-left: 149px;
  align-items: center;
`
export const MagneticInstrumentACMagneticExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const MagneticInstrumentACMagneticTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #262626;
  margin-bottom: 15px;
`
export const MagneticInstrumentACMagneticDetails = styled.li`
  max-width: 411px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  text-align: justify;
  color: #636363;
`
export const MagneticInstrumentACMagneticImageWrapper = styled.div`
  margin-left: 49px;
  width: 525px;
  height: 263px;
  background: url('./ACMagneticImageOne.svg');
`

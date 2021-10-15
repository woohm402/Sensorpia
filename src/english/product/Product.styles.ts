import styled from '@emotion/styled'
interface IProps {
  color?: any
}
interface IPropsTwo {
  url: any
}

export const ThreeAxisButtons = styled.button`
  width: 200px;
  height: 30px;
  background: ${(props: IProps) => (props.color ? '#f4f7ff' : '#f9f9f9')};
  border: 1px solid #9c9d9e;
  box-sizing: border-box;
  border-radius: 30px;
  margin-top: 35px;
  margin-right: 51px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: ${(props: IProps) => (props.color ? '#0070c0' : '#9c9d9e')};
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  width: 702px;
  height: 369px;
  margin-top: 35px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`

export const ExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 370px;
`
export const SubImageOuterWrappers = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubImageWrappers = styled.div`
  width: 268px;
  height: 190px;
  margin-left: 64px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
  position: relative;
  margin-bottom: 60px;
  background-repeat: no-repeat;
`
export const NormalImageWrapperTwoText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
  top: 183px;
  left: 218px;
`
export const ExplanationTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
  margin-bottom: 20px;
`
export const ExplanationDetail = styled.li`
  width: 370px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
`
export const SatelliteImageWrapper = styled.div`
  width: 702px;
  height: 370px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
  margin-top: 35px;
  margin-left: 70px;
`

export const SatelliteContentWrapper = styled.div`
  margin-top: 29px;
  margin-left: 70px;
  display: flex;
  flex-direction: row;
`
export const SatelliteExplanationWrapper = styled.div`
  max-width: 338px;
  display: flex;
  flex-direction: column;
`
export const SatelliteExplanationTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
`
export const SatelliteExplanationDetail = styled.li`
  margin-top: 15px;
  width: 338px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
`
export const SatelliteImageWrapperTwo = styled.div`
  margin-left: 96px;
  display: flex;
  flex-direction: column;
`

export const SatelliteImageMSFifteen = styled.div`
  width: 268px;
  height: 212px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
  position: relative;
`
export const SatelliteImageMSFifteenText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
  top: 183px;
  left: 218px;
  position: absolute;
`

export const SatelliteImageMSTwentyTwo = styled.div`
  margin-top: 60px;
  width: 268px;
  height: 170px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
  position: relative;
`
export const SatelliteImageMSTwentyTwoText = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
  top: 141px;
  left: 218px;
  position: absolute;
`
export const DefenseImageWrapper = styled.div`
  margin-top: 35px;
  margin-left: 70px;
  width: 702px;
  height: 370px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
`
export const DefenseContentWrapper = styled.div`
  margin-top: 29px;
  margin-left: 70px;
  display: flex;
  flex-direction: row;
`
export const DefenseExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const DefenseExplanationTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
  margin-bottom: 15px;
`
export const DefenseExplanationDetail = styled.li`
  width: 376px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
`
export const DefenseImageWrapperTwo = styled.div`
  margin-left: 58px;
  display: flex;
  flex-direction: column;
`
export const DefenseImageMSTwentySeven = styled.div`
  position: relative;
  width: 268px;
  height: 212px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
`
export const DefenseImageMSTwentySevenText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
  top: 183px;
  left: 218px;
`

export const DefenseImageMSThirteen = styled.div`
  position: relative;
  margin-top: 60px;
  width: 268px;
  height: 185px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
`
export const DefenseImageMSThirteenText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
  top: 156px;
  left: 218px;
`
export const DefenseImageMSSeven = styled.div`
  position: relative;
  margin-top: 60px;
  width: 268px;
  height: 177px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
`
export const DefenseImageMSSevenText = styled.span`
  position: absolute;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
  top: 148px;
  left: 218px;
`
export const MagneticTorquerSatelliteButton = styled.button`
  width: 200px;
  height: 30px;
  background: ${(props: IProps) => (props.color ? '#f4f7ff' : '#f9f9f9')};
  border: 1px solid #9c9d9e;
  box-sizing: border-box;
  border-radius: 30px;
  margin-top: 35px;
  margin-left: 70px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: ${(props: IProps) => (props.color ? '#0070c0' : '#9c9d9e')};
  cursor: pointer;
`
export const MagneticTorquerSatelliteImageWrapper = styled.div`
  margin-left: 70px;
  margin-top: 35px;
  width: 702px;
  height: 370px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
`
export const MagneticTorquerContentWrapper = styled.div`
  margin-left: 70px;
  margin-top: 29px;
  display: flex;
  flex-direction: row;
`
export const MagneticTorquerExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const MagneticTorquerTitle = styled.div`
  margin-bottom: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
`
export const MagneticTorquerDetails = styled.li`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
  width: 370px;
  margin-bottom: 10px;
`
export const MagneticTorquerSatelliteNoName = styled.div`
  width: 268px;
  height: 212px;
  margin-left: 64px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
`
export const MagneticInstrumentImageOneWrapper = styled.div`
  width: 702px;
  height: 370px;
  margin-top: 35px;
  margin-left: 70px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
`
export const MagneticInstrumentImageOneDetail = styled.li`
  margin-top: 30px;
  margin-left: 70px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
`
export const MagneticInstrumentDCBHWrapper = styled.div`
  margin-top: 27px;
  margin-left: 70px;
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
  font-size: 15px;
  line-height: 22px;
  color: #262626;
  margin-bottom: 15px;
`
export const MagneticInstrumentDetails = styled.li`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
  width: 237px;
`
export const MagneticInstrumentDCBHImageWrapper = styled.div`
  margin-left: 181px;
  width: 284px;
  height: 188px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
`

export const MagneticInstrumentACMagneticWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  margin-left: 70px;
  align-items: center;
`
export const MagneticInstrumentACMagneticExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const MagneticInstrumentACMagneticTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
  margin-bottom: 20px;
`
export const MagneticInstrumentACMagneticDetails = styled.li`
  width: 236px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
`
export const MagneticInstrumentACMagneticImageWrapper = styled.div`
  margin-left: 143px;
  width: 323px;
  height: 162px;
  ${({ url }: IPropsTwo) => `background:url(${url})`};
`

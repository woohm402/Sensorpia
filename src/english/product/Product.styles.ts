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
export const SubImageOuterWrappers = styled.div``
export const SubImageMidWrappers = styled.div`
  position: relative;
  padding-left: 64px;
`

export const SubImageWrappers = styled.img`
  width: 268px;
  object-fit: cover;
`

export const SubImageTexts = styled.div`
  top: 89%;
  left: 82%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  position: absolute;
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
export const SpecificationButton = styled.button`
  width: 152px;
  height: 30px;
  background: #f4f7ff;
  border: 1px solid #0070c0;
  box-sizing: border-box;
  border-radius: 30px;
  color: #0070c0;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 64px;
`
export const SubImageMidTwoWrappers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SpecificationButtonWrapperHref = styled.a``

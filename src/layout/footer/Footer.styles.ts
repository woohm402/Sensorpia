import styled from '@emotion/styled'

interface IProps {
  data?: any
  selected?: boolean
}

export const FooterBigWrapper = styled.div`
  min-width: 100vw;
  margin-left: auto;
  margin-right: auto;
  background: #b9b9ba;
  height: 109px;
  position: ${(props: IProps) => (props.selected ? 'relative' : 'static')};
  left: ${(props: IProps) => (props.selected ? '0' : null)};
  bottom: ${(props: IProps) => (props.selected ? '0' : null)};
`

export const FooterWrapper = styled.div`
  width: 1100px;
  position: relative;
  margin: 0 auto;
`
export const FooterLogoWrapper = styled.img`
  position: absolute;
  width: 137px;
  height: 26px;
  top: 41px;
  left: 70px;
`
export const FooterAddressDetailWrapper = styled.div`
  position: absolute;
  top: 28px;
  left: 228px;
  max-width: 802px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  color: #262626;
`
export const FooterOthersOne = styled.div`
  position: absolute;
  top: 65px;
  left: 227px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  color: #0070c0;
`
export const FooterDivider = styled.div`
  width: 0px;
  height: 9.17px;
  position: absolute;
  top: 69.01px;
  left: 278.07px;
  border: 1px solid #0070c0;
`
export const FooterOtherTwo = styled.div`
  position: absolute;
  top: 65px;
  left: 288.18px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  color: #0070c0;
`

import styled from '@emotion/styled'

interface IProps {
  color?: any
}

export const SideBarWrapper = styled.div`
  max-width: 636px;
  width: 100%;
  height: 220vh;
  background: #f9f9f9;
  z-index: 0;
`
export const SideBarTitleWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 44px;
  color: #262626;
  padding-top: 60px;
  margin-left: 150px;
`
export const SideBarMenusWrapper = styled.div`
  margin-top: 60px;
  margin-left: 150px;
`

export const SideBarMenusInnerWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: ${(props: IProps) => (props.color ? '#0070c0' : '#9c9d9e')};
  cursor: pointer;
`

export const SideBarMenusLineDivider = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  width: 382px;
  height: 0px;
  border: 1px solid #c9c9c9;
`

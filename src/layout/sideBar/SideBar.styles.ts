import styled from '@emotion/styled'

interface IProps {
  color?: any
}
interface IPropsTwo {
  menu?: any
}
interface IPropsThree {
  data: any
}
export const SideBarWrapper = styled.div`
  min-width: 258px;
  height: ${(props: IPropsTwo) =>
    props.menu === 'Sensorpia intro.& our customers' ||
    props.menu === 'Vision & History' ||
    props.menu === '회사소개 & 주요 고객사' ||
    props.menu === '비전 & 회사 이력'
      ? '165vh'
      : '120vh'};
  background: #f9f9f9;
  z-index: 0;
  position: static;
`
export const ScrollArrowImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  top: 1367px;
  left: 70px;
  ${(props: IPropsThree) => `background:url(${props.data})`};
  position: absolute;
  cursor: pointer;
`

export const SideBarTitleWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
  padding-top: 36px;
  margin-left: 70px;
`
export const SideBarMenusWrapper = styled.div`
  margin-top: 40px;
  margin-left: 70px;
  margin-right: 33px;
  width: 143px;
`

export const SideBarMenusInnerWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: ${(props: IProps) => (props.color ? '#0070c0' : '#9c9d9e')};
  cursor: pointer;
`

export const SideBarMenusLineDivider = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 155px;
  height: 0px;
  border: 1px solid #c9c9c9;
`

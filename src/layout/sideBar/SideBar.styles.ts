import { ContentTooltip } from './../../common/ContentTooltip/ContentTooltip';
import styled from '@emotion/styled';

interface IProps {
  $color?: any;
}
interface IPropsThree {
  data: any;
}
export const SideBarWrapper = styled.div`
  min-width: 258px;
  min-height: calc(100vh - 196px);
  background: #f9f9f9;
  z-index: 0;
  position: relative;
`;
export const ScrollArrowImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  top: 95%;
  left: 70px;
  ${(props: IPropsThree) => `background:url(${props.data})`};
  position: absolute;
  cursor: pointer;
`;

export const SideBarTitleWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
  padding-top: 36px;
  margin-left: 70px;
`;
export const SideBarMenusWrapper = styled.div`
  margin-top: 40px;
  margin-left: 70px;
  margin-right: 33px;
  width: 143px;
`;

export const SideBarMenusInnerWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: ${(props: IProps) => (props.$color ? '#0070c0' : '#9c9d9e')};
  cursor: pointer;
  position: relative;

  & > button {
    display: block;
    position: absolute;
    width: 40px;
    right: -36px;
  }
`;

export const SideBarMenusLineDivider = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 155px;
  height: 0;
  border: 1px solid #c9c9c9;
`;

export const SideBarProductsSubMenusWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SideBarProductsIndividualWrapper = styled.div`
  margin-top: 15px;
  margin-left: 11px;
  display: flex;
  cursor: pointer;
  position: relative;

  & > button {
    display: block;
    position: absolute;
    width: 40px;
    right: -36px;
  }
`;

export const SideBarProductsIndividualIcon = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
`;
export const SideBarProductsIndividualText = styled.div`
  margin-left: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  color: ${(props: IProps) => (props.$color ? '#0070c0' : '#9c9d9e')};
`;

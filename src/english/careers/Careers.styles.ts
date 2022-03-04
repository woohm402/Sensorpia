import styled from '@emotion/styled';
import TextBox from '../../common/TextBox/TextBox';

interface IProps {
  data: any;
}

export const TalentsWrapper = styled.div`
  max-width: 701px;
  margin-top: 35px;
  margin-left: 70px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #0070c0;
`;
export const TalentTitle = styled(TextBox)``;

export const TalentLineDivider = styled.div`
  width: 701px;
  height: 0;
  border: 1px solid #c9c9c9;
  margin-top: 10px;
`;
export const BigCircleWrapper = styled.div`
  margin-top: 29px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Circle = styled.div`
  width: 151px;
  height: 151px;
  border-radius: 50%;
  border: 2px solid #0070c0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const CircleText = styled(TextBox)`
  font-size: 18px;
  line-height: 27px;
  text-align: center;
`;
export const CircleDetailText = styled(TextBox)`
  margin-left: 50px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
`;
export const HrTitle = styled(TextBox)``;

export const HrLineDivider = styled.div`
  width: 701px;
  height: 0;
  border: 1px solid #c9c9c9;
  margin-top: 11px;
`;

export const SubTitleWrapper = styled(TextBox)`
  margin: 60px auto 0 auto;
  border: 2px solid #0070c0;
  box-sizing: border-box;
  border-radius: 47px;
  width: 286px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  line-height: 22px;
`;
export const HrCirclesWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
`;

export const HrCircle = styled(TextBox)`
  width: 166px;
  height: 166px;
  border-radius: 50%;
  background: rgba(0, 112, 192, 0.1);
  font-size: 18px;
  line-height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:first-of-type) {
    margin-left: 22px;
  }
`;
export const CareersArrow = styled.div`
  margin-left: 30px;
  width: 60px;
  height: 12px;
  ${(props: IProps) => `background:url(${props.data})`}
`;
export const HrPrincipleTitle = styled(TextBox)`
  margin-top: 102px;
`;
export const HrPrincipleDetailsBigWrapper = styled.div`
  margin-top: 30px;
`;

export const HrPrincipleDetailsWrapper = styled(TextBox)`
  max-width: 247px;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
`;

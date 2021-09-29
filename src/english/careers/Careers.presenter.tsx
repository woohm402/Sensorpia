import { CircleWrapper } from '../aboutus/AboutUs.styles'
import {
  BigCircleWrapper,
  CareersArrow,
  Circle,
  CircleDetailText,
  CircleText,
  HrCircleFirst,
  HrCircleSecond,
  HrCirclesWrapper,
  HrCircleThird,
  HrLineDivider,
  HrPrincipleDetailsBigWrapper,
  HrPrincipleDetailsWrapper,
  HrPrincipleTitle,
  HrTitle,
  SubTitleWrapper,
  TalentLineDivider,
  TalentsWrapper,
  TalentTitle,
} from './Careers.styles'

interface IProps {
  data: any
  menu: any
  language: any
}

const CareersUI = ({ data, menu, language }: IProps) => {
  return (
    <>
      {menu === '인재상' && language === 'kor' && (
        <TalentsWrapper>
          <TalentTitle>{data.careers.first.title}</TalentTitle>
          <TalentLineDivider />
          {data.careers.first.circles.map((data: any) => (
            <BigCircleWrapper key="">
              <Circle>
                <CircleText>{data.title}</CircleText>
              </Circle>
              <CircleDetailText>{data.content}</CircleDetailText>
            </BigCircleWrapper>
          ))}
        </TalentsWrapper>
      )}
      {menu === '인사 제도' && language === 'kor' && (
        <TalentsWrapper>
          <HrTitle>{data.careers.second.title}</HrTitle>
          <HrLineDivider />
          <SubTitleWrapper>{data.careers.second.subTitle}</SubTitleWrapper>
          <HrCirclesWrapper>
            <HrCircleFirst>{data.careers.second.circles[0]}</HrCircleFirst>
            <CareersArrow />
            <HrCircleSecond>{data.careers.second.circles[1]}</HrCircleSecond>
            <CareersArrow />
            <HrCircleThird>{data.careers.second.circles[2]}</HrCircleThird>
          </HrCirclesWrapper>
          <HrPrincipleTitle>{data.careers.second.secondTitle}</HrPrincipleTitle>
          <HrLineDivider />
          <HrPrincipleDetailsBigWrapper>
            {data.careers.second.principle.map((data: any) => (
              <HrPrincipleDetailsWrapper key="">
                {data}
              </HrPrincipleDetailsWrapper>
            ))}
          </HrPrincipleDetailsBigWrapper>
        </TalentsWrapper>
      )}
    </>
  )
}

export default CareersUI

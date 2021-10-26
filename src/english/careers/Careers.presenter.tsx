import { useRouter } from 'next/dist/client/router'
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
  language: any
}

const CareersUI = ({ data, language }: IProps) => {
  const router = useRouter()
  const pageIndex = Number(router.query.item)
  return (
    <>
      {language === 'kor' &&
        data.careers[pageIndex]?.layout === '인재상페이지' && (
          <TalentsWrapper>
            <TalentTitle>{data.careers[pageIndex]?.name}</TalentTitle>
            <TalentLineDivider />
            {data.careers[pageIndex]?.circles.map((data: any) => (
              <BigCircleWrapper key="">
                <Circle>
                  <CircleText>{data.title}</CircleText>
                </Circle>
                <CircleDetailText>{data.content}</CircleDetailText>
              </BigCircleWrapper>
            ))}
          </TalentsWrapper>
        )}
      {language === 'kor' &&
        data.careers[pageIndex]?.layout === '인사제도페이지' && (
          <TalentsWrapper>
            <HrTitle>{data.careers[pageIndex].name}</HrTitle>
            <HrLineDivider />
            <SubTitleWrapper>
              {data.careers[pageIndex].subTitle}
            </SubTitleWrapper>
            <HrCirclesWrapper>
              <HrCircleFirst>
                {data.careers[pageIndex].circles[0]}
              </HrCircleFirst>
              <CareersArrow data={data.careers[pageIndex].images[0]} />
              <HrCircleSecond>
                {data.careers[pageIndex].circles[1]}
              </HrCircleSecond>
              <CareersArrow data={data.careers[pageIndex].images[0]} />
              <HrCircleThird>
                {data.careers[pageIndex].circles[2]}
              </HrCircleThird>
            </HrCirclesWrapper>
            <HrPrincipleTitle>
              {data.careers[pageIndex].secondTitle}
            </HrPrincipleTitle>
            <HrLineDivider />
            <HrPrincipleDetailsBigWrapper>
              {data.careers[pageIndex].principle.map((data: any) => (
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

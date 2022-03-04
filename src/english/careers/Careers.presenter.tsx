import { useRouter } from 'next/dist/client/router';
import {
  BigCircleWrapper,
  CareersArrow,
  Circle,
  CircleDetailText,
  CircleText,
  HrCircle,
  HrCirclesWrapper,
  HrLineDivider,
  HrPrincipleDetailsBigWrapper,
  HrPrincipleDetailsWrapper,
  HrPrincipleTitle,
  HrTitle,
  SubTitleWrapper,
  TalentLineDivider,
  TalentsWrapper,
  TalentTitle,
} from './Careers.styles';

interface IProps {
  data: any;
  language: any;
}

const CareersUI = ({ data, language }: IProps) => {
  const router = useRouter();
  const pageIndex = Number(router.query.item);
  return (
    <>
      {language === 'kor' &&
        data.careers[pageIndex]?.layout === '인재상페이지' && (
          <TalentsWrapper>
            <TalentTitle
              as={'span'}
              value={data.careers[pageIndex]?.name}
              name={`careers.${pageIndex}.name`}
            />
            <TalentLineDivider />
            {data.careers[pageIndex]?.circles.map((data: any, i: number) => (
              <BigCircleWrapper key={i}>
                <Circle>
                  <CircleText
                    value={data.title}
                    name={`careers.${pageIndex}.circles.${i}.title`}
                  />
                </Circle>
                <CircleDetailText
                  value={data.content}
                  name={`careers.${pageIndex}.circles.${i}.content`}
                />
              </BigCircleWrapper>
            ))}
          </TalentsWrapper>
        )}
      {language === 'kor' &&
        data.careers[pageIndex]?.layout === '인사제도페이지' && (
          <TalentsWrapper>
            <HrTitle
              as={'span'}
              value={data.careers[pageIndex].name}
              name={`careers.${pageIndex}.name`}
            />
            <HrLineDivider />
            <SubTitleWrapper
              value={data.careers[pageIndex].subTitle}
              name={`careers.${pageIndex}.subTitle`}
            />
            <HrCirclesWrapper>
              {[0, null, 1, null, 2].map((i, index) =>
                typeof i === 'number' ? (
                  <HrCircle
                    key={index}
                    value={data.careers[pageIndex].circles[i]}
                    name={`data.careers.${pageIndex}.circles.${i}`}
                  />
                ) : (
                  <CareersArrow
                    key={index}
                    data={data.careers[pageIndex].images[0]}
                  />
                )
              )}
            </HrCirclesWrapper>
            <HrPrincipleTitle
              value={data.careers[pageIndex].secondTitle}
              name={`data.careers.${pageIndex}.secondTitle`}
            />
            <HrLineDivider />
            <HrPrincipleDetailsBigWrapper>
              {data.careers[pageIndex].principle.map((v: any, i: number) => (
                <HrPrincipleDetailsWrapper
                  as={'li'}
                  key={i}
                  value={v}
                  name={`data.careers.${pageIndex}.principle.${i}`}
                />
              ))}
            </HrPrincipleDetailsBigWrapper>
          </TalentsWrapper>
        )}
    </>
  );
};

export default CareersUI;

import {
  ApplicationMagnetometerContentWrapper,
  ApplicationMagnetometerDetails,
  ApplicationMagnetometerImageWrapper,
  ApplicationMagnetometerTitle,
  ApplicationMagnetometerWrapper,
  DefenseExplanationDetails,
  DefenseImageRandomWrapper,
} from './Application.styles'

interface IProps {
  pageIndex: any
  data: any
}
const ApplicationUI = ({ pageIndex, data }: IProps) => {
  return (
    <>
      {pageIndex === 0 ? (
        <DefenseImageRandomWrapper
          finalRandomImage={data.applications[pageIndex]?.data.mainImage[0]}
        />
      ) : (
        data.applications[pageIndex]?.data.mainImage.map(
          (data: any, i: number) => (
            <DefenseImageRandomWrapper key={i} finalRandomImage={data} />
          )
        )
      )}
      {data.applications[pageIndex]?.data.mainTexts && (
        <ul style={{ margin: '0 0 50px 70px', padding: '0 0 0 20px' }}>
          {data.applications[pageIndex]?.data.mainTexts.map(
            (data: any, i: number) => (
              <DefenseExplanationDetails key={i}>
                {data}
              </DefenseExplanationDetails>
            )
          )}
        </ul>
      )}
      {data.applications[pageIndex]?.data.subImageAndDetails?.map(
        (data: any, i: number) => (
          <ApplicationMagnetometerWrapper key={i}>
            <ApplicationMagnetometerImageWrapper src={data.image} />
            <ApplicationMagnetometerContentWrapper>
              <ApplicationMagnetometerTitle>
                {data.title}
              </ApplicationMagnetometerTitle>
              {data.details.map((value: any, i: number) => (
                <ApplicationMagnetometerDetails key={i}>
                  {value}
                </ApplicationMagnetometerDetails>
              ))}
            </ApplicationMagnetometerContentWrapper>
          </ApplicationMagnetometerWrapper>
        )
      )}
    </>
  )
}
export default ApplicationUI

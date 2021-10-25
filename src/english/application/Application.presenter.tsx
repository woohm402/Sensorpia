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
        data.applications[pageIndex]?.data.mainImage.map((data: any) => (
          <DefenseImageRandomWrapper key="" finalRandomImage={data} />
        ))
      )}
      {data.applications[pageIndex]?.data.mainTexts?.map((data: any) => (
        <DefenseExplanationDetails key="">{data}</DefenseExplanationDetails>
      ))}
      {data.applications[pageIndex]?.data.subImageAndDetails?.map(
        (data: any) => (
          <ApplicationMagnetometerWrapper key="">
            <ApplicationMagnetometerImageWrapper src={data.image} />
            <ApplicationMagnetometerContentWrapper>
              <ApplicationMagnetometerTitle>
                {data.title}
              </ApplicationMagnetometerTitle>
              {data.details.map((value: any) => (
                <ApplicationMagnetometerDetails key="">
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

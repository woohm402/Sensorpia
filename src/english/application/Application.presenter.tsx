import {
  ApplicationMagnetometerContentWrapper,
  ApplicationMagnetometerDetails,
  ApplicationMagnetometerImageWrapper,
  ApplicationMagnetometerTitle,
  ApplicationMagnetometerWrapper,
  DefenseExplanationDetails,
  DefenseImageRandomWrapper,
} from './Application.styles';

interface IProps {
  pageIndex: any;
  data: any;
}
const ApplicationUI = ({ pageIndex, data }: IProps) => {
  return (
    <>
      {pageIndex === 0 ? (
        <DefenseImageRandomWrapper
          src={data.applications[pageIndex]?.data.mainImage[0]}
          name={`applications.${pageIndex}.data.mainImage.0`}
        />
      ) : (
        data.applications[pageIndex]?.data.mainImage.map(
          (data: any, i: number) => (
            <DefenseImageRandomWrapper
              key={i}
              src={data}
              name={`applications.${pageIndex}.data.mainImage.${i}`}
            />
          )
        )
      )}
      {data.applications[pageIndex]?.data.mainTexts && (
        <ul style={{ margin: '0 0 50px 70px', padding: '0 0 0 20px' }}>
          {data.applications[pageIndex]?.data.mainTexts.map(
            (data: any, i: number) => (
              <DefenseExplanationDetails
                as={'li'}
                key={i}
                value={data}
                name={`applications.${pageIndex}.data.mainTexts.${i}`}
              />
            )
          )}
        </ul>
      )}
      {data.applications[pageIndex]?.data.subImageAndDetails?.map(
        (data: any, index: number) => (
          <ApplicationMagnetometerWrapper key={index}>
            <ApplicationMagnetometerImageWrapper
              src={data.image as string}
              as={'img'}
              alt={''}
              name={`applications.${pageIndex}.data.subImageAndDetails.${index}.image`}
            />
            <ApplicationMagnetometerContentWrapper>
              <ApplicationMagnetometerTitle
                value={data.title}
                name={`applications.${pageIndex}.data.subImageAndDetails.${index}.title`}
              />
              {data.details.map((value: any, i: number) => (
                <ApplicationMagnetometerDetails
                  as={'li'}
                  key={i}
                  value={value}
                  name={`applications.${pageIndex}.data.subImageAndDetails.${index}.details.${i}`}
                />
              ))}
            </ApplicationMagnetometerContentWrapper>
          </ApplicationMagnetometerWrapper>
        )
      )}
    </>
  );
};
export default ApplicationUI;

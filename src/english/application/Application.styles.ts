import styled from '@emotion/styled'

interface IProps {
  finalRandomImage: any
}

export const DefenseImageRandomWrapper = styled.div`
  margin-top: 60px;
  margin-left: 150px;
  width: 984px;
  height: 621px;
  background: ${(props: IProps) => `url(${props.finalRandomImage})`};
`
export const DefenseExplanationDetails = styled.li`
  margin-left: 150px;
  margin-top: 50px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
  color: #262626;
`

export const SatelliteImageWrapperOne = styled.div`
  margin-top: 60px;
  margin-left: 150px;
  width: 984px;
  height: 621px;
  background: url('./ApplicationSatelliteImageOne.svg');
`
export const SatelliteExplanationDetails = styled.li`
  margin-left: 150px;
  margin-top: 50px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
  color: #262626;
`
export const ApplicationMagnetometerWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  margin-left: 150px;
`
export const ApplicationMagnetometerImageWrapper = styled.div`
  width: 455px;
  height: 312px;
  background: url('./ApplicationSatelliteImageTwo.svg');
`
export const ApplicationMagnetometerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 49px;
`
export const ApplicationMagnetometerTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #262626;
`
export const ApplicationMagnetometerDetails = styled.li`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  text-align: justify;
  color: #636363;
`

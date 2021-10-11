import styled from '@emotion/styled'

interface IProps {
  finalRandomImage?: any
  data?: any
}

export const DefenseImageRandomWrapper = styled.div`
  margin-top: 35px;
  margin-left: 70px;
  width: 702px;
  height: 434px;
  background: ${(props: IProps) => `url(${props.finalRandomImage})`};
`
export const DefenseExplanationDetails = styled.li`
  margin-left: 70px;
  margin-top: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
`

export const SatelliteImageWrapperOne = styled.div`
  margin-top: 35px;
  margin-left: 70px;
  width: 700px;
  height: 434px;
  background: ${(props: IProps) => `url(${props.data})`};
`
export const SatelliteExplanationDetails = styled.li`
  margin-left: 70px;
  margin-top: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
`
export const ApplicationMagnetometerWrapper = styled.div`
  display: flex;
  margin-top: 45px;
  margin-left: 70px;
  align-items: center;
`
export const ApplicationMagnetometerImageWrapper = styled.div`
  width: 269px;
  height: 184.46px;
  background: ${(props: IProps) => `url(${props.data})`};
`
export const ApplicationMagnetometerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`
export const ApplicationMagnetometerTitle = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
`
export const ApplicationMagnetometerDetails = styled.li`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
  margin-bottom: 10px;
`

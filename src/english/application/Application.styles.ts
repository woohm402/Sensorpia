import styled from '@emotion/styled';
import TextBox from '../../common/TextBox/TextBox';
import ImageBox from '../../common/ImageBox/ImageBox';

export const DefenseImageRandomWrapper = styled(ImageBox)`
  margin-top: 35px;
  margin-left: 70px;
  width: 702px;
  height: 434px;
  background: ${({ src }: { src: string }) => `url(${src})`};
` as typeof ImageBox;
export const DefenseExplanationDetails = styled(TextBox)`
  margin-top: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #262626;
`;
export const ApplicationMagnetometerWrapper = styled.div`
  display: flex;
  margin-top: 45px;
  margin-left: 70px;
  margin-bottom: 50px;
  align-items: center;
`;

export const ApplicationMagnetometerImageWrapper = styled(ImageBox)`
  width: 269px;
  object-fit: cover;
`;

export const ApplicationMagnetometerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
export const ApplicationMagnetometerTitle = styled(TextBox)`
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
`;
export const ApplicationMagnetometerDetails = styled(TextBox)`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: justify;
  color: #636363;
  margin-bottom: 10px;
`;

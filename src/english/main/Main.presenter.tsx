import PdfBox from '../../common/PdfBox.tsx/PdfBox';
import { LanguageData } from '../../context/language/language.model';
import {
  AboutUsDetails,
  AboutUsDetailsWrapper,
  ApplicationsDetails,
  ApplicationsDetailsWrapper,
  CareersDetails,
  CareersDetailsWrapper,
  MainFirstLineDivider,
  MainImagesWrapper,
  MainLineWrapper,
  MainOuterImagesWrapper,
  MainOuterWrapper,
  MainProductsNameWrapper,
  MainProductsOuterWrapper,
  MainProductText,
  MainSecondLineDivider,
  MainThirdLineDivider,
  MainThirdProductImageWrapper,
  MagneticTorquerProductWrapper,
  MainTitle,
  MainTitleWrapper,
  NavBarDetailsRepeatWrapper,
  NavBarMainMenu,
  NavBarMainMenuDetailWrapper,
  NavBarMainMenusWrapper,
  NavBarOuterWrapper,
  ProductDetails,
  ProductDetailsWrapper,
  ProductImage,
  ProductImageText,
  ProductImageWrapper,
  ProductSubWrapper,
  ProductWrapper,
  SliderDraggableWrapper,
  SliderImage,
  SliderInnerImageWrapper,
  SliderMainWrapper,
  SliderMidWrapper,
  SliderNextButton,
  SliderPreviousButton,
  SliderSubDraggableWrapper,
  SliderSubTextWrapper,
  SliderTextWrapper,
  MagneticTorquerSubProductWrapper,
} from './Main.styles';

interface Props {
  data: LanguageData;
  onClickSliderNext: any;
  translate: any;
  onClickSliderPrevious: any;
  language: any;
  onClickProductDetails: any;
  onClickApplicationDetails: any;
  onClickAboutUsDetails: any;
  onClickCareersDetails: any;
}

const MainUI = ({
  data,
  onClickSliderNext,
  translate,
  onClickSliderPrevious,
  language,
  onClickProductDetails,
  onClickApplicationDetails,
  onClickAboutUsDetails,
  onClickCareersDetails,
}: Props) => {
  return (
    <>
      <SliderMainWrapper>
        <SliderTextWrapper
          value={data.SliderText.SliderMainText}
          name={'SliderText.SliderMainText'}
        />
        <SliderSubTextWrapper
          value={data.SliderText.SliderSubText}
          name={'SliderText.SliderSubText'}
        />
        <SliderSubDraggableWrapper>
          <SliderDraggableWrapper>
            <SliderMidWrapper>
              <SliderInnerImageWrapper translate={translate}>
                {data.main.slider.images.map(
                  (imageUrl: string, index: number) => (
                    <SliderImage
                      as={'div'}
                      name={`main.slider.images.${index}`}
                      src={imageUrl}
                      key={imageUrl}
                    />
                  )
                )}
              </SliderInnerImageWrapper>
            </SliderMidWrapper>
            <SliderPreviousButton onClick={onClickSliderPrevious} />
            <SliderNextButton onClick={onClickSliderNext} />
          </SliderDraggableWrapper>
        </SliderSubDraggableWrapper>
      </SliderMainWrapper>
      <MainTitleWrapper>
        <MainTitle value={data.main.title} name={'main.title'} as={'span'} />
      </MainTitleWrapper>
      <MainOuterWrapper>
        <MainLineWrapper>
          <MainFirstLineDivider />
          <MainSecondLineDivider />
        </MainLineWrapper>
      </MainOuterWrapper>
      <MainProductsOuterWrapper>
        <MainProductsNameWrapper>
          <MainProductText
            value={data.main.mainProductOneName}
            name={'main.mainProductOneName'}
          />
          <MainProductText
            value={data.main.mainProductTwoName}
            name={'main.mainProductTwoName'}
          />
        </MainProductsNameWrapper>
      </MainProductsOuterWrapper>
      <MainOuterImagesWrapper>
        <MainImagesWrapper>
          <ProductWrapper>
            {data.main.satellite.map((value, index) => (
              <ProductSubWrapper key={index}>
                <ProductImageWrapper>
                  <ProductImage
                    name={`main.satellite.${index}.image`}
                    src={value.image}
                  />
                  <ProductImageText
                    as={'span'}
                    name={`main.satellite.${index}.name`}
                    value={value.name}
                  />
                </ProductImageWrapper>
                <PdfBox
                  name={`main.satellite.${index}.download`}
                  href={value.download}
                />
              </ProductSubWrapper>
            ))}
          </ProductWrapper>
          <ProductWrapper>
            {data.main.defense.map((value, index) => (
              <ProductSubWrapper key={index}>
                <ProductImageWrapper>
                  <ProductImage
                    src={value.image}
                    name={`main.defense.${index}.image`}
                  />
                  <ProductImageText
                    as={'span'}
                    name={`main.defense.${index}.name`}
                    value={value.name}
                  />
                </ProductImageWrapper>
                <PdfBox
                  name={`main.defense.${index}.download`}
                  href={value.download}
                />
              </ProductSubWrapper>
            ))}
          </ProductWrapper>
        </MainImagesWrapper>
      </MainOuterImagesWrapper>
      <MainThirdLineDivider />
      <MagneticTorquerProductWrapper
        value={data.main.mainProductThreeName}
        name={'main.mainProductThreeName'}
      />
      {data.main.magneticTorquer.map((value, index) => (
        <MagneticTorquerSubProductWrapper key={index}>
          <MainThirdProductImageWrapper
            src={value.image}
            name={`main.magneticTorquer.${index}.image`}
          />
          <PdfBox
            name={`main.magneticTorquer.${index}.download`}
            href={value.download}
          />
        </MagneticTorquerSubProductWrapper>
      ))}

      <NavBarOuterWrapper>
        <NavBarDetailsRepeatWrapper>
          <NavBarMainMenusWrapper>
            {data.navBar.list.map((menu: string, index: number) => (
              <NavBarMainMenu key={index}>{menu}</NavBarMainMenu>
            ))}
          </NavBarMainMenusWrapper>
          <NavBarMainMenuDetailWrapper>
            <ProductDetailsWrapper>
              {data.products.map((data, index) => (
                <ProductDetails
                  key={index}
                  id={index + ''}
                  onClick={onClickProductDetails}
                >
                  {data.name}
                </ProductDetails>
              ))}
            </ProductDetailsWrapper>
            <ApplicationsDetailsWrapper language={language}>
              {data.navBar.applications.map((data: any, i: number) => (
                <ApplicationsDetails
                  key={i}
                  id={i + ''}
                  onClick={onClickApplicationDetails}
                >
                  {data}
                </ApplicationsDetails>
              ))}
            </ApplicationsDetailsWrapper>
            <AboutUsDetailsWrapper language={language}>
              {data.navBar.aboutUs.map((data: any, i: number) => (
                <AboutUsDetails
                  key={i}
                  id={i + ''}
                  onClick={onClickAboutUsDetails}
                >
                  {data}
                </AboutUsDetails>
              ))}
            </AboutUsDetailsWrapper>
            {language === 'kor' && (
              <CareersDetailsWrapper>
                {data.navBar.careers?.map((data: any, i: number) => (
                  <CareersDetails
                    key={i}
                    id={i + ''}
                    onClick={onClickCareersDetails}
                  >
                    {data}
                  </CareersDetails>
                ))}
              </CareersDetailsWrapper>
            )}
          </NavBarMainMenuDetailWrapper>
        </NavBarDetailsRepeatWrapper>
      </NavBarOuterWrapper>
    </>
  );
};

export default MainUI;

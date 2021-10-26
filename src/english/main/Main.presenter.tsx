import Link from 'next/link'
import {
  SliderDraggableWrapper,
  SliderImage,
  SliderImageFour,
  SliderImageThree,
  SliderImageTwo,
  SliderInnerImageWrapper,
  SliderMainWrapper,
  SliderTextWrapper,
  SliderNextButton,
  SliderPreviousButton,
  SliderMidWrapper,
  SliderSubTextWrapper,
  MainTitleWrapper,
  MainLineWrapper,
  MainFirstLineDivider,
  MainSecondLineDivider,
  MainProductsNameWrapper,
  MainProductOneWrapper,
  MainProductTwoWrapper,
  MainImagesWrapper,
  SatelliteWrapper,
  SatelliteImageOne,
  SatelliteImageTwo,
  DefenseWrapper,
  DefenseImageOne,
  DefenseImageTwo,
  SpecificationButton,
  SpecificationButtonsWrapper,
  SpecificationSatelliteButtonsWrapper,
  SpecificationDefenseButtonsWrapper,
  SatelliteImageOneText,
  SatelliteImageTwoText,
  DefenseImageOneText,
  DefenseImageTwoText,
  MainThirdLineDivider,
  MainThirdProductWrapper,
  MainThirdProductImageWrapper,
  TorquerButtonWrapper,
  NavBarDetailsRepeatWrapper,
  NavBarMainMenusWrapper,
  NavBarMainMenu,
  NavBarMainMenuDetailWrapper,
  ProductDetailsWrapper,
  ProductDetails,
  ApplicationsDetailsWrapper,
  ApplicationsDetails,
  AboutUsDetailsWrapper,
  AboutUsDetails,
  CareersDetailsWrapper,
  CareersDetails,
  MainTitle,
  MainOuterWrapper,
  MainProductsOuterWrapper,
  MainOuterImagesWrapper,
  NavBarOuterWrapper,
  SpecificationButtonHref,
  SatelliteSubWrapper,
  SatelliteImageWrapper,
  DefenseSubWrapper,
  DefenseImageWrapper,
} from './Main.styles'
interface IProps {
  data: any
  onClickSliderNext: any
  translate: any
  onClickSliderPrevious: any
  language: any
  onClickProductDetails: any
  onClickApplicationDetails: any
  onClickAboutUsDetails: any
  onClickCareersDetails: any
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
}: IProps) => {
  return (
    <>
      <SliderMainWrapper>
        <SliderTextWrapper>{data.SliderText.SliderMainText}</SliderTextWrapper>
        <SliderSubTextWrapper>
          {data.SliderText.SliderSubText}
        </SliderSubTextWrapper>
        <SliderDraggableWrapper>
          <SliderMidWrapper>
            <SliderInnerImageWrapper translate={translate}>
              <SliderImageTwo
                //@ts-ignore
                data={data.main.Slider.Image2}
              />
              <SliderImageThree
                //@ts-ignore
                data={data.main.Slider.Image3}
              />
              <SliderImageFour
                //@ts-ignore
                data={data.main.Slider.Image4}
              />
            </SliderInnerImageWrapper>
          </SliderMidWrapper>
          <SliderPreviousButton
            onClick={onClickSliderPrevious}
            //@ts-ignore
            data={data.main.Slider.Previous}
          />
          <SliderNextButton
            onClick={onClickSliderNext}
            //@ts-ignore
            data={data.main.Slider.Previous}
          />
        </SliderDraggableWrapper>
      </SliderMainWrapper>
      <MainTitleWrapper>
        <MainTitle>{data.main.title}</MainTitle>
      </MainTitleWrapper>
      <MainOuterWrapper>
        <MainLineWrapper>
          <MainFirstLineDivider />
          <MainSecondLineDivider />
        </MainLineWrapper>
      </MainOuterWrapper>
      <MainProductsOuterWrapper>
        <MainProductsNameWrapper>
          <MainProductOneWrapper>
            {data.main.mainProductOneName}
          </MainProductOneWrapper>
          <MainProductTwoWrapper>
            {data.main.mainProductTwoName}
          </MainProductTwoWrapper>
        </MainProductsNameWrapper>
      </MainProductsOuterWrapper>
      <MainOuterImagesWrapper>
        <MainImagesWrapper>
          <SatelliteWrapper>
            {data.main.satellite.map((value: any) => (
              <SatelliteSubWrapper key="">
                <SatelliteImageWrapper>
                  <SatelliteImageOne
                    //@ts-ignore
                    data={value.image}
                  />
                  <SatelliteImageOneText>{value.name}</SatelliteImageOneText>
                </SatelliteImageWrapper>
                <SpecificationButtonHref
                  href={value.download}
                  download={value.download}
                  key=""
                >
                  <SpecificationButton
                  //@ts-ignore
                  >
                    {data.main.specificationButton}
                  </SpecificationButton>
                </SpecificationButtonHref>
              </SatelliteSubWrapper>
            ))}
          </SatelliteWrapper>
          <DefenseWrapper>
            {data.main.defense.map((value: any) => (
              <DefenseSubWrapper key="">
                <DefenseImageWrapper>
                  <DefenseImageOne
                    //@ts-ignore
                    data={value.image}
                  />
                  <DefenseImageOneText>{value.name}</DefenseImageOneText>
                </DefenseImageWrapper>
                <SpecificationButtonHref
                  href={value.download}
                  download={value.download}
                  key=""
                >
                  <SpecificationButton
                  //@ts-ignore
                  >
                    {data.main.specificationButton}
                  </SpecificationButton>
                </SpecificationButtonHref>
              </DefenseSubWrapper>
            ))}
          </DefenseWrapper>
        </MainImagesWrapper>
      </MainOuterImagesWrapper>
      <MainThirdLineDivider />
      <MainThirdProductWrapper>
        {data.main.mainProductThreeName}
      </MainThirdProductWrapper>
      <MainThirdProductImageWrapper
        //@ts-expect-error
        data={data.main.magneticTorquer}
      />
      <NavBarOuterWrapper>
        <NavBarDetailsRepeatWrapper>
          <NavBarMainMenusWrapper>
            {data.navBar?.list.map((data: any) => (
              <NavBarMainMenu key="">{data}</NavBarMainMenu>
            ))}
          </NavBarMainMenusWrapper>
          <NavBarMainMenuDetailWrapper>
            <ProductDetailsWrapper>
              {data.navBar?.products.map((data: any, index: any) => (
                <ProductDetails
                  key=""
                  id={index}
                  onClick={onClickProductDetails}
                >
                  {data}
                </ProductDetails>
              ))}
            </ProductDetailsWrapper>
            <ApplicationsDetailsWrapper language={language}>
              {data.navBar?.applications.map((data: any, index: any) => (
                <ApplicationsDetails
                  key=""
                  id={index}
                  onClick={onClickApplicationDetails}
                >
                  {data}
                </ApplicationsDetails>
              ))}
            </ApplicationsDetailsWrapper>
            <AboutUsDetailsWrapper language={language}>
              {data.navBar?.aboutUs.map((data: any, index: any) => (
                <AboutUsDetails
                  key=""
                  id={index}
                  onClick={onClickAboutUsDetails}
                >
                  {data}
                </AboutUsDetails>
              ))}
            </AboutUsDetailsWrapper>
            {language === 'kor' && (
              <CareersDetailsWrapper>
                {data.navBar?.careers.map((data: any, index: any) => (
                  <CareersDetails
                    key=""
                    id={index}
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
  )
}

export default MainUI

import {
  AboutUsDetails,
  AboutUsDetailsWrapper,
  ApplicationsDetails,
  ApplicationsDetailsWrapper,
  CareersDetails,
  CareersDetailsWrapper,
  DefenseImageOne,
  DefenseImageOneText,
  DefenseImageWrapper,
  DefenseSubWrapper,
  DefenseWrapper,
  MainFirstLineDivider,
  MainImagesWrapper,
  MainLineWrapper,
  MainOuterImagesWrapper,
  MainOuterWrapper,
  MainProductOneWrapper,
  MainProductsNameWrapper,
  MainProductsOuterWrapper,
  MainProductTwoWrapper,
  MainSecondLineDivider,
  MainThirdLineDivider,
  MainThirdProductImageWrapper,
  MainThirdProductWrapper,
  MainTitle,
  MainTitleWrapper,
  NavBarDetailsRepeatWrapper,
  NavBarMainMenu,
  NavBarMainMenuDetailWrapper,
  NavBarMainMenusWrapper,
  NavBarOuterWrapper,
  ProductDetails,
  ProductDetailsWrapper,
  SatelliteImageOne,
  SatelliteImageOneText,
  SatelliteImageWrapper,
  SatelliteSubWrapper,
  SatelliteWrapper,
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
  SpecificationButton,
  SpecificationButtonHref,
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
        <SliderSubDraggableWrapper>
          <SliderDraggableWrapper>
            <SliderMidWrapper>
              <SliderInnerImageWrapper translate={translate}>
                {data.main.slider.images.map((imageUrl: string) => (
                  <SliderImage src={imageUrl} key={imageUrl} />
                ))}
              </SliderInnerImageWrapper>
            </SliderMidWrapper>
            <SliderPreviousButton onClick={onClickSliderPrevious} />
            <SliderNextButton onClick={onClickSliderNext} />
          </SliderDraggableWrapper>
        </SliderSubDraggableWrapper>
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

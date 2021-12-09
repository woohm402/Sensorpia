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
  SpecificationButton,
  SpecificationButtonHref,
  MagneticTorquerSubProductWrapper,
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
          <MainProductText>{data.main.mainProductOneName}</MainProductText>
          <MainProductText>{data.main.mainProductTwoName}</MainProductText>
        </MainProductsNameWrapper>
      </MainProductsOuterWrapper>
      <MainOuterImagesWrapper>
        <MainImagesWrapper>
          <ProductWrapper>
            {data.main.satellite.map((value: any, index: number) => (
              <ProductSubWrapper key={index}>
                <ProductImageWrapper>
                  <ProductImage src={value.image} />
                  <ProductImageText>{value.name}</ProductImageText>
                </ProductImageWrapper>
                <SpecificationButtonHref
                  href={value.download}
                >
                  <SpecificationButton>
                    {data.main.specificationButton}
                  </SpecificationButton>
                </SpecificationButtonHref>
              </ProductSubWrapper>
            ))}
          </ProductWrapper>
          <ProductWrapper>
            {data.main.defense.map((value: any, index: number) => (
              <ProductSubWrapper key={index}>
                <ProductImageWrapper>
                  <ProductImage src={value.image} />
                  <ProductImageText>{value.name}</ProductImageText>
                </ProductImageWrapper>
                <SpecificationButtonHref
                  href={value.download}
                >
                  <SpecificationButton>
                    {data.main.specificationButton}
                  </SpecificationButton>
                </SpecificationButtonHref>
              </ProductSubWrapper>
            ))}
          </ProductWrapper>
        </MainImagesWrapper>
      </MainOuterImagesWrapper>
      <MainThirdLineDivider />
      <MagneticTorquerProductWrapper>
        {data.main.mainProductThreeName}
      </MagneticTorquerProductWrapper>
      {data.main.magneticTorquer.map((value: any, index: any) => (
        <MagneticTorquerSubProductWrapper key={index}>
          <MainThirdProductImageWrapper
            //@ts-expect-error
            data={value.image}
          />
          <SpecificationButtonHref
            href={value.download}
          >
            <SpecificationButton>
              {data.main.specificationButton}
            </SpecificationButton>
          </SpecificationButtonHref>
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
              {data.navBar.products.map((data: any, index: any) => (
                <ProductDetails
                  key={index}
                  id={index}
                  onClick={onClickProductDetails}
                >
                  {data}
                </ProductDetails>
              ))}
            </ProductDetailsWrapper>
            <ApplicationsDetailsWrapper language={language}>
              {data.navBar.applications.map((data: any, index: any) => (
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
              {data.navBar.aboutUs.map((data: any, index: any) => (
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
                {data.navBar.careers.map((data: any, index: any) => (
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

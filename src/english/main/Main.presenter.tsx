import {
  SliderDraggableWrapper,
  SliderImage,
  SliderImageFour,
  SliderImageThree,
  SliderImageTwo,
  SliderInnerImageWrapper,
  SliderMainWrapper,
  SliderNextButton,
  SliderPreviousButton,
  SliderMidWrapper,
} from './Main.styles'
interface IProps {
  data: any
  onClickSliderNext: any
  translate: any
  onClickSliderPrevious: any
}
const MainUI = ({
  data,
  onClickSliderNext,
  translate,
  onClickSliderPrevious,
}: IProps) => {
  return (
    <>
      <SliderMainWrapper>
        <SliderDraggableWrapper>
          <SliderMidWrapper>
            <SliderInnerImageWrapper translate={translate}>
              <SliderImage src={data.main.Slider.Image1} />
              <SliderImageTwo src={data.main.Slider.Image2} />
              <SliderImageThree src={data.main.Slider.Image3} />
              <SliderImageFour src={data.main.Slider.Image4} />
            </SliderInnerImageWrapper>
          </SliderMidWrapper>
          <SliderPreviousButton onClick={onClickSliderPrevious} />
          <SliderNextButton onClick={onClickSliderNext} />
        </SliderDraggableWrapper>
      </SliderMainWrapper>
    </>
  )
}

export default MainUI

import styled from '@emotion/styled'
interface IProps {
  translate: any
}

export const SliderMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1920px;
  height: 770px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.4);
`
export const SliderDraggableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1920px;
  height: 770px;
  overflow: hidden;
  position: relative;
`

export const SliderImage = styled.img`
  width: 1920px;
  height: 770px;
  object-fit: cover;
  transform: (-50%, -50%);
`

export const SliderImageTwo = styled.img`
  width: 1920px;
  height: 770px;
  object-fit: cover;
  transform: (-50%, -50%);
`
export const SliderImageThree = styled.img`
  width: 1920px;
  height: 770px;
  object-fit: cover;
`
export const SliderImageFour = styled.img`
  width: 1920px;
  height: 770px;
  object-fit: cover;
`

export const SliderPreviousButton = styled.div`
  cursor: pointer;
  top: 356px;
  left: 50px;
  width: 20px;
  height: 58px;
  background: url('./SliderPrevious.svg');
  position: absolute;
`
export const SliderNextButton = styled.div`
  top: 356px;
  left: 1850px;
  cursor: pointer;
  width: 20px;
  height: 58px;
  background: url('./SliderPrevious.svg');
  position: absolute;
  transform: rotate(180deg);
`
export const SliderInnerImageWrapper = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: row;
  width: 7680px;
  height: 770px;
  overflow: hidden;
  position: relative;
  ${(props: IProps) => `transform: translateX(${props.translate}px);`};
  transition: transform 500ms ease 0s;
`
export const SliderMidWrapper = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`

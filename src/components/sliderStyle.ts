import styled from 'styled-components';

export const SliderWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: inherit;
  height: inherit;
  overflow: hidden;
`;

export const SliderControlWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
  transform: translateX(-50%) translateY(-50%);
  z-index: 100;
`;

export const SliderControlButton = styled.button`
  width: 4.2vw;
  height: 4.2vw;
  margin: 3vw;
  pointer-events: all;
  font-size: 1.5vw;
  border: 1px solid rgba(200, 215, 235, 0.7);
  border-radius: 100%;
  background-color: rgba(245, 245, 245, 0.5);
  transition: all 0.4s ease-in-out;

  &:hover {
    border: 1px solid rgba(225, 235, 255, 1);
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const SliderIndicatorWrap = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  display: flex;
  align-items: center;
  pointer-events: none;
  transform: translateX(-50%) translateY(-50%);
  z-index: 100;
`;

export const SliderIndicatorDot = styled.div<any>`
  width: 1vh;
  height: 1vh;
  margin: 0 5px;
  pointer-events: all;
  border-radius: 100%;
  background-color: ${(props: any) =>
    props.focus ? 'rgba(247, 50, 50, 0.75)' : 'rgba(89, 25, 25, 0.75)'};
`;

function calcX(prop: SliderCardType) {
  const { index, dist, distX } = prop;
  return `calc( ${50 + distX * index}% + ${(dist / 4) * index}vw)`;
}

function calcSize(prop: SliderCardType) {
  const { index, dist } = prop;
  return 60 - dist * Math.abs(index);
}

function calcOpacity(prop: SliderCardType) {
  const { index, endIndex, distAlpha } = prop;
  return Math.abs(index) === endIndex ? 0 : 1 - distAlpha * Math.abs(index);
}

function calcBlur(prop: SliderCardType) {
  return 1 * Math.abs(prop.index);
}

function calcZIndex(prop: SliderCardType) {
  return 100 - Math.abs(prop.index);
}

type SliderCardType = {
  index: number;
  endIndex: number;
  dist: number;
  distX: number;
  distAlpha: number;
};

export const SliderCard = styled.div<SliderCardType>`
  position: absolute;
  left: calc(${prop => calcX(prop)});
  top: calc(${prop => calcX(prop)});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${prop => calcSize(prop)}vw;
  height: ${prop => calcSize(prop)}vw;
  overflow: hidden;
  filter: blur(${prop => calcBlur(prop)}px);
  opacity: ${prop => calcOpacity(prop)};
  box-sizing: border-box;
  z-index: ${prop => calcZIndex(prop)};
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.4s;
  color: red;

  img {
    width: 50%;
    height: 50%;
  }
`;

export const SliderCardBlur = styled.div<{ index: number; endIndex: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  backdrop-filter: grayscale(
    ${({ index, endIndex }) => 100 * (Math.abs(index) / endIndex)}%
  );
  transition: all 0.4s;
`;

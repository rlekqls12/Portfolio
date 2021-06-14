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
  transform: translateX(-50%) translateY(-50%);
  z-index: 100;
`;

export const SliderControlButton = styled.button`
  width: 4.2vw;
  height: 4.2vw;
  margin: 3vw;
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

function calcX(prop: SliderCardType) {
  const { index, dist, distX } = prop;
  return `calc( ${50 + distX * index}% + ${(dist / 4) * index}vw)`;
}

function calcSize(prop: SliderCardType) {
  const { index, dist } = prop;
  return 40 - dist * Math.abs(index);
}

function calcOpacity(prop: SliderCardType) {
  const { index, endIndex, distAlpha } = prop;
  return Math.abs(index) === endIndex ? 0 : 1 - distAlpha * Math.abs(index);
}

function calcBlur(prop: SliderCardType) {
  return 2 * Math.abs(prop.index);
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
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${prop => calcSize(prop)}vw;
  height: ${prop => calcSize(prop)}vw;
  overflow: hidden;
  opacity: ${prop => calcOpacity(prop)};
  backdrop-filter: blur(${prop => calcBlur(prop) * 10}px);
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 100%;
  white-space: nowrap;
  font-size: 3vw;
  color: white;
  box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);
  background-color: rgb(200, 200, 200);
  z-index: ${prop => calcZIndex(prop)};
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.4s;

  img {
    width: 50%;
    height: 50%;
    filter: blur(${prop => calcBlur(prop)}px);
  }
`;

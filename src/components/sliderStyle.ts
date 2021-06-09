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

export const SliderControlWrap = styled.div``;

function calcIndex(prop: SliderCardType) {
  const { index, halfIndex, maxIndex } = prop;
  let changedIndex = index;
  if (index < -halfIndex) {
    changedIndex = index % maxIndex;
    if (changedIndex < -halfIndex) changedIndex += maxIndex;
  } else if (index > halfIndex) {
    changedIndex = index % maxIndex;
    if (changedIndex > halfIndex) changedIndex -= maxIndex;
  }
  return changedIndex;
}

function calcX(prop: SliderCardType, adder?: number) {
  let index = calcIndex(prop);
  const addIndex = adder ?? 0;
  return `calc( ${50 + 15 * (index + addIndex)}% + ${
    (prop.dist / 4) * (index + addIndex)
  }vw)`;
}

function calcSize(prop: SliderCardType, adder?: number) {
  let index = calcIndex(prop);
  return 40 - prop.dist * Math.abs(index + (adder ?? 0));
}

function calcOpacity(prop: SliderCardType) {
  const index = calcIndex(prop);
  return Math.abs(index) === prop.halfIndex
    ? 0
    : 1 - prop.distAlpha * Math.abs(index);
}

function calcBlur(prop: SliderCardType) {
  const index = calcIndex(prop);
  return 2 * Math.abs(index);
}

function calcZIndex(prop: SliderCardType) {
  const index = calcIndex(prop);
  return 100 - Math.abs(index);
}

type SliderCardType = {
  index: number;
  halfIndex: number;
  maxIndex: number;
  dist: number;
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

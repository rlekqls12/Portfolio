import styled from 'styled-components';
import BaseColor from 'src/helpers/colors';

export const FlexItemCustum = styled.div<{
  blockSize: number | string;
}>`
  width: ${({ blockSize }) => typeof blockSize === 'number' ? `${blockSize}px` : blockSize};
  height: ${({ blockSize }) => typeof blockSize === 'number' ? `${blockSize}px` : blockSize};
  background-color: ${BaseColor.tileColor};
  border: 2px solid ${BaseColor.mainColor};
  border-radius: 10%;
  box-sizing: border-box;
  transition: all 300ms;

  &:hover {
    border-radius: 0%;
    background-color: ${BaseColor.tileHoverColor};
  }
`;
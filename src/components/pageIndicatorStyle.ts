import styled from 'styled-components';
import { PageIndicatorStyle } from './pageIndicator';

function convertArrowToCSS(
  arrowText: string,
  arrow: number | string | 'center' | undefined
) {
  if (!arrow) return '';

  let value = arrow;
  if (arrow === 'center') value = '50%';
  if (typeof arrow === 'number') value = `${arrow}px`;

  return `${arrowText}: ${value};`;
}

function transform(style: PageIndicatorStyle) {
  if (style.top !== 'center' && style.left !== 'center') return '';

  let transformText = 'transform:';
  if (style.top === 'center') transformText += ' translateY(-50%)';
  if (style.left === 'center') transformText += ' translateX(-50%)';

  return `${transformText};`;
}

export const Pointer = styled.div<{
  style: React.CSSProperties;
}>``;

export const PageIndicate = styled.div<{
  style: PageIndicatorStyle;
}>`
  position: fixed;
  ${({ style }) =>
    convertArrowToCSS('top', style.top) +
    convertArrowToCSS('left', style.left) +
    convertArrowToCSS('right', style.right) +
    convertArrowToCSS('bottom', style.bottom) +
    transform(style)}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

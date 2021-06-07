import styled from 'styled-components';

export const FullPage = styled.div<{
  page: number;
  transition?: number;
}>`
  position: relative;
  top: ${({ page }) => -100 * page}vh;
  width: 100vw;
  ${({ transition }) =>
    transition ? `transition: top ${transition}ms ease;` : ''}
`;

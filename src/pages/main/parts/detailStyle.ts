import styled from 'styled-components';
// import BaseColor from 'src/helpers/colors';

export const DetailWrap = styled.div<{
  open: number | undefined;
}>`
  position: fixed;
  top: ${({ open }) => open !== undefined ? '0' : '-100%'};
  width: 100vw;
  height: 100vh;
  ${({ open }) => open !== undefined ? '' : 'transition: top 0ms 200ms;'};
`;

export const DetailBackground = styled.div<{
  open: number | undefined;
}>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${({ open }) => open !== undefined ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0)'};
  transition: background-color 200ms;
`;

export const DetailContent = styled.div<{
  open: number | undefined;
}>`
  position: fixed;
  right: 0;
  width: 70%;
  height: 100vh;
  background-color: #99ddaf;
  transform: translateX(${({ open }) => open !== undefined ? '0%' : '100%'});
  transition: transform 200ms;
`;
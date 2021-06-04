import styled from 'styled-components';

/* Wrap */
export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

/* Full Pager */
export const FullPager = styled.div<{
  page: number;
}>`
  position: relative;
  top: ${({ page }) => -100 * page}vh;
  width: 100vw;
  transition: top 400ms ease-in-out;
`;

/* Title */
export const Title = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 15vh 10vw 30vh;
  box-sizing: border-box;
  overflow: hidden;
  background-color: black;
`;

/* Title Main Text */
export const TitleMainText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  text-align: right;
  font-family: 'Recipekorea 레코체 FONT';
  font-size: calc(8vw + 8vh);
  color: white;
`;

/* Title Sub Text */
export const TitleSubText = styled.p`
  font-family: 'Recipekorea 레코체 FONT';
  font-size: calc(4vw + 4vh);
  color: white;
`;

/* Project History */
export const ProjectHistory = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
`;

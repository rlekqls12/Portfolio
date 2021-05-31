import styled from 'styled-components';

/* Wrap */
export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: white;
  background-color: black;
`;

/* Intro */
export const Intro = styled.div`
  @keyframes intro {
    0%,
    25% {
      position: fixed;
      z-index: 101;
      height: 100vh;
      color: rgba(255, 255, 255, 1);
    }
    100% {
      position: fixed;
      z-index: 101;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  animation: intro 2.5s cubic-bezier(0.4, 0, 0.16, 1.01);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 6vh;
  box-sizing: border-box;
  padding: 0 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 3vh;
  text-align: center;
  background-color: black;
`;

/* IntroHead */
export const IntroHead = styled.span`
  @keyframes intro-head {
    0%,
    25% {
      font-size: 12vh;
    }
  }

  @keyframes intro-head-description {
    0%,
    25% {
      max-height: 6vh;
      margin-bottom: 2vh;
      opacity: 1;
      content: 'Full Stack Developer';
      font-size: 5vh;
    }
    100% {
      max-height: 0px;
      opacity: 0;
      content: 'Full Stack Developer';
    }
  }

  &:before {
    animation: intro-head-description 2.5s cubic-bezier(0.4, 0, 0.16, 1.01);
    display: block;
    content: '';
    font-family: 'TmoneyRoundWindExtraBold';
  }

  &:after {
    animation: intro-head 2.5s cubic-bezier(0.4, 0, 0.16, 1.01);
    content: 'KI DABIN';
    font-family: 'Recipekorea 레코체 FONT';
  }
`;

/* Content */
export const Content = styled.div`
  @keyframes intro-margin {
    0%,
    100% {
      padding-top: 6vh;
    }
  }

  animation: intro-margin 2.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-x: auto;
`;

/* CardList */
export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

/* CardBoard */
export const CardBoard = styled.div<{
  focus: boolean;
}>`
  @keyframes focus-card {
    0% {
      position: absolute;
    }
  }

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ focus }) => (focus ? '80vw' : '250px')};
  height: ${({ focus }) => (focus ? '80vh' : '400px')};
  margin: 0 10px;
  font-size: 24px;
  border: 2px solid white;
  background-color: rgb(100, 100, 100);
  transition: all 0.4s ease;

  ${({ focus }) =>
    focus
      ? `
        animation: focus-card 2.5s;
        position: absolute;
        z-index: 11;
      `
      : `
        &:hover {
          transform: scale(1.25);
          transition: transform 0.6s ease;
          z-index: 10;
        }
      `}
`;

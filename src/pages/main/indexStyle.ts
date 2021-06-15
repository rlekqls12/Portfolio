import styled from 'styled-components';

/* Wrap */
export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

/* Project History */
export const ProjectHistory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: white;
`;

/* Proejct Card */
export const ProjectCard = styled.div<{
  cardIndex: number;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 60%;
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, 0.95);
  background-color: rgba(125, 125, 150, 0.95);

  p {
    word-wrap: break-word;
    text-align: center;
    transition: font-size 0.4s ease-in-out;

    &.main {
      margin-bottom: 3vh;
      font-size: ${({ cardIndex }) => 4 - Math.abs(cardIndex) * 0.2}vw;
    }

    &.sub {
      font-size: ${({ cardIndex }) => 1.6 - Math.abs(cardIndex) * 0.2}vw;
    }

    &.langs {
      margin-top: 6vh;
      word-wrap: break-word;
      font-size: ${({ cardIndex }) => 1.4 - Math.abs(cardIndex) * 0.2}vw;
    }
  }
`;

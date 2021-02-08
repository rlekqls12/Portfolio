import styled from 'styled-components';
import BaseColor from 'src/helpers/colors';

export const MainPageWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: '100vh';
  overflow: hidden;
  background: ${BaseColor.background};
`;

export const TimeLine = styled.div`
  width: 5px;
  height: 100vh;
  margin-left: 15vw;
  background: #33dfaf;
`;

export const TimeSpot = styled.div`
  position: relative;
  left: -15px;
  margin-top: 45px;
`;

export const TimeTitle = styled.div`
  padding: 5px 20px;
  margin-left: 30px;
  border: 1px solid black;
  border-radius: 25px;
  background: white;
`;
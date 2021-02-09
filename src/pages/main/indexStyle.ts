import styled from 'styled-components';
import BaseColor from 'src/helpers/colors';

export const MainPageWrap = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  background-color: ${BaseColor.background};
`;

export const TimeLine = styled.div`
  width: 5px;
  margin-left: 15vw;
  background-color: #33dfaf;
`;

export const TimeSpot = styled.div`
  position: relative;
  left: -12.5px;
  margin-top: 45px;
`;

export const Spot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #33dfaf;
`;

export const TimeTitle = styled.div`
  padding: 5px 20px;
  margin-left: 30px;
  border: 1px solid black;
  border-radius: 25px;
  background-color: white;
`;

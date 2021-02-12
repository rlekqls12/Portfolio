import styled from 'styled-components';
import BaseColor from 'src/helpers/colors';

export const LanguageWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguageInner = styled.div`
  display: flex;
  flex-grow: 0;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const LanguageIcon = styled.div`
  width: 42px;
  height: 42px;
  padding: 5px 5px;
  margin: 5px;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 100%;
  box-sizing: border-box;
  text-align:center;
  background-color: ${BaseColor.background};
`;

export const LanguageImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;
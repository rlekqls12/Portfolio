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
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const LanguageIcon = styled.div`
  width: 36px;
  height: 36px;
  padding: 5px 5px;
  margin: 8px;
  overflow: hidden;
  border: 1px solid ${BaseColor.languageIconBackground};
  border-radius: 100%;
  box-sizing: border-box;
  text-align:center;
  background-color: ${BaseColor.background};
`;

export const LanguageImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;
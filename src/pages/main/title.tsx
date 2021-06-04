import React from 'react';
import { Wrap, TitleMainText, TitleSubText } from './titleStyle';

function Title() {
  return (
    <Wrap>
      <TitleSubText>Full Stack</TitleSubText>
      <TitleSubText>Web Developer</TitleSubText>
      <TitleMainText>
        KI
        <br />
        DABIN
      </TitleMainText>
    </Wrap>
  );
}

export default React.memo(Title);

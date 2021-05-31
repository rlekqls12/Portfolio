import { useMemo, useState } from 'react';
import {
  Wrap,
  Intro,
  IntroHead,
  Content,
  ContentBackground,
  CardList,
  CardBoard,
  CardCover
} from './indexStyle';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman

type Card = {
  name: string;
  image: string;
  background: string;
};

const cardInfo: Card[] = [
  {
    name: 'Front-end',
    image: './images/front.png',
    background: 'rgb(254, 204, 100)'
  },
  {
    name: 'Back-end',
    image: './images/back.png',
    background: 'rgb(119, 216, 173)'
  }
];

function MainPage() {
  const [tabIdx, setTabIdx] = useState<number>(-1);

  const cardList = useMemo(
    () =>
      cardInfo.map((tab, i) => (
        <CardBoard
          key={i}
          i={i}
          focus={tabIdx}
          background={tab.background}
          onClick={() => setImmediate(() => setTabIdx(i))}
        >
          <img src={tab.image} alt={tab.name} />
          <CardCover show={i === tabIdx} />
        </CardBoard>
      )),
    [tabIdx]
  );

  return (
    <Wrap>
      <Intro>
        <div />
        <IntroHead />
        <div />
      </Intro>
      <Content>
        <ContentBackground onClick={() => setTabIdx(-1)} />
        <CardList>{cardList}</CardList>
      </Content>
    </Wrap>
  );
}

export default MainPage;

import { useCallback, useMemo, useState } from 'react';
import {
  Wrap,
  Intro,
  IntroHead,
  Content,
  CardList,
  CardBoard
} from './indexStyle';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman

type Card = {
  name: string;
};

const cardInfo: Card[] = [{ name: 'Front-end' }, { name: 'Back-end' }];

function MainPage() {
  const [tabIndex, setTabIndex] = useState<number>(-1);

  const setFocus = useCallback(i => setTabIndex(i), []);

  const cardList = useMemo(
    () =>
      cardInfo.map((tab, i) => (
        <CardBoard key={i} focus={i === tabIndex} onClick={() => setFocus(i)}>
          {tab.name}
        </CardBoard>
      )),
    [setFocus, tabIndex]
  );

  return (
    <Wrap>
      <Intro>
        <div />
        <IntroHead />
        <div />
      </Intro>
      <Content>
        <CardList>{cardList}</CardList>
      </Content>
    </Wrap>
  );
}

export default MainPage;

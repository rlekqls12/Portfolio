import { useMemo, useState } from 'react';
import { Wrap, Intro, IntroHead, Content, CardList, Card } from './indexStyle';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman

type Tab = {
  name: string;
};

const tabInfo: Tab[] = [{ name: 'Front-end' }, { name: 'Back-end' }];

function MainPage() {
  const [tabIndex, setTabIndex] = useState<number>(-1);

  const cardList = useMemo(
    () => tabInfo.map(tab => <Card>{tab.name}</Card>),
    []
  );

  return (
    <Wrap>
      <Intro>
        <div />
        <IntroHead />
        <div />
      </Intro>
      <Content>{tabIndex === -1 && <CardList>{cardList}</CardList>}</Content>
    </Wrap>
  );
}

export default MainPage;

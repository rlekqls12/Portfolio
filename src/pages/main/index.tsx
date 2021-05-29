import { useState } from 'react';
import { Wrap, Intro, IntroHead, Content } from './indexStyle';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman

type Tab = {

};

const tabInfo: Tab[] = [];

function MainPage() {
  const [tabIndex, setTabIndex] = useState<number>(-1);

  return (
    <Wrap>
      <Intro>
        <div />
        <IntroHead />
        <div />
      </Intro>
      <Content></Content>
    </Wrap>
  );
}

export default MainPage;

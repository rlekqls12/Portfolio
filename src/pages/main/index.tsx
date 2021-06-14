import React, { useState } from 'react';
import { Wrap, ProjectHistory } from './indexStyle';
import Title from './title';
import FullPager from 'src/components/fullPager';
import PageIndicator from 'src/components/pageIndicator';
import Slider from 'src/components/slider';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman

// TODO: fullPage에 Ref 연결 시켜서 PageIndicator max에 값 넘겨주기

const dummyCardInfoArray = Array.from({ length: 3 }, (_, i) => ({
  text: 'Card ' + i
}));

function MainPage() {
  const [pageNumber, setPageNumber] = useState<number>(0);

  return (
    <Wrap>
      <PageIndicator max={2} />
      <FullPager nowPage={pageNumber}>
        <Title />
        <ProjectHistory>
          <Slider cardInfoList={dummyCardInfoArray} showCardCount={5} />
        </ProjectHistory>
      </FullPager>
    </Wrap>
  );
}

export default React.memo(MainPage);

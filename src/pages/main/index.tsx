import React, { useEffect, useRef, useState } from 'react';
import { Wrap, ProjectHistory } from './indexStyle';
import Title from './title';
import FullPager from 'src/components/fullPager';
import PageIndicator from 'src/components/pageIndicator';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman

// TODO: fullPage에 Ref 연결 시켜서 PageIndicator max에 값 넘겨주기

function MainPage() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const fullPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(fullPageRef);
  }, []);

  return (
    <Wrap>
      <PageIndicator max={2} />
      <FullPager nowPage={pageNumber} ref={fullPageRef}>
        <Title />
        <ProjectHistory></ProjectHistory>
      </FullPager>
    </Wrap>
  );
}

export default React.memo(MainPage);

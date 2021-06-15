import React, { useCallback, useMemo, useState } from 'react';
import { Wrap, ProjectHistory, ProjectCard } from './indexStyle';
import Title from './title';
import FullPager from 'src/components/fullPager';
import PageIndicator from 'src/components/pageIndicator';
import Slider from 'src/components/slider';
import { historyArr } from 'src/components/developHistory';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman

function MainPage() {
  const [childCount, setChildCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const projectArr = useMemo(() => [...historyArr], []);

  const sliderRenderFunc = useCallback((value, index, cardIndex) => {
    return (
      <ProjectCard cardIndex={cardIndex}>
        <p className="main">
          {value[0]}.{value[1].toString().padStart(2, '0')}
        </p>
        <p className="sub">{value[2]}</p>
        <p className="langs">{value[3].map((v: any) => v + ' ')}</p>
      </ProjectCard>
    );
  }, []);

  const onPageIndicatorChange = useCallback((index: number) => {
    setPageNumber(index);
  }, []);

  return (
    <Wrap>
      <FullPager
        nowPage={pageNumber}
        onChange={page => setPageNumber(page)}
        onChildrenCount={count => setChildCount(count)}
      >
        <Title />
        <ProjectHistory>
          <Slider
            cardInfoList={projectArr}
            showCardCount={5}
            render={sliderRenderFunc}
          />
        </ProjectHistory>
      </FullPager>
      <PageIndicator
        focus={pageNumber}
        max={childCount}
        onFocusChnage={onPageIndicatorChange}
      />
    </Wrap>
  );
}

export default React.memo(MainPage);

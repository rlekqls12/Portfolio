import React, { useCallback, useState } from 'react';
import { Wrap, ProjectHistory } from './indexStyle';
import Title from './title';
import FullPager from 'src/components/fullPager';
import PageIndicator from 'src/components/pageIndicator';
import Slider from 'src/components/slider';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman

const imageList = [
  'android.svg',
  'aws.svg',
  'express.svg',
  'java.svg',
  'jquery.svg',
  'kotlin.svg',
  'lodash.svg',
  'mssql.svg'
];

const dummyCardInfoArray = Array.from({ length: 8 }, (_, i) => ({
  text: 'Card ' + i
}));

function MainPage() {
  const [childCount, setChildCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const sliderRenderFunc = useCallback((value, index, cardIndex) => {
    return (
      <>
        <img src={'./images/icon/' + imageList[index]} alt={'icon'} />
        <p>{value.text}</p>
      </>
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
            cardInfoList={dummyCardInfoArray}
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

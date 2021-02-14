import React, { useState } from 'react';
import FlexBox from 'src/components/Flex/FlexBox';
import FlexItem from 'src/components/Flex/FlexItem';
import {
  MainPageWrap,
  TimeLine,
  TimeSpot,
  Spot,
  TimeTitle
} from './indexStyle';
import { historyArr } from './parts/developHistory';
import Tiles from './parts/tiles';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman

function MainPage() {
  const [dateList] = useState<Array<string>>(() =>
    Object.keys(historyArr).sort().reverse()
  );

  return (
    <MainPageWrap>
      <TimeLine></TimeLine>
      <FlexBox direction={'column'}>
        {dateList.map((date, index) => (
          <FlexItem key={index}>
            <TimeSpot>
              <FlexBox
                alignItems={'center'}
                style={{
                  marginBottom: '30px'
                }}
              >
                <FlexItem>
                  <Spot />
                </FlexItem>
                <FlexItem>
                  <TimeTitle>{date}</TimeTitle>
                </FlexItem>
              </FlexBox>
              <Tiles
                data={historyArr[date]}
                blockSize={250}
                style={{
                  marginLeft: '55px',
                  marginBottom: '100px',
                  boxSizing: 'border-box'
                }}
              ></Tiles>
            </TimeSpot>
          </FlexItem>
        ))}
      </FlexBox>
    </MainPageWrap>
  );
}

export default MainPage;

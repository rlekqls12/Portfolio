import React, { useState } from 'react';
import Circle from 'src/components/Circle';
import FlexBox from 'src/components/Flex/FlexBox';
import FlexItem from 'src/components/Flex/FlexItem';
import {
  MainPageWrap,
  TimeLine,
  TimeSpot,
  Spot,
  TimeTitle
} from './indexStyle';
import Tiles from './parts/tiles';

const testArr: {
  [key in string]: Array<JSX.Element>;
} = {
  '2019. 11': [
    <div>
      <span>지역화폐 블록체인 지갑</span>
    </div>
  ],
  '2020. 01': [
    <div>
      <span>OTT Project - Kyma</span>
    </div>
  ],
  '2020. 06': [
    <div>
      <span>Web Storage Project</span>
    </div>
  ],
  '2020. 09': [
    <div>
      <span>근태관리시스템 - Jatco</span>
    </div>,
    <div>
      <span>쇼핑몰 - BHL</span>
    </div>
  ],
  '2020. 10': [
    <div>
      <span>물류관리시스템 - FBW</span>
    </div>,
    <div>
      <span>셀러지원쇼핑몰 - Sellway</span>
    </div>
  ],
  '2021. 01': [
    <div>
      <span>물류관리시스템 - FBW Remake</span>
    </div>
  ]
};

function MainPage() {
  const [dateList] = useState<Array<string>>(Object.keys(testArr).sort());
  console.log(testArr, dateList);
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
                data={testArr[date]}
                blockSize={250}
                style={{
                  marginLeft: '55px',
                  marginBottom: '100px'
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

import React, { useState } from 'react';
import FlexBox from 'src/components/Flex/FlexBox';
import FlexItem from 'src/components/Flex/FlexItem';
import {
  MainPageWrap,
  TimeLine,
  TimeSpot,
  Spot,
  TimeTitle,
  TileWrap,
  TileText
} from './indexStyle';
import Tiles from './parts/tiles';
import Language from './parts/language';
// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman
const testArr: {
  [key in string]: Array<JSX.Element>;
} = {
  '2019. 11': [
    <TileWrap>
      <TileText>지역화폐 블록체인 지갑</TileText>
      <Language list={['Servlet/Jsp', 'Android', 'Kotlin', 'MySQL']} />
    </TileWrap>
  ],
  '2020. 01': [
    <TileWrap>
      <TileText>
        OTT Project
        <br />
        Kyma
      </TileText>
      <Language list={['NodeJS', 'Express', 'MySQL', 'Android']} />
    </TileWrap>
  ],
  '2020. 06': [
    <TileWrap>
      <TileText>Web Storage Project</TileText>
      <Language
        list={['NodeJS', 'Express', 'MySQL', 'ReactJS', 'TypeScript']}
      />
    </TileWrap>
  ],
  '2020. 09': [
    <TileWrap>
      <TileText>
        근태관리시스템
        <br />
        Jatco
      </TileText>
      <Language list={['Spring', 'MsSQL', 'Window Forms']} />
    </TileWrap>,
    <TileWrap>
      <TileText>
        쇼핑몰
        <br />
        BHL
      </TileText>
      <Language list={['Spring', 'PostgreSQL']} />
    </TileWrap>
  ],
  '2020. 10': [
    <TileWrap>
      <TileText>
        물류관리시스템
        <br />
        FBW
      </TileText>
      <Language
        list={[
          'NodeJS',
          'NestJS',
          'TypeORM',
          'AWS RDS',
          'ReactJS',
          'TypeScript'
        ]}
      />
    </TileWrap>,
    <TileWrap>
      <TileText>
        셀러지원쇼핑몰
        <br />
        Sellway
      </TileText>
      <Language list={['Spring', 'Thymeleaf', 'AWS RDS']} />
    </TileWrap>
  ],
  '2021. 01': [
    <TileWrap>
      <TileText>
        물류관리시스템
        <br />
        FBW Remake
      </TileText>
      <Language list={['Spring', 'JQuery', 'AWS RDS']} />
    </TileWrap>
  ]
};

function MainPage() {
  const [dateList] = useState<Array<string>>(Object.keys(testArr).sort());

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

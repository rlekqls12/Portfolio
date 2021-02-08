import React from 'react';
import Circle from 'src/components/Circle';
import FlexBox from 'src/components/Flex/FlexBox';
import FlexItem from 'src/components/Flex/FlexItem';
import { MainPageWrap, TimeLine, TimeSpot, TimeTitle } from './indexStyle';
import Tiles from './parts/tiles';

const testArr = [
  <span>1</span>,
  <span>2</span>,
  <span>3</span>,
  <span>4</span>,
  <span>5</span>,
  <span>6</span>,
  <span>7</span>
];

function MainPage() {
  return (
    <MainPageWrap>
      <TimeLine></TimeLine>
      <TimeSpot>
        <FlexBox
          alignItems={'center'}
          style={{
            marginBottom: '30px'
          }}
        >
          <FlexItem>
            <Circle size={25} background={'#33dfaf'} />
          </FlexItem>
          <FlexItem>
            <TimeTitle>{new Date().toLocaleDateString()}</TimeTitle>
          </FlexItem>
        </FlexBox>
        <Tiles
          data={testArr}
          blockSize={250}
          style={{
            marginLeft: '55px'
          }}
        ></Tiles>
      </TimeSpot>
    </MainPageWrap>
  );
}

export default MainPage;

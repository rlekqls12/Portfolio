/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import styled from 'styled-components';
import FlexBox from 'src/components/Flex/FlexBox';
import FlexItem from 'src/components/Flex/FlexItem';
import Circle from 'src/components/Circle/';
import Block from 'src/components/Block/';

type Props = {
  datas: Array<String>;
};

// const Block1 = styled.div``;
// const Circle1 = styled.div``;
// :hover, transition, 기존 circle, block 컴포넌트 지우고 styled-components로 대체

function Navigator(props: Props) {
  return (
    <div
      style={{
        position: 'relative',
        left: '50%',
        top: '15px',
        transform: 'translateX(-50%)',
        width: '720px',
        height: '16px'
      }}
    >
      <Block
        width={'100%'}
        height={3}
        background={'#afafaf'}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      ></Block>
      <FlexBox
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-around'}
        style={{
          position: 'relative'
        }}
      >
        {props.datas.map((data, index) => {
          return (
            <FlexItem key={index}>
              <Circle
                className={'asdasdasdasd'}
                size={16}
                background={'#af5656'}
              ></Circle>
            </FlexItem>
          );
        })}
      </FlexBox>
    </div>
  );
}

Navigator.defaultProps = {};

export default Navigator;

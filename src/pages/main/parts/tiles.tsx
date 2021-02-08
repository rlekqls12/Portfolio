import React from 'react';
import FlexBox from 'src/components/Flex/FlexBox';
import FlexItem from 'src/components/Flex/FlexItem';

type Props = {
  /**
   * 보여줄 타일 이미지
   */
  data: Array<JSX.Element>;
  /**
   * 타일 줄 개수
   */
  maxWidth?: number | string;
  /**
   * 타일 최소 크기
   */
  blockSize?: number | string;
  /**
   * 타일 스타일
   */
  blockStyle?: React.CSSProperties;
  /**
   * 스타일
   */
  style?: React.CSSProperties;
};

function Tiles(props: Props) {
  const { data, maxWidth, blockSize, blockStyle, style } = props;

  return (
    <FlexBox
      direction={'row'}
      wrap={'wrap'}
      alignItems={'start'}
      style={{
        width: maxWidth,
        height: 'fit-content',
        ...style
      }}
    >
      {data.map((data, index) => {
        return (
          <FlexItem
            key={index}
            style={{
              width: blockSize,
              height: blockSize,
              background: '#a3dfe6',
              border: '1px solid #63a2fa',
              boxSizing: 'border-box',
              ...blockStyle
            }}
          >
            {data}
          </FlexItem>
        );
      })}
    </FlexBox>
  );
}

Tiles.defaultProps = {
  maxWidth: '70vw',
  blockSize: 250
};

export default Tiles;

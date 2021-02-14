import React from 'react';
import FlexBox from 'src/components/Flex/FlexBox';
import { FlexItemCustum } from './tilesStyle';

type Props = {
  /**
   * 보여줄 타일 이미지
   */
  data: Array<{ tile: JSX.Element }>;
  /**
   * 타일 줄 개수
   */
  maxWidth?: number | string;
  /**
   * 타일 최소 크기
   */
  blockSize: number | string;
  /**
   * 타일 스타일
   */
  blockStyle?: React.CSSProperties;
  /**
   * 스타일
   */
  style?: React.CSSProperties;
  /**
   * 클릭 이벤트
   */
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index?: number
  ) => void;
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
          <FlexItemCustum
            key={index}
            blockSize={blockSize}
            style={{ marginRight: '20px', marginBottom: '20px', ...blockStyle }}
            onClick={e => {
              if (props.onClick) props.onClick(e, index);
            }}
          >
            {data.tile}
          </FlexItemCustum>
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

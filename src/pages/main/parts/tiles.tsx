import React, { useEffect, useState } from 'react';
import FlexBox from 'src/components/Flex/FlexBox';
import FlexItem from 'src/components/Flex/FlexItem';

type Props = {
  /**
   * 보여줄 타일 이미지
   */
  data: Array<string>;
  /**
   * 타일 최소 크기
   */
  minSize?: number;
  /**
   * 타일 줄 개수
   */
  line?: number;
};

function Tiles(props: Props) {
  const [width, setWidth] = useState<number>(getTopWrapperWidth());
  const { data, minSize: pMinSize, line } = props;

  const minSize = pMinSize ?? 200;
  const remains = (width % minSize) / Math.floor(width / minSize);
  const size = minSize + remains;
  const count = Math.round(width / size);

  const emptyArr = Array.from({ length: count * (line ?? 3) });

  function update() {
    setWidth(getTopWrapperWidth());
  }

  function getTopWrapperWidth() {
    const topWrapperWidth =
      document.getElementById('topWrapper')?.clientWidth || 720;
    // TODO: index.tsx의 topWrapper의 minWidth를 redux로 관리하기
    // TODO: document로 크기 알아오지 말고 redux로 알아오기
    // TODO: Block, Circle, navigator 제거 예정
    return topWrapperWidth;
  }

  useEffect(() => {
    window.addEventListener('resize', update);

    return function () {
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <FlexBox
      direction={'row'}
      wrap={'wrap'}
      // justifyContent={'space-between'}
      alignItems={'start'}
      style={{
        width: '100%'
      }}
    >
      {emptyArr.map((data, index) => {
        return (
          <FlexItem
            key={index}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: '#565656',
              border: '1px solid #772424',
              boxSizing: 'border-box'
            }}
          ></FlexItem>
        );
      })}
    </FlexBox>
  );
}

export default Tiles;

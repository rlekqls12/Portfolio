import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  SliderWrap,
  SliderControlWrap,
  SliderControlButton,
  SliderIndicatorWrap,
  SliderIndicatorDot,
  SliderCard,
  SliderCardBlur
} from './sliderStyle';

type Dist = number | ((value: any, index: number, cardIndex: number) => number);

type Props = {
  cardInfoList: any[];
  foucsIndex: number;
  showCardCount: number;
  render: (value: any, index: number, cardIndex: number) => JSX.Element;
  cardStyle?: {
    distX?: Dist;
    distSize?: Dist;
    distAlpha?: Dist;
  };
};

const initDist: {
  distX: Dist;
  distSize: Dist;
  distAlpha: Dist;
} = {
  distX: 15,
  distSize: 20,
  distAlpha: 0.35
};

function Slider(props: Props) {
  const { cardInfoList, foucsIndex, showCardCount, render, cardStyle } =
    useMemo(() => props, [props]);
  const [realCardIndex, setCardIndex] = useState<number>(foucsIndex ?? 0);
  // 스와이프 이벤트 시작 좌표
  const [swipeEvent, setSwipeEvent] = useState<number>(0);
  // 드래그 이벤트 시작 좌표
  const [dragEvent, setDragEvent] = useState<number>(0);

  useEffect(() => {
    setCardIndex(foucsIndex);
  }, [foucsIndex]);

  const slideCardList = useMemo(() => {
    const tempList = [];

    if (cardInfoList.length > 0) {
      const length = cardInfoList.length;
      const maxIndex = showCardCount + 2;
      const halfIndex = Math.floor(maxIndex / 2);
      const effectIndex = realCardIndex <= 0 ? halfIndex : -halfIndex;
      const targetCardIndex = realCardIndex % maxIndex;
      const pageIndex = Math.abs(realCardIndex / maxIndex);
      const effectMaxIndex = realCardIndex < 0 ? -maxIndex : maxIndex;
      const { distX, distSize, distAlpha } = cardStyle ?? initDist;

      const convertDist = (
        dist: Dist,
        value: any,
        index: number,
        cardIndex: number
      ) => {
        if (typeof dist === 'function') return dist(value, index, cardIndex);
        else return dist;
      };

      for (let i = -halfIndex; i <= halfIndex; i++) {
        const cardRawIndex = i - realCardIndex;
        let cardIndex = ((cardRawIndex + effectIndex) % maxIndex) - effectIndex;

        let v;
        let dataIndex = 0;
        if (length > 0) {
          dataIndex = i;

          // 카드 회전에 따른 인덱스 값 부여할 조건 확인
          const cardAbsoluteIndex = i + halfIndex;
          const condition =
            realCardIndex >= 0
              ? targetCardIndex > cardAbsoluteIndex
              : maxIndex + targetCardIndex <= cardAbsoluteIndex;

          // 카드 회전에 따른 인덱스 값 부여
          dataIndex +=
            (condition ? Math.ceil(pageIndex) : Math.floor(pageIndex)) *
            effectMaxIndex;

          // 데이터 배열 범위에 맞게 커팅
          dataIndex %= length;
          if (dataIndex < 0) dataIndex += length;

          v = cardInfoList[dataIndex] ?? { text: undefined };
        } else {
          v = cardInfoList[0];
        }

        tempList.push(
          <SliderCard
            key={i}
            index={cardIndex}
            endIndex={halfIndex}
            dist={convertDist(distX ?? initDist.distX, v, dataIndex, i)}
            distX={convertDist(distSize ?? initDist.distSize, v, dataIndex, i)}
            distAlpha={convertDist(
              distAlpha ?? initDist.distAlpha,
              v,
              dataIndex,
              i
            )}
          >
            {render(v, dataIndex, cardIndex)}
            <SliderCardBlur index={cardIndex} endIndex={halfIndex - 1} />
          </SliderCard>
        );
      }
    }

    return tempList;
  }, [cardInfoList, showCardCount, realCardIndex, render, cardStyle]);

  const sliderIndicatorDots = useMemo(() => {
    const length = cardInfoList.length;
    let nowIndex = realCardIndex % length;
    if (nowIndex < 0) nowIndex += length;
    return Array.from({ length: length }, (_, i) => (
      <SliderIndicatorDot
        key={i}
        focus={i === nowIndex}
        onClick={() => {
          if (nowIndex !== i) setCardIndex(i);
        }}
      />
    ));
  }, [cardInfoList, realCardIndex, setCardIndex]);

  const onSwipe = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      const swipeX = event.changedTouches[0].pageX;
      switch (event.type) {
        case 'touchstart':
          setSwipeEvent(swipeX);
          break;
        case 'touchend':
          const view: any = event.view;
          const distX = swipeEvent - swipeX;
          if (Math.abs(distX) > view.innerWidth / 10) {
            const direction = distX > 0 ? 1 : -1;

            setSwipeEvent(swipeX);
            setCardIndex(prev => prev + direction);
          }
          break;
      }
      return false;
    },
    [swipeEvent]
  );
  const onDrag = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const dragX = event.pageX;
      switch (event.type) {
        case 'mousedown':
          setDragEvent(dragX);
          break;
        case 'mouseup':
          const view: any = event.view;
          const distX = dragEvent - dragX;
          if (Math.abs(distX) > view.innerWidth / 10) {
            const direction = distX > 0 ? 1 : -1;

            setDragEvent(dragX);
            setCardIndex(prev => prev + direction);
          }
          break;
      }
      return false;
    },
    [dragEvent]
  );

  return (
    <SliderWrap
      onTouchStart={onSwipe}
      onTouchEnd={onSwipe}
      onMouseDown={onDrag}
      onMouseUp={onDrag}
    >
      {slideCardList}
      <SliderControlWrap>
        <SliderControlButton onClick={() => setCardIndex(prev => prev - 1)}>
          &lt;&lt;
        </SliderControlButton>
        <SliderControlButton onClick={() => setCardIndex(prev => prev + 1)}>
          &gt;&gt;
        </SliderControlButton>
      </SliderControlWrap>
      <SliderIndicatorWrap>{sliderIndicatorDots}</SliderIndicatorWrap>
    </SliderWrap>
  );
}

Slider.defaultProps = {
  cardInfoList: [],
  foucsIndex: 0,
  showCardCount: 5
};

export default React.memo(Slider);

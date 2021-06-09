import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SliderWrap, SliderCard } from './sliderStyle';

type Card = {
  text: string;
};

type Props = {
  cardInfoList: Card[];
  foucsIndex: number;
  showCardCount: number;
};

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

function Slider(props: Props) {
  const { cardInfoList, foucsIndex, showCardCount } = useMemo(
    () => props,
    [props]
  );
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
      const halfShowCount = showCardCount / 2;
      const halfIndex = Math.floor(halfShowCount + 1);
      const maxIndex = showCardCount + 2;
      const leftAdjust = Math.floor(halfShowCount) + 1;

      for (let i = -leftAdjust; i <= leftAdjust; i++) {
        let v = cardInfoList[0];

        let tempTestValue = i;
        let tempIndex = 0;
        if (length > 0) {
          tempIndex = tempTestValue % showCardCount;
          if (tempIndex < 0) tempIndex += showCardCount;

          v = cardInfoList[tempIndex];
        }
        // MEMO: 여기서 계산하고 CSS로 넘겨줬어야 했는데, 넘기고 나서 계산해서 이 밑에 VIEW에서 계산해버리면 안 맞아버림
        // TODO: tempIndex를 여기서 realCardIndex 계산해서 넘기기

        tempList.push(
          <SliderCard
            key={i}
            index={i - realCardIndex}
            halfIndex={halfIndex}
            maxIndex={maxIndex}
            dist={10}
            distAlpha={0.2}
          >
            <img src={'./images/icon/' + imageList[tempIndex]} alt={'icon'} />
            <p>
              ({i}+{leftAdjust}){tempTestValue}%{showCardCount}={tempIndex}
            </p>
            <p>{v.text}</p>
          </SliderCard>
        );
      }
    }

    return tempList;
  }, [cardInfoList, realCardIndex, showCardCount]);

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
      <span style={{ position: 'absolute', top: 250, fontSize: '48px' }}>
        {realCardIndex}
      </span>
      {slideCardList}
    </SliderWrap>
  );
}

Slider.defaultProps = {
  cardInfoList: [],
  foucsIndex: 0,
  showCardCount: 5
};

export default React.memo(Slider);

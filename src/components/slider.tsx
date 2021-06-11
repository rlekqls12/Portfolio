import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  SliderWrap,
  SliderControlWrap,
  SliderControlButton,
  SliderCard
} from './sliderStyle';

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
      const maxIndex = showCardCount + 2; // 5
      const halfIndex = Math.floor(maxIndex / 2); // 2
      const effectIndex = realCardIndex <= 0 ? halfIndex : -halfIndex;

      for (let i = -halfIndex; i <= halfIndex; i++) {
        const cardRawIndex = i - realCardIndex;
        let cardIndex = ((cardRawIndex + effectIndex) % maxIndex) - effectIndex;

        let v;
        let dataIndex = 0;
        if (length > 0) {
          dataIndex = i;

          // TODO: dataIndex 값 설정하기, cardIndex 처럼 양수 음수 구분해서 처리해야 할 것 같음

          v = cardInfoList[dataIndex] ?? { text: undefined };
        } else {
          v = cardInfoList[0];
        }

        tempList.push(
          <SliderCard
            key={i}
            index={cardIndex}
            endIndex={halfIndex}
            dist={10}
            distAlpha={0.2}
          >
            {/* <img src={'./images/icon/' + imageList[dataIndex]} alt={'icon'} /> */}
            <p>{i + halfIndex}</p>
            <p>{dataIndex}</p>
            <p>
              {i} + {cardIndex} = {i + cardIndex}
            </p>
            {/* <p>{v.text}</p> */}
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
      <span style={{ position: 'absolute', top: 200, fontSize: '48px' }}>
        CardIndex: {realCardIndex}
        <br />
        ShowCardCount: {showCardCount}
      </span>
      {slideCardList}
      <SliderControlWrap>
        <SliderControlButton onClick={() => setCardIndex(prev => prev - 1)}>
          &lt;&lt;
        </SliderControlButton>
        <SliderControlButton onClick={() => setCardIndex(prev => prev + 1)}>
          &gt;&gt;
        </SliderControlButton>
      </SliderControlWrap>
    </SliderWrap>
  );
}

Slider.defaultProps = {
  cardInfoList: [],
  foucsIndex: 0,
  showCardCount: 5
};

export default React.memo(Slider);

import React, { useEffect, useMemo, useState } from 'react';
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

  useEffect(() => {
    setCardIndex(foucsIndex);
  }, [foucsIndex]);

  const slideCardList = useMemo(() => {
    const tempList = [];

    if (cardInfoList.length > 0) {
      const length = cardInfoList.length;
      const halfShowCount = showCardCount / 2;
      const halfIndex = Math.floor(Math.abs(halfShowCount + 1));
      const leftAdjust = Math.floor(halfShowCount) + 1;

      for (let i = -leftAdjust; i <= leftAdjust; i++) {
        let v = cardInfoList[0];

        if (length > 1) {
          let tempIndex = i % length;
          if (tempIndex < 0) tempIndex += length;

          v = cardInfoList[tempIndex];
        }

        tempList.push(
          <SliderCard
            key={i}
            index={i - realCardIndex}
            halfIndex={halfIndex}
            maxIndex={showCardCount + 2}
            dist={10}
            distAlpha={0.2}
          >
            {/* {v.text} */}
            <img src={'./images/icon/' + imageList[i + leftAdjust]} />
          </SliderCard>
        );
      }
    }

    return tempList;
  }, [cardInfoList, realCardIndex, showCardCount]);

  return (
    <SliderWrap onClick={() => setCardIndex(prev => prev - 1)}>
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

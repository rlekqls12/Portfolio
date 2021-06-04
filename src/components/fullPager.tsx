import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FullPage } from './fullPagerStyle';

// TODO: 페이지 안에서 스크롤이 다 끝나기 전에 페이지가 넘어감
// MEMO: Event에서 ScrollY 확인하기
// TODO: onWheel 말고 스크롤 관련 이벤트를 써야될 것 같음. 아니면 글로벌 스클로 이벤트를 보거나

type Props = {
  transition: number;
  onChange: (page: number) => any;
  children: React.ReactNode;
};

type WheelEvent = {
  direction: number;
  effectTime: number;
};

function FullPager(props: Props) {
  // 휠 방향, 마지막 휠 이벤트 감지 시간
  const [wheelEvent, setWheelEvent] = useState<WheelEvent>({
    direction: 0,
    effectTime: 0
  });
  // 현재 페이지
  const [fullPage, setFullPage] = useState<number>(0);
  // 자식 컴포넌트 개수에 따른 최대 페이지 수
  const maxPage = useMemo(
    () => (Array.isArray(props.children) ? props.children.length : 0),
    [props]
  );

  // 휠 이벤트
  const onWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      const { deltaY } = event;
      const time = new Date().getTime();
      if (Math.abs(deltaY) > 100 && time - wheelEvent.effectTime > 500) {
        const direction = deltaY > 0 ? 1 : -1;

        if (direction === -1 && fullPage + direction < 0) return;
        if (direction === 1 && maxPage <= fullPage + direction) return;

        setWheelEvent({
          direction: direction,
          effectTime: time
        });
      }
    },
    [fullPage, maxPage, wheelEvent.effectTime]
  );

  // 휠 이벤트에 따른 페이지 이동
  useEffect(() => {
    if (wheelEvent.direction === 0) return;

    setFullPage(prevPage => {
      const nowPage = Math.max(prevPage + wheelEvent.direction, 0);
      props.onChange(nowPage);
      return nowPage;
    });
  }, [wheelEvent, props.onChange, props]);

  return (
    <FullPage page={fullPage} transition={props.transition} onWheel={onWheel}>
      {props.children}
    </FullPage>
  );
}

FullPager.defaultProps = {
  transition: 200,
  onChange: (page: number) => {},
  children: <React.Fragment />
};

export default React.memo(FullPager);

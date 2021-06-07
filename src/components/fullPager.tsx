import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FullPage } from './fullPagerStyle';

type Props = {
  nowPage: number;
  setting: Setting;
  onChange: (page: number) => any;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
};

type WheelEvent = {
  effectTime: number;
};

type Setting = {
  wheel: boolean;
  wheelPower: number;
  wheelDelay: number;
  drag: boolean;
  dragPower: number;
  swipe: boolean;
  swipePower: number;
  swipeInTime: number;
  keyboard: boolean;
  transition: number;
};

function FullPager(props: Props) {
  const { nowPage, setting, onChange, children, ref } = useMemo(
    () => props,
    [props]
  );

  // 휠 방향, 마지막 휠 이벤트 감지 시간
  const [wheelEvent, setWheelEvent] = useState<WheelEvent>({
    effectTime: 0
  });
  // 스와이프 이벤트 시작 좌표
  const [swipeEvent, setSwipeEvent] = useState<number>(0);
  // 드래그 이벤트 시작 좌표
  const [dragEvent, setDragEvent] = useState<number>(0);
  // 현재 페이지
  const [pageNumber, setPageNumber] = useState<number>(0);
  // 자식 컴포넌트 개수에 따른 최대 페이지 수
  const maxPage = useMemo(
    () => (Array.isArray(children) ? children.length : 0),
    [children]
  );

  // 페이지 이동
  const pageMove = useCallback(
    direction => {
      setPageNumber(prevPage => {
        const tempPage = prevPage + direction;
        onChange(tempPage);
        return tempPage;
      });
    },
    [onChange]
  );

  // 휠 이벤트
  const onWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (!setting.wheel) return false;

      const { deltaY } = event;
      const time = new Date().getTime();
      if (
        Math.abs(deltaY) > setting.wheelPower &&
        time - wheelEvent.effectTime > setting.wheelDelay
      ) {
        const direction = deltaY > 0 ? 1 : -1;

        if (direction === -1 && pageNumber + direction < 0) return;
        if (direction === 1 && maxPage <= pageNumber + direction) return;

        setWheelEvent({
          effectTime: time
        });
        pageMove(direction);
      }
    },
    [
      setting.wheel,
      setting.wheelPower,
      setting.wheelDelay,
      wheelEvent.effectTime,
      pageNumber,
      maxPage,
      pageMove
    ]
  );

  // 스와이프 이벤트
  const onSwipe = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (!setting.swipe) return false;

      const swipeY = event.changedTouches[0].pageY;
      switch (event.type) {
        case 'touchstart':
          setSwipeEvent(swipeY);
          break;
        case 'touchend':
          const distY = swipeEvent - swipeY;
          if (Math.abs(distY) > setting.swipePower) {
            const direction = distY > 0 ? 1 : -1;

            if (direction === -1 && pageNumber + direction < 0) return;
            if (direction === 1 && maxPage <= pageNumber + direction) return;

            setSwipeEvent(swipeY);
            pageMove(direction);
          }
          break;
      }
    },
    [
      setting.swipe,
      setting.swipePower,
      swipeEvent,
      maxPage,
      pageMove,
      pageNumber
    ]
  );

  // 드래그 이벤트
  const onDrag = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!setting.drag) return false;

      const dragY = event.pageY;
      switch (event.type) {
        case 'mousedown':
          setDragEvent(dragY);
          break;
        case 'mouseup':
          const distY = dragEvent - dragY;
          if (Math.abs(distY) > setting.dragPower) {
            const direction = distY > 0 ? 1 : -1;

            if (direction === -1 && pageNumber + direction < 0) return;
            if (direction === 1 && maxPage <= pageNumber + direction) return;

            setDragEvent(dragY);
            pageMove(direction);
          }
          break;
      }
    },
    [setting.drag, setting.dragPower, dragEvent, maxPage, pageMove, pageNumber]
  );

  // 키보드 이벤트
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!setting.keyboard) return false;

      let direction = 0;
      if (event.key === 'ArrowUp') direction = -1;
      if (event.key === 'ArrowDown') direction = 1;

      if (direction === 0) return;
      if (direction === -1 && pageNumber + direction < 0) return;
      if (direction === 1 && maxPage <= pageNumber + direction) return;

      pageMove(direction);
    },
    [setting.keyboard, maxPage, pageMove, pageNumber]
  );

  // 외부에서 페이지 변경 시 반영
  useEffect(() => {
    if (nowPage < 0 || maxPage <= nowPage) return;

    setPageNumber(nowPage);
  }, [maxPage, nowPage]);

  return (
    <FullPage
      ref={ref}
      tabIndex={0}
      page={pageNumber}
      transition={setting.transition}
      onWheel={onWheel}
      onTouchStart={onSwipe}
      onTouchEnd={onSwipe}
      onMouseDown={onDrag}
      onMouseUp={onDrag}
      onKeyDown={onKeyDown}
    >
      {children}
    </FullPage>
  );
}

FullPager.defaultProps = {
  nowPage: 0,
  setting: {
    wheel: true,
    wheelPower: 75,
    wheelDelay: 500,
    drag: true,
    dragPower: 100,
    swipe: true,
    swipePower: 100,
    keyboard: true,
    transition: 400
  },
  onChange: (page: number) => undefined,
  children: <React.Fragment />
};

export default React.memo(FullPager);

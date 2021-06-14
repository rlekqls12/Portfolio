import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { FullPage } from './fullPagerStyle';

type Props = {
  nowPage: number;
  setting: Setting;
  onChange: (page: number) => any;
  onChildrenCount: (count: number) => any;
  children: React.ReactNode;
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
  keyboardDelay: number;
  transition: number;
};

function FullPager(props: Props) {
  const { nowPage, setting, onChange, onChildrenCount, children } = useMemo(
    () => props,
    [props]
  );

  const fullpageRef = useRef<HTMLDivElement>(null);
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
  // 키보드 이벤트 딜레이
  const [keyboardDelay, setKeyboardDelay] = useState<number>(0);
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

      // MEMO: 임시 코드
      if (
        fullpageRef?.current &&
        Array.isArray(children) &&
        children.length > pageNumber
      ) {
        const target: any =
          fullpageRef.current.children[pageNumber + direction];
        target.focus();
      }
      return false;
    },
    [children, onChange, pageNumber]
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
      return false;
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
      return false;
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
      return false;
    },
    [setting.drag, setting.dragPower, dragEvent, maxPage, pageMove, pageNumber]
  );

  // 키보드 이벤트
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!setting.keyboard) return false;

      const time = new Date().getTime();

      if (time - keyboardDelay < setting.keyboardDelay) return;

      let direction = 0;
      if (event.key === 'ArrowUp') direction = -1;
      if (event.key === 'ArrowDown') direction = 1;

      if (direction === 0) return;
      if (direction === -1 && pageNumber + direction < 0) return;
      if (direction === 1 && maxPage <= pageNumber + direction) return;

      setKeyboardDelay(time);
      pageMove(direction);
      return false;
    },
    [
      setting.keyboard,
      setting.keyboardDelay,
      keyboardDelay,
      maxPage,
      pageMove,
      pageNumber
    ]
  );

  // 외부에서 페이지 변경 시 반영
  useEffect(() => {
    if (nowPage < 0 || maxPage <= nowPage) return;

    setPageNumber(nowPage);
  }, [maxPage, nowPage]);

  // 내부 페이지 개수 변화 시 외부 콜백 함수 실행
  useEffect(() => {
    onChildrenCount(Array.isArray(children) ? children.length : 0);
  }, [children, onChildrenCount]);

  return (
    <FullPage
      ref={fullpageRef}
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
    keyboardDelay: 200,
    transition: 400
  },
  onChange: (page: number) => undefined,
  onChildrenCount: (count: number) => undefined,
  children: <React.Fragment />
};

export default React.memo(FullPager);

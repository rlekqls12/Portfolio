import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { PageIndicate, Pointer } from './pageIndicatorStyle';

export type PageIndicatorStyle = {
  left?: number | string | 'center';
  right?: number | string;
  top?: number | string | 'center';
  bottom?: number | string;
};

type Props = {
  focus: number;
  max: number;
  style: PageIndicatorStyle;
  pointerStyle: React.CSSProperties;
  pointerFocusStyle: React.CSSProperties;
  onFocusChnage: (index: number) => any;
};

function PageIndicator(props: Props) {
  const { focus, max, style, pointerFocusStyle, pointerStyle, onFocusChnage } =
    useMemo(() => props, [props]);
  const [nowFocus, setFocus] = useState<number>(focus);

  useEffect(() => {
    if (focus !== nowFocus) setFocus(focus);
  }, [focus]);

  const pointerClick = useCallback(
    (index: number) => {
      setFocus(index);
      onFocusChnage(index);
    },
    [setFocus, onFocusChnage]
  );

  const pointers = useMemo(
    () =>
      Array.from({ length: max }, (_, i) => (
        <Pointer
          key={i}
          style={nowFocus === i ? pointerFocusStyle : pointerStyle}
          onClick={() => pointerClick(i)}
        />
      )),
    [nowFocus, max, pointerFocusStyle, pointerStyle, pointerClick]
  );

  return (
    <PageIndicate tabIndex={0} style={style}>
      {pointers}
    </PageIndicate>
  );
}

PageIndicator.defaultProps = {
  focus: 0,
  max: 0,
  style: {
    top: 'center',
    right: 10,
    zIndex: 101
  },
  pointerStyle: {
    width: '0.4vw',
    height: '6vh',
    cursor: 'pointer',
    margin: '0.1px 0',
    backgroundColor: 'rgb(125, 35, 35)',
    transition: 'all 0.3s ease-in-out'
  },
  pointerFocusStyle: {
    width: '0.4vw',
    height: '6vh',
    margin: '0.1px 0',
    backgroundColor: 'rgba(255, 73, 73, 1)',
    transition: 'all 0.3s ease-in-out'
  },
  onFocusChnage: (index: number) => undefined
};

export default React.memo(PageIndicator);

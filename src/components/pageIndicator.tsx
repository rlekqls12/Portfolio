import React, { useMemo } from 'react';
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
};

function PageIndicator(props: Props) {
  const { focus, max } = useMemo(() => props, [props]);
  const pointers = useMemo(
    () =>
      Array.from({ length: max }, (_, i) => (
        <Pointer
          key={i}
          style={focus === i ? props.pointerFocusStyle : props.pointerStyle}
        />
      )),
    [focus, max]
  );

  return <PageIndicate style={props.style}>{pointers}</PageIndicate>;
}

PageIndicator.defaultProps = {
  focus: 0,
  max: 0,
  style: {
    top: 'center',
    right: 10
  },
  pointerStyle: {
    width: 10,
    height: 10,
    borderRadius: 30,
    margin: '10px 0',
    backgroundColor: 'red'
  },
  pointerFocusStyle: {
    width: 10,
    height: 10,
    borderRadius: 30,
    margin: '10px 0',
    backgroundColor: 'blue'
  }
};

export default React.memo(PageIndicator);

import React, { CSSProperties } from 'react';

type baseType = '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset';
type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';
type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start';
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start';

type direction = 'row' | 'row-reverse' | 'column' | 'column-reverse' | baseType;
type wrap = 'nowrap' | 'wrap' | 'wrap-reverse' | baseType;
type justifyContent =
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | baseType;
type alignContent =
  | ContentDistribution
  | ContentPosition
  | 'baseline'
  | 'normal'
  | baseType;
type alignItems = SelfPosition | 'baseline' | 'normal' | 'stretch' | baseType;

type Props = {
  /**
   * (display: inline-flex) 여부
   */
  inlineFlex?: boolean;
  /**
   * direction, wrap 동시 입력
   *
   * **Syntax**: `<'flex-direction'> || <'flex-wrap'>`
   */
  flow?: direction | wrap | (string & {});
  /**
   * 정렬 방향
   */
  direction?: direction;
  /**
   * 내부 요소들이 컨테이너보다 길어질 때, 줄 바꿈 여부
   */
  wrap?: wrap;
  /**
   * 가로 정렬 방향
   */
  justifyContent?: justifyContent | (string & {});
  /**
   * 세로 정렬 방향 (2줄 이상)
   */
  alignContent?: alignContent | (string & {});
  /**
   * 세로 정렬 방향 (1줄)
   */
  alignItems?: alignItems | (string & {});
  /**
   * style
   */
  style?: CSSProperties;
  children?: React.ReactNode;
};

function FlexBox(props: Props) {
  return (
    <div
      style={{
        display: props?.inlineFlex ? 'inline-flex' : 'flex',
        flexFlow: props?.flow,
        flexDirection: props?.direction,
        flexWrap: props?.wrap,
        justifyContent: props?.justifyContent,
        alignContent: props?.alignContent,
        alignItems: props?.alignItems,
        ...props?.style,
      }}
    >
      {props.children}
    </div>
  );
}

export default FlexBox;

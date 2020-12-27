import React, { CSSProperties } from 'react';

type Props = {
  /**
   * 블럭의 가로 크기
   */
  width: string | number;
  /**
   * 블럭의 세로 크기
   */
  height: string | number;
  /**
   * 블럭의 배경 색상
   */
  background: string;
  /**
   * style
   */
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

function Block(props: Props) {
  return (
    <div
      className={props.className}
      style={{
        width: props.width,
        height: props.height,
        background: props.background,
        ...props?.style
      }}
    >
      {props.children}
    </div>
  );
}

Block.defaultProps = {};

export default Block;

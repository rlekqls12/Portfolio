import React, { CSSProperties } from 'react';

type Props = {
  /**
   * 원의 크기
   */
  size: string | number;
  /**
   * 원 내부 글자 크기
   */
  textSize?: string | number;
  /**
   * 원의 배경 색상
   */
  background: string;
  /**
   * style
   */
  style?: CSSProperties;
  children?: React.ReactNode;
};

function Circle(props: Props) {
  return (
    <div
      style={{
        width: props.size,
        height: props.size,
        borderRadius: '100%',
        fontSize: props.textSize,
        background: props.background,
        ...props?.style,
      }}
    >
      {props.children}
    </div>
  );
}

Circle.defaultProps = {};

export default Circle;

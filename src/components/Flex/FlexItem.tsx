import React, { CSSProperties } from "react";

type baseType = "-moz-initial" | "inherit" | "initial" | "revert" | "unset";
type SelfPosition =
	| "center"
	| "end"
	| "flex-end"
	| "flex-start"
	| "self-end"
	| "self-start"
	| "start";

type order = number | baseType;
type flex<TLength = (string & {}) | 0> =
	| TLength
	| "auto"
	| "content"
	| "max-content"
	| "min-content"
	| "none"
	| baseType;
type basis<TLength = (string & {}) | 0> =
	| TLength
	| "-moz-max-content"
	| "-moz-min-content"
	| "-webkit-auto"
	| "auto"
	| "content"
	| "max-content"
	| "min-content"
	| baseType;
type alignSelf =
	| baseType
	| SelfPosition
	| "auto"
	| "baseline"
	| "normal"
	| "stretch";

type Props = {
	/**
	 * Flex Item의 순서를 설정
	 */
	order?: order;
	/**
	 * Flex Item의 속성
	 *
	 * **Syntax**: `<'flex-direction'> || <'flex-wrap'>`
	 */
	flex?: flex | (string & {}) | (number & {});
	/**
	 * Flex Item의 증가 너비 비율을 설정
	 */
	grow?: baseType | (number & {});
	/**
	 * Flex Item의 감소 너비 비율을 설정
	 */
	shrink?: baseType | (number & {});
	/**
	 * Flex Item의 (공간 배분 전) 기본 너비 설정
	 */
	basis?: basis | (string & {});
	/**
	 * 수직에서 Item의 정렬 방법을 설정
	 */
	alignSelf?: alignSelf | (string & {});
	/**
	 * style
	 */
	style?: CSSProperties;
	children?: React.ReactNode;
};

function FlexItem(props: Props) {
	return (
		<div
			style={{
				order: props?.order,
				flex: props?.flex,
				flexGrow: props?.grow,
				flexShrink: props?.shrink,
				flexBasis: props?.basis,
				alignSelf: props?.alignSelf,
				...props?.style,
			}}
		>
			{props.children}
		</div>
	);
}

export default FlexItem;

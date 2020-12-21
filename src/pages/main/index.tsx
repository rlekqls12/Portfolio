import React from "react";
import BaseColor from "src/helpers/colors";
import FlexBox from "src/components/Flex/FlexBox";
import FlexItem from "src/components/Flex/FlexItem";
import Navigator from "./parts/navigator";

function MainPage() {
	return (
		<div
			style={{
				height: "100vh",
				background: BaseColor.background,
			}}
		>
			<Navigator />
		</div>
	);
}

export default MainPage;

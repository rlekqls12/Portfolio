import React from "react";
import BaseColor from "src/helpers/colors";
import FlexBox from "src/components/Flex/FlexBox";
import FlexItem from "src/components/Flex/FlexItem";
import Circle from "src/components/Circle/Circle";

type Props = {};

const testDate = [new Date("2019.09.01"), new Date()];

function Navigator(props: Props) {
	return (
		<div
			style={{
				position: "absolute",
				left: "50%",
				height: "10vh",
				transform: "translateX(-50%)",
			}}
		>
			<FlexBox
				direction={"row"}
				alignItems={"center"}
				justifyContent={"center"}
				style={{
					width: "100px",
				}}
			>
				<FlexItem>
					<FlexBox
						direction={"column"}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<FlexItem>
							<Circle size={18} background={"#7f0032"} />
						</FlexItem>
						<FlexItem>1</FlexItem>
					</FlexBox>
				</FlexItem>
			</FlexBox>
		</div>
	);
}

Navigator.defaultProps = {};

export default Navigator;

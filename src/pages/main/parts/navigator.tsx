import React from "react";
import BaseColor from "src/helpers/colors";
import FlexBox from "src/components/Flex/FlexBox";
import FlexItem from "src/components/Flex/FlexItem";
import Circle from "src/components/Circle/Circle";

type Props = {};

const Navigator = (props: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        width: "10vw",
        transform: "translateY(-50%)",
      }}
    >
      <FlexBox
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          width: "100px",
        }}
      >
        <FlexItem>
          <FlexBox alignItems={"center"}>
            <FlexItem>
              <Circle
                size={18}
                background={"#7f0032"}
                style={{ marginRight: "8px" }}
              />
            </FlexItem>
            <FlexItem>1{/** 원이랑 세로 정렬이 되지 않음. */}</FlexItem>
          </FlexBox>
        </FlexItem>
      </FlexBox>
    </div>
  );
};

Navigator.defaultProps = {};

export default Navigator;

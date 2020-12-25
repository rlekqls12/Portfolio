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
      <Navigator startDate={new Date("2019.09.01")} endDate={new Date()} />
    </div>
  );
}

export default MainPage;

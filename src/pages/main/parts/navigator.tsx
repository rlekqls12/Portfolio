/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import BaseColor from 'src/helpers/colors';
import FlexBox from 'src/components/Flex/FlexBox';
import FlexItem from 'src/components/Flex/FlexItem';
import Circle from 'src/components/Circle/';
import Block from 'src/components/Block/';

type Props = {
  startDate: Date;
  endDate: Date;
};

/* <FlexBox direction={"column"} alignItems={"center"} justifyContent={"center"}>
  <FlexItem>
    <Circle size={18} background={"#7f0032"} />
  </FlexItem>
  <FlexItem>1</FlexItem>
</FlexBox>; */

function Navigator(props: Props) {
  const [dates, setDates] = useState<{ year: Number; month: Number }[]>([]);

  useEffect(() => {
    const { startDate, endDate } = props;

    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth() + 1;

    let year = startDate.getFullYear(),
      month = startDate.getMonth() + 1,
      monthList: typeof dates = [];
    for (; year <= endYear; year++, month = 1) {
      for (; year === endYear ? month <= endMonth : month <= 12; month++) {
        monthList.push({
          year,
          month
        });
      }
    }

    setDates(monthList);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '1%',
        height: '10vh',
        transform: 'translateX(-50%)'
      }}
    >
      <FlexBox
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        style={{
          width: '70vw'
        }}
      >
        {dates.map((date, index) => {
          const { startDate, endDate } = props;

          const firstDate =
            startDate.getFullYear() === date.year &&
            startDate.getMonth() + 1 === date.month;
          const lastDate =
            endDate.getFullYear() === date.year &&
            endDate.getMonth() + 1 === date.month;
          const firstMonth = date.month === 1;
          const month = (date.month < 10 ? '0' : '') + date.month;
          const dateText = firstDate
            ? `${date.year}.${month}`
            : firstMonth
            ? date.year
            : month;

          const width = firstDate || lastDate || firstMonth ? 6 : 4;
          const height = firstDate || lastDate || firstMonth ? 30 : 25;

          return (
            <FlexItem key={index}>
              <FlexBox direction={'column'} alignItems={'center'}>
                <FlexItem>
                  <Block
                    width={width}
                    height={height}
                    background={'#323232'}
                  ></Block>
                </FlexItem>
                <FlexBox style={{ position: 'absolute', top: '30px' }}>
                  {dateText}
                </FlexBox>
              </FlexBox>
            </FlexItem>
          );
        })}
      </FlexBox>
    </div>
  );
}

Navigator.defaultProps = {};

export default Navigator;

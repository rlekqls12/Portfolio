import React, { useCallback, useEffect, useState } from 'react';
import {
  Wrap,
  FullPager,
  Title,
  TitleMainText,
  TitleSubText,
  ProjectHistory
} from './indexStyle';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman
// TODO: 페이지 안에서 스크롤이 다 끝나기 전에 페이지가 넘어감
// MEMO: Event에서 ScrollY 확인하기

type WheelEvent = {
  direction: number;
  effectTime: number;
};

function MainPage() {
  const [wheelEvent, setWheelEvent] = useState<WheelEvent>({
    direction: 0,
    effectTime: 0
  });
  const [fullPage, setFullPage] = useState<number>(0);

  const onWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      console.log(event);
      const { deltaY } = event;
      const time = new Date().getTime();
      if (Math.abs(deltaY) > 100 && time - wheelEvent.effectTime > 1000) {
        setWheelEvent({
          direction: wheelEvent.direction > 0 ? 1 : -1,
          effectTime: time
        });
      }
    },
    [wheelEvent]
  );

  useEffect(() => {
    setFullPage(prevPage => Math.max(prevPage + wheelEvent.direction, 0));
  }, [wheelEvent]);

  return (
    <Wrap>
      <FullPager page={fullPage} onWheel={onWheel}>
        <Title>
          <TitleSubText>Full Stack</TitleSubText>
          <TitleSubText>Web Developer</TitleSubText>
          <TitleMainText>
            KI
            <br />
            DABIN
          </TitleMainText>
        </Title>
        <ProjectHistory>
          {Array.from({ length: 180 }, (_, i) => (
            <React.Fragment key={i}>
              Line {i}
              <br />
            </React.Fragment>
          ))}
        </ProjectHistory>
      </FullPager>
    </Wrap>
  );
}

export default MainPage;

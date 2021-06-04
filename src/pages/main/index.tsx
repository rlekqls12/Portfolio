import React from 'react';
import { Wrap, ProjectHistory } from './indexStyle';
import Title from './title';
import FullPager from 'src/components/fullPager';

// 사용해본 툴 Slack, Notion, Jira, Zeplin, Postman

function MainPage() {
  return (
    <Wrap>
      <FullPager transition={200}>
        <Title />
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

export default React.memo(MainPage);

import { TileWrap, TileText } from './developHistoryStyle';
import Language from '../parts/language';

export const historyArr: {
  [key in string]: Array<{ tile: JSX.Element }>;
} = {
  '2019. 11': [
    {
      tile: (
        <TileWrap>
          <TileText>지역화폐 블록체인 지갑</TileText>
          <Language list={['Servlet/Jsp', 'Android', 'Kotlin', 'MySQL']} />
        </TileWrap>
      )
    }
  ],
  '2020. 01': [
    {
      tile: (
        <TileWrap>
          <TileText>
            OTT Project
            <br />
            Kyma
          </TileText>
          <Language list={['NodeJS', 'Express', 'MySQL', 'Android']} />
        </TileWrap>
      )
    }
  ],
  '2020. 06': [
    {
      tile: (
        <TileWrap>
          <TileText>Web Storage Project</TileText>
          <Language
            list={['NodeJS', 'Express', 'MySQL', 'ReactJS', 'TypeScript']}
          />
        </TileWrap>
      )
    }
  ],
  '2020. 09': [
    {
      tile: (
        <TileWrap>
          <TileText>
            근태관리시스템
            <br />
            Jatco
          </TileText>
          <Language list={['Spring', 'MsSQL', 'Window Forms']} />
        </TileWrap>
      )
    },
    {
      tile: (
        <TileWrap>
          <TileText>
            쇼핑몰
            <br />
            BHL
          </TileText>
          <Language list={['Spring', 'PostgreSQL']} />
        </TileWrap>
      )
    }
  ],
  '2020. 10': [
    {
      tile: (
        <TileWrap>
          <TileText>
            물류관리시스템
            <br />
            FBW
          </TileText>
          <Language
            list={[
              'NodeJS',
              'NestJS',
              'TypeORM',
              'AWS RDS',
              'ReactJS',
              'TypeScript'
            ]}
          />
        </TileWrap>
      )
    },
    {
      tile: (
        <TileWrap>
          <TileText>
            셀러지원쇼핑몰
            <br />
            Sellway
          </TileText>
          <Language list={['Spring', 'Thymeleaf', 'AWS RDS']} />
        </TileWrap>
      )
    }
  ],
  '2021. 01': [
    {
      tile: (
        <TileWrap>
          <TileText>
            물류관리시스템
            <br />
            FBW Remake
          </TileText>
          <Language list={['Spring', 'JQuery', 'AWS RDS']} />
        </TileWrap>
      )
    }
  ]
};

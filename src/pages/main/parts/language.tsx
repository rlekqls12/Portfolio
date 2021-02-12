import React, { useEffect, useState } from 'react';
import {
  LanguageImg,
  LanguageIcon,
  LanguageWrap,
  LanguageInner
} from './languageStyle';

type Props = {
  list: Array<string>;
};

function Language(props: Props) {
  const [elements, setElements] = useState<Array<JSX.Element>>([]);

  useEffect(
    function () {
      const tempList = props.list.map(language => {
        let src = `/images/${language.toLocaleLowerCase()}.svg`;

        switch (language.toLocaleLowerCase()) {
          case 'servlet/jsp':
          case 'spring':
            src = '/images/java.svg';
            break;
          case 'react':
          case 'reactnative':
          case 'react native':
          case 'reactjs':
            src = '/images/react.svg';
            break;
          case 'window':
          case 'window forms':
            src = '/images/window.svg';
            break;
          case 'aws':
          case 'aws rds':
            src = '/images/aws.svg';
            break;
          case 'typeorm':
            src = '/images/typeorm.png';
            break;
          case 'thymeleaf':
            src = '/images/thymeleaf.png';
            break;
        }

        return (
          <LanguageIcon title={language}>
            <LanguageImg src={src} />
          </LanguageIcon>
        );
      });

      setElements(tempList);
    },
    [props.list]
  );

  return (
    <LanguageWrap>
      <LanguageInner>
        {elements.map((element, index) => (
          <React.Fragment key={index}>{element}</React.Fragment>
        ))}
      </LanguageInner>
    </LanguageWrap>
  );
}

Language.defaultProps = {
  list: []
};

export default Language;

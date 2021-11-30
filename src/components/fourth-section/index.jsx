import { useState } from 'react';
import { TitleAndParagraph } from '../../components/title-and-paragraph';
import { Button } from '../button';
import style from './fourthSection.module.css';
import { parentsText } from '../../data/parentsText';
import { nanniesText } from '../../data/nanniesText';

export const FourthSection = () => {
  const [whichButton, setWhichButton] = useState(true);

  const onHandleClick = (status) => {
    setWhichButton(status);
  };

  const textToRender = whichButton ? parentsText : nanniesText;

  return (
    <section className={style.sectionContainer}>
      <h1 className={style.title}>How it works: Some tips and insights</h1>
      <div className={style.buttonContainer}>
        <Button
          buttonClass={whichButton ? 'coloredButton' : 'discoloredButton'}
          type="button"
          onClick={() => onHandleClick(true)}
        >
          Parents
        </Button>
        <Button
          buttonClass={!whichButton ? 'coloredButton' : 'discoloredButton'}
          type="button"
          onClick={() => onHandleClick(false)}
        >
          Nannies
        </Button>
      </div>
      <div className={style.contentContainer}>
        {textToRender.map(({ title, text }) => {
          return (
            <TitleAndParagraph
              key={Math.random()}
              subtitle={title}
              text={text}
            />
          );
        })}
      </div>
    </section>
  );
};

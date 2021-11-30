import { FirstSection } from '../../components/first-section';
import { SecondSection } from '../../components/second-section';
import { Divider } from '../../components/divider';
import { ThirdSection } from '../../components/third-section';
import { FourthSection } from '../../components/fourth-section';
import { FifthSection } from '../../components/fifth-section';

export const Main = () => {
  return (
    <main>
      <article>
        <FirstSection />
        <SecondSection />
        <Divider dividerClass={'divider'} />
        <ThirdSection />
        <Divider dividerClass={'divider'} />
        <FourthSection />
        <Divider dividerClass={'divider'} />
        <FifthSection />
      </article>
    </main>
  );
};

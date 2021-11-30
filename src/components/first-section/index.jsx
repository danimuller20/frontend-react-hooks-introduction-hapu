import style from './firstSection.module.css';
export const FirstSection = () => {
  return (
    <section className={style.heroContainer}>
      <div className={style.headingContainer}>
        <h1 className={style.title}>Become a nanny share host</h1>
        <h2 className={style.subtitle}>
          Reduce costs, increase incomes and change childcare forever.
        </h2>
      </div>
    </section>
  );
};

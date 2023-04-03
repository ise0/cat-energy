import cn from 'classnames';
import Slider from './slider';
import { getStyles, Mods } from './styles';

type Props = {
  className?: string;
} & Mods;

export function Achivements({ className, size }: Props) {
  const styles = getStyles({ size });
  return (
    <section className={cn(styles['achivements'], className)}>
      <div className={styles['achivements__col']}>
        <h2 className={styles['achivements__head-title']}>Живой пример</h2>
        <p className={styles['achivements__text']}>
          Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim.
          Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и
          по-прежнему спит по 16 часов в день.
        </p>

        <dl className={styles['achivements__list-wrapper']}>
          <div className={styles['achivements__list']}>
            <div className={styles['achivements__item']}>
              <dt className={styles['achivements__title']}>Cнижение веса</dt>
              <dd className={styles['achivements__description']}>5 кг</dd>
            </div>
            <div className={styles['achivements__item']}>
              <dt className={styles['achivements__title']}>Затрачено времени</dt>
              <dd className={styles['achivements__description']}>60 дней</dd>
            </div>
          </div>
          <div className={styles['achivements__subtext']}>
            <dt className={styles['achivements__subtext-title']}>Затраты на питание:</dt>
            <dd className={styles['achivements__subtext-description']}>15 000 РУБ.</dd>
          </div>
        </dl>
      </div>

      <Slider styles={styles} />
    </section>
  );
}

export default Achivements;

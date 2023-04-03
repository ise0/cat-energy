import cn from 'classnames';
import { getStyles, Mods } from './styles';

type Props = { className?: string } & Mods;

const objectives = [
  {
    title: 'Похудение',
    text: `Ваш кот весит больше собаки и почти утратил способность лазить по
    деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу
    сбросить лишний вес.`,
    linkTitle: 'Каталог slim',
    link: '/',
    modifier: 'objectives__item_icon_slim',
  },
  {
    title: 'Набор массы',
    text: `Заработать авторитет среди дворовых котов и даже собак? Серия Cat
    Energy Pro поможет вашему коту нарастить необходимые мышцы!`,
    linkTitle: 'Каталог pro',
    link: '/',
    modifier: 'objectives__item_icon_pro',
  },
];

export function Objectives({ className, size }: Props) {
  const styles = getStyles({ size });

  return (
    <section className={cn(styles['objectives'], className)}>
      <h2 className="visually-hidden">Ваша цель</h2>
      <ul className={styles['objectives__list']}>
        {objectives.map((item) => (
          <li className={cn(styles['objectives__item'], styles[item.modifier])} key={item.title}>
            <h3 className={styles['objectives__title']}>{item.title}</h3>
            <p className={styles['objectives__text']}>{item.text}</p>
            <div className={styles['objectives__link-wrapper']}>
              <a className={styles['objectives__link']} href={item.link}>
                {item.linkTitle}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Objectives;

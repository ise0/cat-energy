import { BtnLink } from 'shared/ui/btn-link';
import cn from 'classnames';
import { getStyles, Mods } from './styles';
import Image from 'next/image';

type Props = { className?: string } & Mods;

export function Banner({ className, size }: Props) {
  const { styles, blockModifiers } = getStyles({ size });

  return (
    <section className={cn(styles['banner'], className)}>
      <h2 className={styles['banner__title']}>
        Функциональное <br /> питание для котов
      </h2>
      <span className={styles['banner__slogan']}>Занялся собой? Займись котом!</span>
      <div className={styles['banner__img']}>
        <Image src="/images/index-can-desktop@2x.png" layout="fill" alt="" objectFit="contain" />
      </div>
      <BtnLink
        className={styles['banner__link']}
        text="Подобрать программу"
        type="link"
        href="/"
        theme="green"
        {...blockModifiers['banner__link']}
      />
    </section>
  );
}

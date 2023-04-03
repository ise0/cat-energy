import { BtnLink } from 'shared/ui/btn-link';
import cn from 'classnames';
import Image from 'next/image';
import { getStyles, Mods } from './styles';

type TProduct = {
  name: string;
  price: number;
  weight: number;
  flavor: string;
  img: string;
};

type Props = {
  className?: string;
  product: TProduct;
} & Mods;

export function ProductCard({ className, product, size }: Props) {
  const styles = getStyles({ size });

  const { price, flavor, weight, img, name } = product;
  const features = [
    { title: 'Масса', value: weight },
    { title: 'Вкус', value: flavor },
    { title: 'Цена', value: price },
  ];

  return (
    <div className={cn(className, styles['product-card'])}>
      <div className={styles['product-card__inner']}>
        <div className={styles['product-card__img']}>
          <Image src={`${img}`} alt="" layout="fill" objectFit="contain" />
        </div>
        <div className={styles['product-card__details']}>
          <h3 className={styles['product-card__name']}>{name}</h3>
          <dl className={styles['product-card__features']}>
            {features.map((el) => (
              <div className={styles['product-card__feature']} key={el.title}>
                <dt className={styles['product-card__feature-title']}>{el.title}</dt>
                <dd className={styles['product-card__feature-value']}>{el.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <BtnLink
          className={cn(styles['product-card__link'])}
          size="s"
          theme="green"
          href=""
          text="Заказать"
          type="link"
        />
      </div>
    </div>
  );
}

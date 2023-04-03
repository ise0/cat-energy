import cn from 'classnames';
import { BtnLink } from 'shared/ui/btn-link';
import { ProductCard } from 'widgets/product-card';
import { getStyles, Mods } from './styles';

type Props = { className?: string } & Mods;

type Products = {
  name: string;
  price: number;
  weight: number;
  flavor: string;
  img: string;
}[];

const products: Products = [
  {
    name: 'Cat Energy PRO 500 г',
    weight: 500,
    price: 700,
    flavor: 'Курица',
    img: '/images/chicken-small-desktop@2x.png',
  },
  {
    name: 'Cat Energy PRO 1000 г',
    weight: 1000,
    price: 1000,
    flavor: 'Курица',
    img: '/images/chicken-big-desktop@2x.png',
  },
  {
    name: 'Cat Energy PRO 500 г',
    weight: 500,
    price: 700,
    flavor: 'Рыба',
    img: '/images/fish-small-desktop@2x.png',
  },
  {
    name: 'Cat Energy PRO 1000 г',
    weight: 1000,
    price: 1000,
    flavor: 'Рыба',
    img: '/images/fish-big-desktop@2x.png',
  },
  {
    name: 'Cat Energy PRO 500 г',
    weight: 500,
    price: 700,
    flavor: 'Гречка',
    img: '/images/buckwheat-small-desktop@2x.png',
  },
  {
    name: 'Cat Energy PRO 1000 г',
    weight: 1000,
    price: 1000,
    flavor: 'Гречка',
    img: '/images/buckwheat-big-desktop@2x.png',
  },
  {
    name: 'Cat Energy PRO 500 г',
    weight: 500,
    price: 700,
    flavor: 'Рис',
    img: '/images/rice-small-desktop@2x.png',
  },
];

export function Catalog({ className, size }: Props) {
  const { styles, blockModifiers } = getStyles({ size });

  return (
    <section className={cn(styles['catalog'], className)}>
      <h2 className={styles['catalog__title']}>Каталог продукции</h2>
      <ul className={styles['catalog__products']}>
        {products.map((product, i) => (
          <li className={styles['catalog__product']} key={i}>
            <ProductCard
              className={styles['catalog__product-card']}
              product={product}
              {...blockModifiers['product__card']}
            />
          </li>
        ))}
        <li className={styles['catalog__product']}>
          <div className={styles['catalog__show-more']}>
            <h3 className={styles['catalog__show-more-title']}>Показать еще 100500 товаров</h3>
            <span className={styles['catalog__show-more-text']}>
              На самом деле вкусов гораздо больше!
            </span>
            <BtnLink
              className={styles['catalog__show-more-btn']}
              type="button"
              size="s"
              text="Показать все"
              theme="gray"
            />
          </div>
        </li>
      </ul>
    </section>
  );
}

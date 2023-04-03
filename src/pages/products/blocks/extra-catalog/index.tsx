import { BtnLink } from 'shared/ui/btn-link';
import cn from 'classnames';
import { getStyles, Mods } from './styles';

type Props = {
  className?: string;
} & Mods;

const products = [
  {
    name: 'Сахарозаменитель',
    productPackage: '1 упаковка (100 г)',
    price: '200 Р.',
  },
  {
    name: 'Питьевая вода',
    productPackage: '5 литров',
    price: '50 Р.',
  },
  {
    name: 'Молоко',
    productPackage: '1 литр',
    price: '100 Р.',
  },
  {
    name: 'Витамины',
    productPackage: '1 упаковка (30 г)',
    price: '300 Р.',
  },
];

export function ExtraCatalog({ className, size }: Props) {
  const styles = getStyles({ size });

  return (
    <section className={cn(styles['extra-catalog'], className)}>
      <h2 className={cn(styles['extra-catalog__title'])}>
        <span className={cn(styles['extra-catalog__title-text'])}>Дополнительные товары</span>
      </h2>

      <div className={cn(styles['extra-catalog__container'])}>
        <ul className={cn(styles['extra-catalog__products'])}>
          {products.map(({ name, productPackage, price }) => (
            <li className={cn(styles['extra-catalog__product product'])} key={name}>
              <div className={cn(styles['product__inner'])}>
                <div className={cn(styles['product__details'])}>
                  <h3 className={cn(styles['product__name'])}>{name}</h3>
                  <p className={cn(styles['product__package'])}>{productPackage}</p>
                  <p className={cn(styles['product__price'])}>{price}</p>
                </div>

                <BtnLink
                  className={cn(styles['product__link'])}
                  href="/"
                  text="Заказать"
                  type="link"
                  theme="green"
                  size="s"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className={cn(styles['extra-catalog__promo'])}>
          <h3 className={cn(styles['extra-catalog__promo-text'])}>
            Закажите все и получите чехол для кота в подарок!
          </h3>
        </div>
      </div>
    </section>
  );
}

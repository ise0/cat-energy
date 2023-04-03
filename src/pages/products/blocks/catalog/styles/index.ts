import styles from './scss/catalog.module.scss';
import { ProductCard } from 'widgets/product-card';
import { mergeMods } from 'shared/lib/merge-mods';

type TBlockModifiers = {
  ['product__card']: Pick<Parameters<typeof ProductCard>[0], 'size'>;
};

export type Mods = { size: 's' | 'm' | 'l' };

const mods = {
  size: {
    target: 'catalog',
    value: {
      s: 'catalog_size_s',
      m: 'catalog_size_m',
      l: 'catalog_size_l',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  let blockModifiers: TBlockModifiers = { product__card: { size: 's' } };
  if (chosenMods.size === 'm') blockModifiers = { product__card: { size: 'm' } };
  if (chosenMods.size === 'l') blockModifiers = { product__card: { size: 'l' } };

  return { styles: mergeMods(styles, mods, chosenMods), blockModifiers };
}

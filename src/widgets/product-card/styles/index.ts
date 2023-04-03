import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/product-card.module.scss';

export type Mods = { size: 's' | 'm' | 'l' };

const mods = {
  size: {
    target: 'product-card',
    value: {
      s: 'product-card_size_s',
      m: 'product-card_size_m',
      l: 'product-card_size_l',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  return mergeMods(styles, mods, chosenMods);
}

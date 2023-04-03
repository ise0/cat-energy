import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/extra-catalog.module.scss';

export type Mods = { size: 's' | 'm' | 'l' };

const mods = {
  size: {
    target: 'extra-catalog',
    value: {
      s: 'extra-catalog_size_s',
      m: 'extra-catalog_size_m',
      l: 'extra-catalog_size_l',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  return mergeMods(styles, mods, chosenMods);
}

import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/partnership.module.scss';

export type Mods = { size: 's' | 'm' | 'l' };

const mods = {
  size: {
    target: 'partnership',
    value: {
      s: 'partnership_size_s',
      m: 'partnership_size_m',
      l: 'partnership_size_l',
    },
  },
};

export function getStyles(chosenModifiers: Mods) {
  return mergeMods(styles, mods, chosenModifiers);
}

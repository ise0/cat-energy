import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/objectives.module.scss';

export type Mods = { size: 's' | 'm' | 'l' };

const mods = {
  size: {
    target: 'objectives',
    value: {
      s: 'objectives_size_s',
      m: 'objectives_size_m',
      l: 'objectives_size_l',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  return mergeMods(styles, mods, chosenMods);
}

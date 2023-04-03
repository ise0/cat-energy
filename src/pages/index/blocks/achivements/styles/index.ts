import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/achivements.module.scss';

export type Mods = { size: 's' | 'm' | 'l' };

const mods = {
  size: {
    target: 'achivements',
    value: {
      s: 'achivements_size_s',
      m: 'achivements_size_m',
      l: 'achivements_size_l',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  return mergeMods(styles, mods, chosenMods);
}

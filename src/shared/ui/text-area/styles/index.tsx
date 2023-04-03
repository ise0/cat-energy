import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/text-area.module.scss';

export type Mods = { size: 's' | 'm' };

const mods = {
  size: {
    target: 'text-area',
    value: {
      s: 'text-area_size_s',
      m: 'text-area_size_m',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  return mergeMods(styles, mods, chosenMods);
}

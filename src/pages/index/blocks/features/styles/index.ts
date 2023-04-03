import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/features.module.scss';

export type Mods = { size: 's' | 'm' };

const mods = {
  size: {
    target: 'features',
    value: {
      s: 'features_size_s',
      m: 'features_size_m',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  return mergeMods(styles, mods, chosenMods);
}

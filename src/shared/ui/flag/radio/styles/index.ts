import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/check-btn.module.scss';

export type Mods = { size: 's' | 'm' };

const mods = {
  size: {
    target: 'check-btn',
    value: {
      s: 'check-btn_size_s',
      m: 'check-btn_size_m',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  return mergeMods(styles, mods, chosenMods);
}

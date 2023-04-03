import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/footer.module.scss';

export type Mods = { size: 's' | 'm' };

const mods = {
  size: {
    target: 'footer',
    value: {
      s: 'footer_size_s',
      m: 'footer_size_m',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  return mergeMods(styles, mods, chosenMods);
}

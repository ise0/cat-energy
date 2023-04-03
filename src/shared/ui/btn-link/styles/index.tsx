import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/btn-link.module.scss';

export type Mods = { size: 's' | 'm'; theme: 'green' | 'gray'; shape?: 'oval' };

const mods = {
  size: {
    target: 'btn-link',
    value: {
      s: 'btn-link_size_s',
      m: 'btn-link_size_m',
    },
  },
  theme: {
    target: 'btn-link',
    value: {
      green: 'btn-link_theme_green',
      gray: 'btn-link_theme_gray',
    },
  },
  shape: {
    target: 'btn-link',
    value: {
      oval: 'btn-link_shape_oval',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  return mergeMods(styles, mods, chosenMods);
}

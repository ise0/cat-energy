import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/text-input.module.scss';

export type Mods = { size: 's' | 'm'; icon?: 'mail' | 'phone'; required?: boolean };

const mods = {
  size: {
    target: 'text-input',
    value: {
      s: 'text-input_size_s',
      m: 'text-input_size_m',
    },
  },
  icon: {
    target: 'text-input',
    value: {
      mail: 'text-input_icon_mail',
      phone: 'text-input_icon_phone',
    },
  },
  required: {
    target: 'text-input',
    value: 'text-input_required',
  },
};

export function getStyles(chosenMods: Mods) {
  return mergeMods(styles, mods, chosenMods);
}

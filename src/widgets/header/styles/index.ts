import { mergeMods } from 'shared/lib/merge-mods';
import styles from './scss/header.module.scss';

type ExtraMods = { logoSize: 's' | 'm' | 'l' };

export type Mods = { size: 's' | 'm' | 'l'; theme?: 'white' };

const mods = {
  size: {
    target: 'header',
    value: {
      s: 'header_size_s',
      m: 'header_size_m',
      l: 'header_size_l',
    },
  },
  theme: {
    target: 'header__nav-item',
    value: {
      white: 'header__nav-item_theme_white',
    },
  },
};

type Styles = {
  styles: Record<string, string>;
  extraMods: ExtraMods;
};

export function getStyles(chosenMods: Mods): Styles {
  let extraMods: ExtraMods = { logoSize: 's' };
  if (chosenMods.size === 'm') extraMods = { logoSize: 'm' };
  if (chosenMods.size === 'l') extraMods = { logoSize: 'l' };

  return {
    styles: mergeMods({ ...styles }, mods, chosenMods),
    extraMods,
  };
}

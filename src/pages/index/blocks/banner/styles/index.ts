import styles from './scss/banner.module.scss';
import { BtnLink } from 'shared/ui/btn-link';
import { mergeMods } from 'shared/lib/merge-mods';

type BlockModifiers = {
  ['banner__link']: Pick<Parameters<typeof BtnLink>[0], 'size'>;
};

export type Mods = { size: 's' | 'm' | 'l' };

const mods = {
  size: {
    target: 'banner',
    value: {
      s: 'banner_size_s',
      m: 'banner_size_m',
      l: 'banner_size_l',
    },
  },
};

export function getStyles(chosenMods: Mods) {
  let blockModifiers: BlockModifiers = { banner__link: { size: 's' } };
  if (chosenMods.size === 'm') blockModifiers = { banner__link: { size: 'm' } };

  return {
    styles: mergeMods(styles, mods, chosenMods),
    blockModifiers,
  };
}

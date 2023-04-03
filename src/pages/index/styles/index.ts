import styles from './scss/index-page.module.scss';
import { Banner } from '../blocks/banner';
import { Objectives } from '../blocks/objectives';
import { Features } from '../blocks/features';
import { Achivements } from '../blocks/achivements';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { Partnership } from 'widgets/partnership';
import { mergeMods } from 'shared/lib/merge-mods';

type BlockModifiers = {
  ['index-page__header']: Pick<Parameters<typeof Header>[0], 'size' | 'theme'>;
  ['index-page__banner']: Pick<Parameters<typeof Banner>[0], 'size'>;
  ['index-page__objectives']: Pick<Parameters<typeof Objectives>[0], 'size'>;
  ['index-page__features']: Pick<Parameters<typeof Features>[0], 'size'>;
  ['index-page__achivements']: Pick<Parameters<typeof Achivements>[0], 'size'>;
  ['index-page__partnership']: Pick<Parameters<typeof Partnership>[0], 'size'>;
  ['index-page__footer']: Pick<Parameters<typeof Footer>[0], 'size'>;
};

type Mods = { size: 's' | 'm' | 'l' };

const mods = {
  size: {
    target: 'index-page',
    value: {
      s: 'index-page_size_s',
      m: 'index-page_size_m',
      l: 'index-page_size_l',
    },
  },
};

export function getStyles({ windowWidth }: { windowWidth: number }) {
  let blockModifiers: BlockModifiers;
  let selfModifiers: Mods;

  if (windowWidth < 768) {
    selfModifiers = { size: 's' };
    blockModifiers = {
      'index-page__achivements': { size: 's' },
      'index-page__banner': { size: 's' },
      'index-page__features': { size: 's' },
      'index-page__footer': { size: 's' },
      'index-page__header': { size: 's' },
      'index-page__objectives': { size: 's' },
      'index-page__partnership': { size: 's' },
    };
  } else if (windowWidth < 1280) {
    selfModifiers = { size: 'm' };
    blockModifiers = {
      'index-page__achivements': { size: 'm' },
      'index-page__banner': { size: 'm' },
      'index-page__features': { size: 'm' },
      'index-page__footer': { size: 'm' },
      'index-page__header': { size: 'm' },
      'index-page__objectives': { size: 'm' },
      'index-page__partnership': { size: 'm' },
    };
  } else {
    selfModifiers = { size: 'l' };
    blockModifiers = {
      'index-page__achivements': { size: 'l' },
      'index-page__banner': { size: 'l' },
      'index-page__features': { size: 'm' },
      'index-page__footer': { size: 'm' },
      'index-page__header': { size: 'l', theme: 'white' },
      'index-page__objectives': { size: 'l' },
      'index-page__partnership': { size: 'l' },
    };
  }

  return {
    styles: mergeMods(styles, mods, selfModifiers),
    blockModifiers,
  };
}

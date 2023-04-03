import styles from './scss/catalog-page.module.scss';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { Partnership } from 'widgets/partnership';
import { Catalog } from '../blocks/catalog';
import { ExtraCatalog } from '../blocks/extra-catalog';
import { mergeMods } from 'shared/lib/merge-mods';

export type BlockModifiers = {
  ['catalog-page__header']: Pick<Parameters<typeof Header>[0], 'size'>;
  ['catalog-page__catalog']: Pick<Parameters<typeof Catalog>[0], 'size'>;
  ['catalog-page__extra-catalog']: Pick<Parameters<typeof ExtraCatalog>[0], 'size'>;
  ['catalog-page__partnership']: Pick<Parameters<typeof Partnership>[0], 'size'>;
  ['catalog-page__footer']: Pick<Parameters<typeof Footer>[0], 'size'>;
};

type Mods = { size: 's' | 'm' | 'l' };

const mods = {
  size: {
    target: 'catalog-page',
    value: {
      s: 'catalog-page_size_s',
      m: 'catalog-page_size_m',
      l: 'catalog-page_size_l',
    },
  },
};

export function getStyles({ windowWidth }: { windowWidth: number }) {
  let blockModifiers: BlockModifiers;
  let selfModifiers: Mods;

  if (windowWidth < 768) {
    selfModifiers = { size: 's' };
    blockModifiers = {
      'catalog-page__header': { size: 's' },
      'catalog-page__catalog': { size: 's' },
      'catalog-page__extra-catalog': { size: 's' },
      'catalog-page__footer': { size: 's' },
      'catalog-page__partnership': { size: 's' },
    };
  } else if (windowWidth < 1280) {
    selfModifiers = { size: 'm' };
    blockModifiers = {
      'catalog-page__header': { size: 'm' },
      'catalog-page__catalog': { size: 'm' },
      'catalog-page__extra-catalog': { size: 'm' },
      'catalog-page__footer': { size: 'm' },
      'catalog-page__partnership': { size: 'm' },
    };
  } else {
    selfModifiers = { size: 'l' };
    blockModifiers = {
      'catalog-page__header': { size: 'l' },
      'catalog-page__catalog': { size: 'l' },
      'catalog-page__extra-catalog': { size: 'l' },
      'catalog-page__footer': { size: 'm' },
      'catalog-page__partnership': { size: 'l' },
    };
  }

  return {
    styles: mergeMods(styles, mods, selfModifiers),
    blockModifiers,
  };
}

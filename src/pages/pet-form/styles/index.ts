import styles from './scss/pet-form-page.module.scss';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { Partnership } from 'widgets/partnership';
import { PetForm } from '../blocks/pet-form';
import { mergeMods } from 'shared/lib/merge-mods';

export type TBlockModifiers = {
  ['pet-form-page__header']: Pick<Parameters<typeof Header>[0], 'size'>;
  ['pet-form-page__form']: Pick<Parameters<typeof PetForm>[0], 'size'>;
  ['pet-form-page__partnership']: Pick<Parameters<typeof Partnership>[0], 'size'>;
  ['pet-form-page__footer']: Pick<Parameters<typeof Footer>[0], 'size'>;
};

type TSimpleStyleModifiers = { size: 's' | 'm' | 'l' };

const mods = {
  size: {
    target: 'pet-form-page',
    value: {
      s: 'pet-form-page_size_s',
      m: 'pet-form-page_size_m',
      l: 'pet-form-page_size_l',
    },
  },
};

export function getStyles({ windowWidth }: { windowWidth: number }) {
  let blockModifiers: TBlockModifiers;
  let selfModifiers: TSimpleStyleModifiers;
  if (windowWidth < 768) {
    selfModifiers = { size: 's' };
    blockModifiers = {
      'pet-form-page__header': { size: 's' },
      'pet-form-page__form': { size: 's' },
      'pet-form-page__footer': { size: 's' },
      'pet-form-page__partnership': { size: 's' },
    };
  } else if (windowWidth < 1280) {
    selfModifiers = { size: 'm' };
    blockModifiers = {
      'pet-form-page__header': { size: 'm' },
      'pet-form-page__form': { size: 'm' },
      'pet-form-page__footer': { size: 'm' },
      'pet-form-page__partnership': { size: 'm' },
    };
  } else {
    selfModifiers = { size: 'l' };
    blockModifiers = {
      'pet-form-page__header': { size: 'l' },
      'pet-form-page__form': { size: 'l' },
      'pet-form-page__footer': { size: 'm' },
      'pet-form-page__partnership': { size: 'l' },
    };
  }

  return {
    styles: mergeMods(styles, mods, selfModifiers),
    blockModifiers,
  };
}

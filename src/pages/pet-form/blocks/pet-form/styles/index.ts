import { mergeStylesWithModifiers } from 'shared/lib/modifiers';
import styles from './scss/pet-form.module.scss';
import { BtnLink } from 'shared/ui/btn-link';
import { FlagBox, FlagRadio } from 'shared/ui/flag';
import { TextArea } from 'shared/ui/text-area';
import { Input } from 'shared/ui/input';

type TBlockModifiers = {
  TextInputGroup: Pick<Parameters<typeof Input>[0], 'size'>;
  contactsMail: Pick<Parameters<typeof Input>[0], 'size'>;
  contactsPhone: Pick<Parameters<typeof Input>[0], 'size'>;
  ['goals__item']: Pick<Parameters<typeof FlagRadio>[0], 'size'>;
  ['pet-form__extra-products-item']: Pick<Parameters<typeof FlagBox>[0], 'size'>;
  ['pet-form__comment']: Pick<Parameters<typeof TextArea>[0], 'size'>;
  ['pet-form__submit-btn']: Pick<Parameters<typeof BtnLink>[0], 'size'>;
};

export type Mods = { size: 's' | 'm' | 'l' };

const modifiers = {
  size: {
    targetClass: 'pet-form',
    value: {
      s: 'pet-form_size_s',
      m: 'pet-form_size_m',
      l: 'pet-form_size_l',
    },
  },
};

export function getStyles(chosenModifiers: Mods) {
  let blockModifiers: TBlockModifiers;

  switch (chosenModifiers.size) {
    case 's':
      blockModifiers = {
        TextInputGroup: { size: 's' },
        contactsMail: { size: 's' },
        contactsPhone: { size: 's' },
        goals__item: { size: 's' },
        'pet-form__comment': { size: 's' },
        'pet-form__extra-products-item': { size: 's' },
        'pet-form__submit-btn': { size: 's' },
      };
      break;
    default:
      blockModifiers = {
        TextInputGroup: { size: 'm' },
        contactsMail: { size: 'm' },
        contactsPhone: { size: 'm' },
        goals__item: { size: 'm' },
        'pet-form__comment': { size: 'm' },
        'pet-form__extra-products-item': { size: 'm' },
        'pet-form__submit-btn': { size: 'm' },
      };
      break;
  }

  return {
    styles: mergeStylesWithModifiers(styles, modifiers, chosenModifiers),
    blockModifiers,
  };
}

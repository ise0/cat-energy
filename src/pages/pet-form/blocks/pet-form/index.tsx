import { BtnLink } from 'shared/ui/btn-link';
import cn from 'classnames';
import { Input } from 'shared/ui/input';
import { TextArea } from 'shared/ui/text-area';
import { useState } from 'react';
import { FlagBox, FlagRadio } from 'shared/ui/flag';
import { getStyles, Mods } from './styles';

type Props = { className?: string } & Mods;

const purposeInputs = [
  { id: 1, label: 'Похудение' },
  { id: 2, label: 'Набор массы' },
  { id: 3, label: 'Не знаю (нужен ваш совет)' },
];
const petDataInputs = [
  { id: 1, label: 'Имя', placeholder: 'Барсик', required: true },
  { id: 2, label: 'Вес (кг)', placeholder: '7', required: true },
  { id: 3, label: 'Возраст (лет)', placeholder: '7', required: false },
];
const extraProductInputs = [
  { id: 1, label: 'Cахарозаменитель' },
  { id: 2, label: 'Питьевая вода' },
  { id: 3, label: 'Молоко' },
  { id: 4, label: 'Витамины' },
];

export function PetForm({ className, size }: Props) {
  const [goal, setGoal] = useState(1);
  const [products, setProducts] = useState<Record<number, boolean>>({});

  const { styles, blockModifiers } = getStyles({ size });

  return (
    <section className={cn(styles['pet-form'], className)}>
      <h2 className={styles['pet-form__title']}>Подбор программы</h2>
      <p className={styles['pet-form__text']}>
        Заполните анкету, и мы подберем программу питания для вашего кота
      </p>
      <div className={styles['pet-form__container-1']}>
        <div className={styles['pet-form__pet-data']}>
          {petDataInputs.map((elem) => (
            <Input
              key={elem.id}
              className={styles['pet-form__pet-data-item']}
              label={elem.label}
              placeholder={elem.placeholder}
              {...{
                ...blockModifiers.TextInputGroup,
                required: elem.required,
              }}
            />
          ))}
        </div>
        <div className={styles['pet-form__goals']}>
          {purposeInputs.map((elem) => (
            <FlagRadio
              key={elem.id}
              className={styles['pet-form__goals-item']}
              label={elem.label}
              type="radio"
              checked={goal === elem.id}
              name="goal"
              onChange={() => setGoal(elem.id)}
              {...blockModifiers.goals__item}
            />
          ))}
        </div>
      </div>
      <h3 className={styles['pet-form__contacts-title']}>
        <span className={styles['pet-form__contacts-title-text']}>
          Контактные данные (владельца кота)
        </span>
      </h3>
      <div className={styles['pet-form__contacts']}>
        <Input
          className={styles['pet-form__contacts-item']}
          label="E-mail"
          placeholder="kuklachev@gmail.com"
          icon="mail"
          required
          {...blockModifiers.contactsMail}
        />
        <Input
          className={styles['pet-form__contacts-item']}
          label="Телефон"
          placeholder="8 (960) 900-60-90"
          icon="phone"
          required
          {...blockModifiers.contactsPhone}
        />
      </div>
      <h3 className={styles['pet-form__comment-title']}>
        <span className={styles['pet-form__comment-title-text']}>Комментарий</span>
      </h3>
      <TextArea
        className={styles['pet-form__comment']}
        label="Расскажите обо всех повадках кота"
        placeholder="Расскажите обо всех повадках кота"
        {...blockModifiers['pet-form__comment']}
      />
      <h3 className={styles['pet-form__extra-title']}>
        <span className={styles['pet-form__extra-title-text']}>Дополнительно</span>
      </h3>
      <div className={styles['pet-form__extra-products']}>
        {extraProductInputs.map((elem) => (
          <FlagBox
            key={elem.id}
            type="checkbox"
            className={styles['pet-form__extra-products-item']}
            label={elem.label}
            name="products"
            checked={Boolean(products[elem.id])}
            onChange={() => setProducts({ ...products, ...{ [elem.id]: !products[elem.id] } })}
            {...blockModifiers['pet-form__extra-products-item']}
          />
        ))}
      </div>
      <div className={styles['pet-form__container-2']}>
        <BtnLink
          className={styles['pet-form__submit-btn']}
          {...blockModifiers['pet-form__submit-btn']}
          text="Отправить заявку"
          type="button"
          theme="green"
        />

        <p className={styles['pet-form__postscript']}>* — Обязательные поля</p>
      </div>
    </section>
  );
}

export default PetForm;

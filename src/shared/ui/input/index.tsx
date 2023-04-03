import cn from 'classnames';
import { getStyles, Mods } from './styles';

type Props = {
  className?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
} & Mods;

export function Input({
  className,
  label,
  name,
  placeholder = '',
  value,
  onChange = () => {},
  onBlur,
  ...mods
}: Props) {
  const styles = getStyles(mods);
  return (
    <label className={cn(styles['text-input'], className)}>
      {label && (
        <span className={styles['text-input__label']}>
          {label}:{mods.required ? '*' : ''}
        </span>
      )}
      <input
        className={styles['text-input__input']}
        value={value}
        type="input"
        name={name}
        placeholder={placeholder}
        onChange={(input) => onChange(input.target.value)}
        onBlur={onBlur}
      />
    </label>
  );
}

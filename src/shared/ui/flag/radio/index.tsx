import cn from 'classnames';
import { useRef, useState } from 'react';
import { usePressState } from 'shared/lib/hooks';
import { getStyles, Mods } from './styles';

type Props = {
  className?: string;
  type?: 'checkbox' | 'radio';
  checked: boolean;
  label: string;
  name?: string;
  onChange?: () => void;
} & Mods;

export function FlagRadio({ className, checked, label, name, type, onChange, size }: Props) {
  const labelRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isPressed = usePressState(labelRef, ' ');
  const [isFocused, setIsFocused] = useState(false);

  const styles = getStyles({ size });
  return (
    <label
      className={cn(
        className,
        styles['check-btn'],
        isHovered && styles['check-btn_is-hovered'],
        isPressed && styles['check-btn_is-pressed'],
        checked && styles['check-btn_is-checked'],
        isFocused && styles['check-btn_is-focused']
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={labelRef}
    >
      <span className={styles['check-btn__ctrl']}>
        <input
          className={styles['check-btn__input']}
          type={type}
          name={name}
          checked={checked}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </span>
      <span className={styles['check-btn__label']}>{label}</span>
    </label>
  );
}

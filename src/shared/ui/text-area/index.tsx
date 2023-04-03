import cn from 'classnames';
import { getStyles, Mods } from './styles';

type Props = {
  className?: string;
  label: string;
  placeholder?: string;
} & Mods;

export function TextArea({ className, label, placeholder = '', size }: Props) {
  const styles = getStyles({ size });
  return (
    <textarea
      className={cn(styles['text-area'], className)}
      placeholder={placeholder}
      aria-label={label}
    />
  );
}

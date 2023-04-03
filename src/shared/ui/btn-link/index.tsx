import cn from 'classnames';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { usePressState } from 'shared/lib/hooks';
import { getStyles, Mods } from './styles';

type BtnProps = {
  type: 'button' | 'submit' | 'reset';
};

type LinkProps = {
  href: string;
  type: 'link';
};

type Props = {
  className?: string;
  text: string;
  checked?: boolean;
  onClick?: () => void;
} & Mods &
  (BtnProps | LinkProps);

export function BtnLink(props: Props) {
  const { className, text, checked, size, theme, shape, onClick, type } = props;
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isPressed = usePressState(ref, type === 'link' ? 'Enter' : ' ');

  const styles = getStyles({ size, theme, shape });

  return type === 'link' ? (
    <Link href={props.href}>
      <a
        className={cn(
          className,
          styles['btn-link'],
          isHovered && styles['btn-link_is-hovered'],
          isPressed && styles['btn-link_is-pressed'],
          checked && styles['btn-link_is-checked']
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={ref}
        onClick={onClick}
      >
        <span className={styles['btn-link__text']}>{text}</span>
      </a>
    </Link>
  ) : (
    <button
      className={cn(
        className,
        styles['btn-link'],
        isHovered && styles['btn-link_is-hovered'],
        isPressed && styles['btn-link_is-pressed'],
        checked && styles['btn-link_is-checked']
      )}
      type={type}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
      onClick={onClick}
    >
      <span className={styles['btn-link__text']}>{text}</span>
    </button>
  );
}

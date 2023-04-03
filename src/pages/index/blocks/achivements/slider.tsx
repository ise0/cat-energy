import { useEffect, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

type TSlider = (props: { styles: Record<string, string> }) => JSX.Element;

const Slider: TSlider = ({ styles }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [wrapperElem, setWrapperElem] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperElem === null) return;
    const ro = new ResizeObserver(() => setWrapperWidth(wrapperElem.clientWidth));
    ro.observe(wrapperElem);
    return () => {
      ro.disconnect();
    };
  }, [wrapperElem]);

  return (
    <div className={cn(styles['achivements__slider'], styles['slider'])}>
      <div className={styles['slider__images-wrapper']} ref={(el) => setWrapperElem(el)}>
        <div className={styles['slider__img-before']} style={{ width: `${sliderValue}%` }}>
          <div
            className={styles['slider__img']}
            style={{ position: 'relative', width: `${wrapperWidth}px`, height: '100%' }}
          >
            <Image src="/images/before-desktop@2x.png" alt="" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className={styles['slider__img-after']} style={{ width: `${100 - sliderValue}%` }}>
          <div
            className={styles['slider__img']}
            style={{
              position: 'relative',
              width: `${wrapperWidth}px`,
              height: '100%',
              float: 'right',
            }}
          >
            <Image
              className={styles['slider__img']}
              src="/images/after-desktop@2x.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div className={styles['slider__input-wrapper']}>
        <span className={styles['slider__text']}>Было</span>
        <input
          className={styles['slider__input']}
          type="range"
          min={0}
          max={100}
          value={sliderValue}
          onChange={(evt) => setSliderValue(+evt.target.value)}
        />
        <span className={styles['slider__text']}>Стало</span>
      </div>
    </div>
  );
};

export default Slider;

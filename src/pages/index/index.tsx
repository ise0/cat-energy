import { Banner } from './blocks/banner';
import { Objectives } from './blocks/objectives';
import { Features } from './blocks/features';
import { Achivements } from './blocks/achivements';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { Partnership } from 'widgets/partnership';
import { getStyles } from './styles';
import cn from 'classnames';
import { useLayoutEffect, useState } from 'react';

const IndexPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    const onWindowResize = () => setWindowWidth(window.innerWidth);
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  const { styles, blockModifiers } = getStyles({ windowWidth });

  return (
    <div className={cn(styles['index-page'])}>
      <Header className={styles['index-page__header']} {...blockModifiers['index-page__header']} />
      <Banner className={styles['index-page__banner']} {...blockModifiers['index-page__banner']} />
      <Objectives
        className={styles['index-page__objectives']}
        {...blockModifiers['index-page__objectives']}
      />
      <Features
        className={styles['index-page__features']}
        {...blockModifiers['index-page__features']}
      />
      <div className={styles['index-page__achivements-wrapper']}>
        <Achivements
          className={styles['index-page__achivements']}
          {...blockModifiers['index-page__achivements']}
        />
      </div>
      <Partnership
        className={styles['index-page__partnership']}
        {...blockModifiers['index-page__partnership']}
      />
      <div className={styles['index-page__footer-wrapper']}>
        <Footer
          className={styles['index-page__footer']}
          {...blockModifiers['index-page__footer']}
        />
      </div>
    </div>
  );
};

export default IndexPage;

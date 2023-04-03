import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { Partnership } from 'widgets/partnership';
import { useEffect, useState } from 'react';
import { getStyles } from './styles';
import { Catalog } from './blocks/catalog';
import { ExtraCatalog } from './blocks/extra-catalog';

const CatalogPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const onWindowResize = () => setWindowWidth(window.innerWidth);
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  const { styles, blockModifiers } = getStyles({ windowWidth });

  return (
    <div className={styles['catalog-page']}>
      <Header
        className={styles['catalog-page__header']}
        {...blockModifiers['catalog-page__header']}
      />
      <Catalog
        className={styles['catalog-page__catalog']}
        {...blockModifiers['catalog-page__catalog']}
      />
      <ExtraCatalog
        className={styles['catalog-page__extra-catalog']}
        {...blockModifiers['catalog-page__extra-catalog']}
      />
      <Partnership
        className={styles['catalog-page__partnership']}
        {...blockModifiers['catalog-page__partnership']}
      />
      <div className={styles['catalog-page__footer-wrapper']}>
        <Footer
          className={styles['catalog-page__footer']}
          {...blockModifiers['catalog-page__footer']}
        />
      </div>
    </div>
  );
};

export default CatalogPage;

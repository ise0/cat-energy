import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { Partnership } from 'widgets/partnership';
import { getStyles } from './styles';
import { useEffect, useState } from 'react';
import { PetForm } from './blocks/pet-form';

const PetFormPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const onWindowResize = () => setWindowWidth(window.innerWidth);
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  const { styles, blockModifiers } = getStyles({ windowWidth });

  return (
    <div className={styles['pet-form-page']}>
      <Header
        className={styles['pet-form-page__header']}
        {...blockModifiers['pet-form-page__header']}
      />
      <PetForm
        className={styles['pet-form-page__form']}
        {...blockModifiers['pet-form-page__form']}
      />
      <Partnership
        className={styles['pet-form-page__partnership']}
        {...blockModifiers['pet-form-page__partnership']}
      />
      <div className={styles['pet-form-page__footer-wrapper']}>
        <Footer
          className={styles['pet-form-page__footer']}
          {...blockModifiers['pet-form-page__footer']}
        />
      </div>
    </div>
  );
};

export default PetFormPage;

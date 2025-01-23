import styles from './parallex.module.css'

const ParallaxComponent = () => {
  return (
    <>
      <section className={styles['parallax-container']}>
        <h1>Cerro Torre</h1>
      </section>

      <section className={`${styles['parallax-container']} ${styles['parallax-container2']}`}>

      </section>
      <section className={`${styles['parallax-container']}  ${styles['parallax-container3']}`}>

      </section>

    </>
  );
};

export default ParallaxComponent;
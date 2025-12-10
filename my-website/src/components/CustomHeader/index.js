import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function CustomHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Read the Book - 5min ⏱️
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="#chapters">
                Explore Chapters
              </Link>
            </div>
          </div>
          <div className={styles.headerImage}>
            <img
              src="img/robot_ai.png"
              alt="Physical AI Book"
              className={styles.bookImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default CustomHeader;
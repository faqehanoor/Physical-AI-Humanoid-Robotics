import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function FlipCard({ title, description, image, link }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={clsx(styles.flipCard, { [styles.flipped]: isFlipped })}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img src={image} alt={title} className={styles.flipCardImage} />
          <h3 className={styles.flipCardTitle}>{title}</h3>
        </div>
        <div className={styles.flipCardBack}>
          <p className={styles.flipCardDescription}>{description}</p>
          <Link className="button button--secondary button--sm" to={link}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
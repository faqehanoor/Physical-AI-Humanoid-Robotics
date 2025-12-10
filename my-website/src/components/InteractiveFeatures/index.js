import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function InteractiveFeatures() {
  const [activeTab, setActiveTab] = useState('ai');
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const features = {
    ai: {
      title: "AI Concepts",
      description: "Explore the fundamental concepts of Physical AI and how they apply to real-world robotics.",
      color: "#1e3c72"
    },
    robotics: {
      title: "Robotics",
      description: "Dive deep into the mechanics of humanoid robotics and advanced control systems.",
      color: "#2a5298"
    },
    future: {
      title: "Future Tech",
      description: "Discover emerging technologies and their potential impact on Physical AI development.",
      color: "#3a6ec5"
    }
  };

  return (
    <section className={styles.interactiveSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Interactive Learning Experience</h2>
        <p className={styles.sectionSubtitle}>Explore different aspects of Physical AI through our interactive modules</p>

        <div className={styles.featureTabs}>
          {Object.keys(features).map((key) => (
            <button
              key={key}
              className={clsx(styles.tabButton, {
                [styles.activeTab]: activeTab === key
              })}
              onClick={() => setActiveTab(key)}
              style={{
                backgroundColor: activeTab === key ? features[key].color : 'transparent',
                color: activeTab === key ? 'white' : features[key].color,
                borderColor: features[key].color
              }}
            >
              {features[key].title}
            </button>
          ))}
        </div>

        <div className={styles.contentArea}>
          <div className={styles.contentText}>
            <h3>{features[activeTab].title}</h3>
            <p>{features[activeTab].description}</p>
            <Link
              className="button button--primary"
              to={`/docs/category/${activeTab}`}>
              Learn More
            </Link>
          </div>

          <div className={styles.rotatingImage}>
            <div
              className={styles.rotatingElement}
              style={{
                transform: `rotate(${rotation}deg)`,
                borderColor: features[activeTab].color
              }}
            >
              <div className={styles.rotationContent}>
                <span>🤖</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <h3>100+</h3>
            <p>Concepts Explained</p>
          </div>
          <div className={styles.statItem}>
            <h3>50+</h3>
            <p>Practical Examples</p>
          </div>
          <div className={styles.statItem}>
            <h3>20+</h3>
            <p>Interactive Modules</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveFeatures;
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import CustomHeader from '@site/src/components/CustomHeader';
import InteractiveFeatures from '@site/src/components/InteractiveFeatures';
import FlipCard from '@site/src/components/FlipCard';
import styles from './index.module.css';

// Book Showcase Component
function BookShowcase() {
  const books = [
    {
      title: "Chapter 1: Introduction to Physical AI",
      description: "Discover the fundamentals of Physical AI and how it bridges the gap between artificial intelligence and real-world physical systems.",
      image: "https://placehold.co/400x250/1e3c72/ffffff?text=Chapter+1"
    },
    {
      title: "Chapter 2: Humanoid Robotics",
      description: "Explore the design and control of humanoid robots, their applications, and the challenges in creating human-like machines.",
      image: "https://placehold.co/400x250/2a5298/ffffff?text=Chapter+2"
    },
    {
      title: "Chapter 3: Sensor Integration",
      description: "Learn about various sensors used in physical AI systems and how they enable robots to perceive and interact with their environment.",
      image: "https://placehold.co/400x250/1e3c72/ffffff?text=Chapter+3"
    },
    {
      title: "Chapter 4: Motion Planning",
      description: "Understand the algorithms and techniques used for planning robot movements in complex environments.",
      image: "https://placehold.co/400x250/2a5298/ffffff?text=Chapter+4"
    },
    {
      title: "Chapter 5: Machine Learning in Robotics",
      description: "Discover how machine learning algorithms enable robots to learn from experience and adapt to new situations.",
      image: "https://placehold.co/400x250/1e3c72/ffffff?text=Chapter+5"
    },
    {
      title: "Chapter 6: Human-Robot Interaction",
      description: "Explore the principles of effective communication between humans and robots in collaborative environments.",
      image: "https://placehold.co/400x250/2a5298/ffffff?text=Chapter+6"
    }
  ];

  return (
    <section className={styles.bookShowcase} id="chapters">
      <div className={styles.mainContainer}>
        <Heading as="h2" className={clsx('text--center', 'margin-bottom--lg')}>
          Book Chapters
        </Heading>
        <p className={clsx('text--center', 'margin-bottom--xl')}>
          Explore the comprehensive guide to Physical AI and Humanoid Robotics
        </p>

        <div className={styles.bookShowcaseGrid}>
          {books.map((book, index) => (
            <FlipCard
              key={index}
              title={book.title.split(':')[1]?.trim() || book.title}
              description={book.description}
              image={book.image}
              link="/docs/intro"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials() {
  const testimonials = [
    {
      text: "This book provides an excellent foundation for understanding the intersection of AI and robotics. The concepts are explained clearly with practical examples.",
      author: "Dr. Sarah Johnson, Robotics Researcher"
    },
    {
      text: "A comprehensive guide that bridges the gap between theoretical AI concepts and practical implementation in physical systems. Highly recommended for researchers.",
      author: "Prof. Michael Chen, AI Professor"
    },
    {
      text: "The best resource I've found for understanding how AI can be applied to real-world physical problems. The humanoid robotics section is particularly insightful.",
      author: "Alex Rodriguez, AI Engineer"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.mainContainer}>
        <Heading as="h2" className={clsx('text--center', 'margin-bottom--lg', 'text--white')}>
          What Readers Say
        </Heading>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <p className={styles.testimonialAuthor}>{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.mainContainer}>
        <Heading as="h2" className="margin-bottom--lg">
          Ready to Dive into Physical AI?
        </Heading>
        <p className="margin-bottom--lg">
          Start your journey into the fascinating world of Physical AI and Humanoid Robotics today.
        </p>
        <Link
          className={styles.ctaButton}
          to="/docs/intro">
          Begin Reading Now
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Understanding and Implementing Physical AI Concepts">
      <CustomHeader />
      <main>
        <InteractiveFeatures />
        <HomepageFeatures />
        <BookShowcase />
        <Testimonials />
        <CTASection />
      </main>
    </Layout>
  );
}

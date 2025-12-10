// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Manual sidebar structure for Physical AI Book
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
      link: {
        type: 'doc',
        id: 'intro',
      },
    },
    {
      type: 'category',
      label: 'Chapter 1: Physical AI Fundamentals',
      items: [
        'chapter-1/lesson-1',
        'chapter-1/lesson-2',
        'chapter-1/lesson-3',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'chapter-1/solutions/lesson-1-solutions',
            'chapter-1/solutions/lesson-2-solutions',
            'chapter-1/solutions/lesson-3-solutions'
          ],
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Chapter 1: Physical AI Fundamentals',
        description: 'Learn the fundamentals of Physical AI with hands-on examples',
        slug: '/chapter-1',
      },
    },
    {
      type: 'category',
      label: 'Chapter 2: Sensor Integration and Perception',
      items: [
        'chapter-2/lesson-1',
        'chapter-2/lesson-2',
        'chapter-2/lesson-3',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'chapter-2/solutions/lesson-1-solutions',
            'chapter-2/solutions/lesson-2-solutions',
            'chapter-2/solutions/lesson-3-solutions'
          ],
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Chapter 2: Sensor Integration and Perception',
        description: 'Learn about sensor systems and perception in Physical AI',
        slug: '/chapter-2',
      },
    },
    {
      type: 'category',
      label: 'Chapter 3: Control Systems and Actuation',
      items: [
        'chapter-3/lesson-1',
        'chapter-3/lesson-2',
        'chapter-3/lesson-3',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'chapter-3/solutions/lesson-1-solutions',
            'chapter-3/solutions/lesson-2-solutions',
            'chapter-3/solutions/lesson-3-solutions'
          ],
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Chapter 3: Control Systems and Actuation',
        description: 'Explore control systems and actuation mechanisms',
        slug: '/chapter-3',
      },
    },
    {
      type: 'category',
      label: 'Chapter 4: Robot Kinematics and Dynamics',
      items: [
        'chapter-4/lesson-1',
        'chapter-4/lesson-2',
        'chapter-4/lesson-3',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'chapter-4/solutions/lesson-1-solutions',
            'chapter-4/solutions/lesson-2-solutions',
            'chapter-4/solutions/lesson-3-solutions'
          ],
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Chapter 4: Robot Kinematics and Dynamics',
        description: 'Understand robot movement and physical constraints',
        slug: '/chapter-4',
      },
    },
    {
      type: 'category',
      label: 'Chapter 5: Path Planning and Navigation',
      items: [
        'chapter-5/lesson-1',
        'chapter-5/lesson-2',
        'chapter-5/lesson-3',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'chapter-5/solutions/lesson-1-solutions',
            'chapter-5/solutions/lesson-2-solutions',
            'chapter-5/solutions/lesson-3-solutions'
          ],
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Chapter 5: Path Planning and Navigation',
        description: 'Learn algorithms for robot navigation and path planning',
        slug: '/chapter-5',
      },
    },
    {
      type: 'category',
      label: 'Chapter 6: Machine Learning for Physical Systems',
      items: [
        'chapter-6/lesson-1',
        'chapter-6/lesson-2',
        'chapter-6/lesson-3',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'chapter-6/solutions/lesson-1-solutions',
            'chapter-6/solutions/lesson-2-solutions',
            'chapter-6/solutions/lesson-3-solutions'
          ],
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Chapter 6: Machine Learning for Physical Systems',
        description: 'Apply machine learning to physical AI problems',
        slug: '/chapter-6',
      },
    },
    {
      type: 'category',
      label: 'Chapter 7: Human-Robot Interaction',
      items: [
        'chapter-7/lesson-1',
        'chapter-7/lesson-2',
        'chapter-7/lesson-3',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'chapter-7/solutions/lesson-1-solutions',
            'chapter-7/solutions/lesson-2-solutions',
            'chapter-7/solutions/lesson-3-solutions'
          ],
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Chapter 7: Human-Robot Interaction',
        description: 'Explore interfaces and interaction models between humans and robots',
        slug: '/chapter-7',
      },
    },
    {
      type: 'category',
      label: 'Chapter 8: Multi-Robot Systems',
      items: [
        'chapter-8/lesson-1',
        'chapter-8/lesson-2',
        'chapter-8/lesson-3',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'chapter-8/solutions/lesson-1-solutions',
            'chapter-8/solutions/lesson-2-solutions',
            'chapter-8/solutions/lesson-3-solutions'
          ],
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Chapter 8: Multi-Robot Systems',
        description: 'Coordinate multiple robots for complex tasks',
        slug: '/chapter-8',
      },
    },
    {
      type: 'category',
      label: 'Chapter 9: Ethics and Safety in Physical AI',
      items: [
        'chapter-9/lesson-1',
        'chapter-9/lesson-2',
        'chapter-9/lesson-3',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'chapter-9/solutions/lesson-1-solutions',
            'chapter-9/solutions/lesson-2-solutions',
            'chapter-9/solutions/lesson-3-solutions'
          ],
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Chapter 9: Ethics and Safety in Physical AI',
        description: 'Consider ethical implications and safety in Physical AI',
        slug: '/chapter-9',
      },
    },
    {
      type: 'category',
      label: 'Chapter 10: Future Directions and Applications',
      items: [
        'chapter-10/lesson-1',
        'chapter-10/lesson-2',
        'chapter-10/lesson-3',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'chapter-10/solutions/lesson-1-solutions',
            'chapter-10/solutions/lesson-2-solutions',
            'chapter-10/solutions/lesson-3-solutions'
          ],
        },
      ],
      link: {
        type: 'generated-index',
        title: 'Chapter 10: Future Directions and Applications',
        description: 'Explore emerging trends and future applications of Physical AI',
        slug: '/chapter-10',
      },
    },
  ],
};

export default sidebars;

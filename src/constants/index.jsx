export const navLinks=[
    {
        id:1,
        name:'Home',
        href:'#home',
    },
    {
        id:2,
        name:'About',
        href:'#about',
    },
    {
        id:3,
        name:'Work',
        href:'#work',
    },
    {
        id:4,
        name:'Contact',
        href:'#contact',
    }
];

export const myProjects = [
  {
    title: 'CompraPrice Website',
    desc: 'A web application integrating third-party APIs from Amazon and Flipkart via Rapid API to compare product prices, enhancing user experience and helping users find the most affordable options.',
    subdesc:
      'Refined API management strategies in React, Node.js, HTML, CSS, Bootstrap, and JavaScript increased data processing speed by 25%.',
    href: 'https://compra-price.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    // logo: '/assets/price.jpeg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: '/assets/nodejs.png' },
      { id: 3, name: 'JavaScript', path: '/assets/javascript.png' },
     { id: 4, name: 'Bootstrap', path: '/assets/bootstrap.svg' },
    ],
  },
  {
    title: 'Role-Based Authentication System',
    desc: 'Implemented a role-based user management system with Refine, React, Google Auth, and custom authentication to securely manage user permissions.',
    subdesc:
      'Integrated efficient PATCH API calls for role updates using TypeScript, React, Node.js, MongoDB, and Material-UI, improving update performance by 20%.',
    href: 'https://github.com/yshagit31/RBAC', 
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Node.js', path: '/assets/nodejs.png' },
      // { id: 1, name: 'Refine', path: '/assets/refine.png' },
      { id: 2, name: 'React.js', path: '/assets/react.svg' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'MongoDB', path: '/assets/mongodb.svg' },
    ],
  },
  {
    title: 'Nike Landing Page',
    desc: 'A responsive landing page showcasing premium Nike products, designed to boost user conversion and engagement.',
    subdesc:
    'Designed with modern web technologies to highlight Nike products through animated sections, hover effects, and a sleek, mobile-first interface.',
    href: 'https://nike-website-three-wine.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.ico',
    logoStyle: {
      backgroundColor: '#13202F',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'JavaScript', path: '/assets/javascript.png' },
      { id: 4, name: 'HTML', path: '/assets/html.png' },
    ],
  },
  {
    title: 'Personal Portfolio',
    desc: 'A sleek personal portfolio website showcasing projects and skills with smooth animations and 3D elements.',
    subdesc:
      'Built using React, Three.js, Tailwind CSS, and Framer Motion to deliver an interactive and visually engaging user experience.',
    href: '', // add link if any
    texture: '/textures/project/project4.mp4',
    // logo: '/assets/grid1.png',
    logo: '/assets/portfolio.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Three.js', path: '/assets/threejs.png' }, // add your icon if you want
      { id: 3, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
];


export const workExperiences = [
  {
    id: 1,
    name: 'Harman Connected Services',
    pos: 'Software Development Intern',
    duration: 'Mar 2025 – Present',
    title:
      'Gained hands-on experience with C# and ASP.NET Web Forms under dedicated mentorship. Completed 5+ backend modules and contributed to the development of the SmartEdu Admin Portal, a capstone project with 6+ interconnected modules enabling CRUD operations for users, classes, subjects, teachers, fees, and exams.',
    icon: '/assets/harman.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Grocliq',
    pos: 'Full Stack Developer Intern',
    duration: 'Jan 2025 – Feb 2025',
    title:
      'Implemented frontend white-labeling for 2 clients, customizing the product’s UI to match their branding requirements. Redesigned and revamped 4 major pages—including the Dashboard, Site Audit, Rank Tracker, and Technical Issues—using Next.js, Tailwind CSS, and Material UI. Built a new project listing flow and designed a dedicated Projects page, which contributed to a 5% increase in total clicks, 10% increase in impressions, and 8% boost in CTR. Developed a Chrome Extension for SEO analysis and implemented a real-time GPT-powered chat interface using Next.js, Redux, and MongoDB.',
    icon: '/assets/grocliq.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'First Contact',
    pos: 'Full Stack Web Development Intern',
    duration: 'Sep 2024 – Dec 2024',
    title:
      'Delivered 3 fully functional, high-fidelity user profile pages using Wix Velo within 10 days. Implemented a new signup flow with real-time validation for all fields—including name, password and WhatsApp number—using JavaScript and RegEx. This reduced the number of incomplete or unsubmitted forms on the dashboard by over 40%, significantly improving data completeness and user onboarding. Integrated the Google Sheets API securely via Wix Secrets Manager to automate backend updates and eliminate manual data entry.',
    icon: '/assets/fc.avif',
    animation: 'salute',
  },
];

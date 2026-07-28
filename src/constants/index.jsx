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
    href: 'https://shashank-tjsportfolio.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/portfolio.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Three.js', path: '/assets/threejs.png' },
      { id: 3, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
];


export const workExperiences = [
   {
    id: 1,
    name: 'BrowserStack',
    pos: 'Software Engineer – Frontend',
    duration: 'Aug 2025 – Present',
    title:
      'At BrowserStack, I work on an AI-powered software quality platform that simplifies debugging by helping developers understand why their tests fail. I contribute across the entire development lifecycle—from building intuitive React interfaces to implementing backend services with Java/Spring Boot, coordinating cross-service integrations, and expanding automated test coverage. During my time here, I have shipped 15 production features, delivered real-time user experiences, implemented secure feature gating, and helped improve the reliability and scalability of the platform.',
    icon: '/assets/Browserstack.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Harman Connected Services',
    pos: 'Software Development Intern',
    duration: 'Mar 2025 – July 2025',
    title:
      'Gained hands-on experience with C# and ASP.NET Web Forms under dedicated mentorship. Completed 5+ backend modules and contributed to the development of the SmartEdu Admin Portal, a capstone project with 6+ interconnected modules enabling CRUD operations for users, classes, subjects, teachers, fees, and exams.',
    icon: '/assets/harman.png',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Grocliq',
    pos: 'Full Stack Developer Intern',
    duration: 'Jan 2025 – Feb 2025',
    title:
     "Customized UI for 2 clients via frontend white-labeling. Revamped 4 major pages (Dashboard, Site Audit, Rank Tracker, Technical Issues) using Next.js, Tailwind CSS, and MUI. Built a new project listing flow and Projects page, increasing clicks by 5%, impressions by 10%, and CTR by 8%. Also developed a Chrome Extension and real-time GPT-powered chat using Next.js, Redux, and MongoDB.",
    icon: '/assets/grocliq.svg',
    animation: 'clapping',
  },
  {
    id: 4,
    name: 'First Contact',
    pos: 'Full Stack Web Development Intern',
    duration: 'Sep 2024 – Dec 2024',
    title:
      'Built 3 fully functional user profile pages using Wix Velo in 10 days. Developed a real-time validated signup flow using JavaScript and RegEx, reducing incomplete submissions by 40%. Integrated Google Sheets API securely with Wix Secrets Manager to automate backend updates and improve data accuracy.',
    icon: '/assets/fc.avif',
    animation: 'salute',
  },
];

export const skills = [
  { id: 1, name: 'React.js', icon: '/assets/react.svg' },
  { id: 2, name: 'Node.js', icon: '/assets/nodejs.png' },
  { id: 3, name: 'TypeScript', icon: '/assets/typescript.svg' }, 
  { id: 4, name: 'MongoDB', icon: '/assets/mongodb.svg' },
  { id: 5, name: 'JavaScript', icon: '/assets/javascript.png' },
  { id: 6, name: 'SQL', icon: '/assets/sql.png' },
  { id: 8, name: 'TailwindCSS', icon: '/assets/tailwindcss2.png' },
  { id: 9, name: 'Bootstrap', icon: '/assets/bootstrap.svg' },
  { id: 7, name: 'CPP', icon: '/assets/cpp.svg' },
];


export const SocialLinks=[
  {
    id:1,
    name:'GitHub',
    icon:'/assets/github.svg',
    href:'https://github.com/yshagit31',
    class:'w-1/2 h-1/2'
  },
    {
    id:2,
    name:'LinkedIn',
    icon:'/assets/linkedin.svg',
    href:'https://www.linkedin.com/in/shashank-yadav-870577259',
    class:'w-1/2 h-1/2'
  },
    {
    id:3,
    name:'Twitter',
    icon:'/assets/twitterwhite.svg',
    href:'https://twitter.com/Shashank255722',
    class:'w-2/5 h-2/5'
  },
    {
    id:4,
    name:'GitHub',
    icon:'/assets/instagram.svg',
    href:'https://www.instagram.com/wayfarerreflections/',
    class:'w-1/2 h-1/2'
  },
]

export const calculateSizes = (width = 1024, height = 768) => {
  if (width < 480) {
    return { deskScale: 6, cameraZ: 25 };
  } else if (width < 768) {
    return { deskScale: 5, cameraZ: 30 };
  } else if (width < 1024) {
    return { deskScale: 4.5, cameraZ: 35 };
  } else if (height < 500) { 
    return { deskScale: 3.2, cameraZ: 38 };
  } else {
    return { deskScale: 3.5, cameraZ: 38 };
  }
};

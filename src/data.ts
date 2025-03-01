import { Education, Experience, Project, Skill, Certification, SocialLink } from './types';

export const educationData: Education[] = [
  {
    institution: 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid',
    degree: 'B.Tech in Computer Science and Engineering',
    duration: '2023 - 2027',
    gpa: '9.73',
    details: 'GPA (Upto 3rd Sem)'
  },
  {
    institution: 'Pre University Course (PUC)',
    degree: 'Pre-University Education',
    duration: '2021 - 2023',
    gpa: '10.0'
  },
  {
    institution: 'Little Bud High School',
    degree: 'High School Education (Class 1 to 10)',
    duration: '2011 - 2021',
    details: 'Class 10 aggregate: 600/600'
  }
];

export const experienceData: Experience[] = [
  {
    company: 'Alumni Association of RGUKT Nuzvid',
    role: 'Full Stack Developer',
    duration: 'Jan 2025 - Present',
    description: [
      'Developed full-stack alumni website with gallery systems, events calendar, alumni directory with filters',
      'Implemented donation portal and sponsorship management using React.js and Node.js',
      'Collaborated on both frontend and backend repositories, enhancing user experience and functionality'
    ],
    highlight: true,
    image: '/Alumini.jpg'
  },
  {
    company: 'Smart India Hackathon 2024',
    role: 'Winner - First Prize',
    duration: 'Nov 2024 - Dec 2024',
    description: [
      'Led development of ML/AI-powered route optimization system for NCT Delhi (PSID 1617)',
      'Successfully implemented solution using Node.js, Kafka, and ML models, securing first place'
    ],
    highlight: true,
    image: '/Sih.jpg'
  },
  {
    company: 'Web Team - Technical Events',
    role: 'Full Stack Developer',
    duration: 'Jan 2025 - Present',
    description: [
      'Developed Admin Panel and Volunteer Management System for Teckzite 2025',
      'Implemented real-time analytics, role-based access control, and automated ID generation'
    ],
    highlight: true,
    image: '/Teckzite.jpg'
  }
];

export const projectsData: Project[] = [
  {
    title: 'RGUKT Alumni Association Portal',
    description: [
      'Built comprehensive alumni portal with interactive directory, event management, and donation systems',
      'Implemented filter-based alumni search to locate graduates by batch, department, and location',
      'Developed responsive event scheduler and reunion calendar with real-time updates'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://alumni-n4q7.vercel.app/',
    github: '#',
    image: '/Alumini.jpg',
    highlight: true
  },
  {
    title: 'FreshCart - Online Grocery Store',
    description: [
      'Served as Scrum Master leading development of comprehensive e-grocery platform with admin dashboard',
      'Implemented secure payment processing with Stripe integration and COD options',
      'Built admin dashboard with sales analytics and visualization using Chart.js'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Chart.js'],
    link: 'https://freshcart-wavv.onrender.com',
    github: 'https://github.com/LeelaPrasadGedela216/E-Grocery.git',
    image: '/FreshCart1.png',
    highlight: true
  },
  {
    title: 'Dynamic Route Rationalization System',
    description: [
      'Developed ML/AI-powered system for optimizing public transport routes using real-time data',
      'Implemented Kafka for real-time updates and ML-based delay predictions',
      'Integrated Firebase for notifications and MongoDB for data persistence'
    ],
    technologies: ['Node.js', 'Kafka', 'ML/AI', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Viswadatta1233/SIHBackend_ChasingHorizins.git',
    image: '/Dynamic.jpg',
    highlight: true
  },
  
  {
    title: 'Teckzite 2025 Management System',
    description: [
      'Developed full-stack Volunteer Management System with automated ID card generation',
      'Implemented role-based access control for Core Team, Volunteers, and Admins',
      'Built Admin Portal with user management, event tracking, and participant analytics'
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    link: 'https://vms20.vercel.app/',
    github: '#',
    image: '/Teckzite.jpg',
    highlight: true
  },
  {
    title: 'GVMC Waste Management System',
    description: [
      'Developed hybrid backend using Node.js and Flask with ML integration',
      'Implemented ReLU-based ML model for waste overflow prediction and real-time reporting system'
    ],
    technologies: ['Node.js', 'Flask', 'Python', 'ReLU', 'MongoDB'],
    github: 'https://github.com/Viswadatta1233/gvmc.git',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1470&auto=format&fit=crop'
  }
];

export const skillsData: Skill[] = [
  {
    category: 'CS Fundamentals',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS']
  },
  {
    category: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'C']
  },
  {
    category: 'Web',
    items: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'HTML5/CSS3']
  },
  {
    category: 'App Development',
    items: ['Flutter']
  },
  {
    category: 'Backend',
    items: ['Apache Kafka', 'Flask', 'FastAPI', 'Node.js']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL']
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'VS Code', 'Jupyter']
  }
];

export const certificationsData: Certification[] = [
  {
    title: 'Smart India Hackathon 2024',
    issuer: 'Ministry of Education',
    date: 'December 2024',
    highlight: true
  },
  {
    title: 'Advanced Node.js Development',
    issuer: 'Udemy',
    date: 'October 2024'
  },
  {
    title: 'React.js Web Development',
    issuer: 'Udemy',
    date: 'August 2024'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Viswadatta1233',
    icon: 'github'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/dattaviswa/',
    icon: 'code'
  },
  {
    name: 'Email',
    url: 'mailto:dattanidumukkala.98@gmail.com',
    icon: 'mail'
  },
  {
    name: 'Phone',
    url: 'tel:+919182039121',
    icon: 'phone'
  }
];

export const aboutMe = {
  intro: "I'm a passionate Computer Science student and Full Stack Developer with a strong foundation in data structures, algorithms, and modern web technologies. I enjoy building innovative solutions that solve real-world problems.",
  education: "Currently pursuing my B.Tech in Computer Science at RGUKT Nuzvid with a GPA of 9.73. I've consistently maintained academic excellence throughout my educational journey.",
  experience: "I've worked on several impactful projects, including winning the Smart India Hackathon 2024. My experience spans full-stack development, with expertise in React.js, Node.js, and various backend technologies.",
  interests: "Beyond coding, I'm interested in competitive programming, machine learning, and contributing to open-source projects. I'm always eager to learn new technologies and apply them to create innovative solutions."
};
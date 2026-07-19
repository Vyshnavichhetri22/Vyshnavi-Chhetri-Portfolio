import cdcImage from '../assets/projects/cdc.png'
import wanderlustImage from '../assets/projects/wanderlust.png'
import bankImage from '../assets/projects/Bank.png'
import medicalImage from '../assets/projects/medical-store.png'
import irrigationImage from '../assets/projects/irrigation-system.png'
import employeeImage from '../assets/projects/employee-record.png'

export const ABOUT_CONTENT = {
  intro:
    'I am a passionate software engineer who enjoys turning ideas into clean, functional web applications. With a strong foundation in both frontend and backend technologies, I focus on writing maintainable code and building user-centric solutions.',
  education: [
    {
      year: '2023 – Present',
      title: 'Bachelor of Information Technology (BIT)',
      institution: 'Third Year Student',
      description:
        'Building expertise in software development, databases, and modern web technologies while strengthening problem-solving skills.',
    },
    // {
    //   year: '2021 – 2023',
    //   title: 'Higher Secondary Education',
    //   institution: 'Lumbini Adarsha Degree College',
    //   description:
    //     'Developed analytical thinking and a strong academic foundation that led me toward information technology.',
    // },
  ],
  internship: {
    title: 'Software Engineer Intern',
    company: 'Yuga Yatra Retail (OPC) Private Ltd.',
    period: 'July 2026 – Present',
    description:
      'Contributing to modern web application development, collaborating with the team, and continuously learning industry best practices in a professional environment.',
  },
  careerGoal:
    'To grow into a skilled full stack developer who builds impactful, scalable web applications while contributing to meaningful products and mentoring others along the way.',
}

export const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'JavaScript', 'PHP', 'SQL'],
    icon: 'code',
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'Tailwind', 'Bootstrap', 'React'],
    icon: 'frontend',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'PHP'],
    icon: 'backend',
  },
  {
    title: 'Database',
    skills: ['MySQL', 'MongoDB'],
    icon: 'database',
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'XAMPP'],
    icon: 'tools',
  },
  {
    title: 'Concepts',
    skills: [
      'DBMS',
      'Operating System',
      'Object Oriented Programming',
      'Data Structures & Algorithms',
    ],
    icon: 'concepts',
  },
]

export const PROJECTS = [
  {
    id: 'career-development-center',
    title: 'Career Development Center',
    description:
      'A comprehensive career platform with role-based authentication, resume building, career path exploration, company listings, interview preparation, and an interactive quiz system.',
    image: cdcImage,
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Authentication',
      'Role Based Login',
      'Resume Builder',
      'Career Path Explorer',
      'Company Explorer',
      'Interview Preparation',
      'Quiz System',
      'CRUD',
      'Responsive',
    ],
    github: null, //'https://github.com/vyshnavichhetri/career-development-center', 
    liveDemo: null,//'https://your-cdc-demo.vercel.app', // Replace with your live demo URL
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    description:
      'A full-stack property listing platform inspired by travel accommodation sites, featuring user authentication, property CRUD, reviews, and cloud-based image uploads.',
    image: wanderlustImage,
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'EJS'],
    features: [
      'Authentication',
      'Property Listings',
      'Reviews',
      'Image Upload',
      'CRUD',
      'MVC',
    ],
    github: 'https://github.com/Vyshnavichhetri22/wanderlust-full-stack-project',
    liveDemo: 'https://wanderlust-full-stack-project-kboy.onrender.com/listings/6a09eb2952c7807ab38d4c2c',
  },
  {
    id: 'bank-management-system',
    title: 'Bank Management System',
    description:
      'A desktop banking application with separate dashboards for managers, employees, and customers, supporting fund transfers, loan management, and transaction auditing.',
    image: bankImage,
    technologies: ['Java', 'Swing', 'JDBC', 'MySQL'],
    features: [
      'Manager Dashboard',
      'Employee Dashboard',
      'Customer Dashboard',
      'Fund Transfer',
      'Loan Management',
      'Cheque Request',
      'PIN Change',
      'Transaction History',
      'Audit Logs',
    ],
    github: 'https://github.com/Vyshnavichhetri22/BankManagementSystem',
    liveDemo: null,
  },
  {
    id: 'medical-store-management-system',
    title: 'Medical Store Management System',
    description:
      'A console-based application developed in C for managing medicines, customer details, billing, stock availability, and purchase records efficiently.',
    image: medicalImage,
    technologies: ['C', 'File Handling'],
    features: [
      'Medicine Inventory',
      'Billing System',
      'Stock Management',
      'Customer Records',
      'File Handling',
      'Console Application',
    ],
    github: null,
    liveDemo: null,
  },

  {
    id: 'smart-irrigation-system',
    title: 'Smart Irrigation System',
    description:
      'An IoT-based smart irrigation system that automatically controls water supply based on soil moisture levels using Arduino and sensors.',
    image: irrigationImage,
    technologies: [
      'Arduino',
      'Embedded C',
      'Soil Moisture Sensor',
      'L298N',
      'LCD',
    ],
    features: [
      'Automatic Water Pump',
      'Soil Moisture Detection',
      'LCD Display',
      'Motor Driver',
      'Energy Efficient',
      'Real-time Monitoring',
    ],
    github: null,
    liveDemo: null,
  },

  {
    id: 'employee-record-management-system',
    title: 'Employee Record Management System',
    description:
      'A C++ application designed to manage employee information including records, salary details, attendance, and CRUD operations using file handling.',
    image: employeeImage,
    technologies: ['C++', 'File Handling'],
    features: [
      'Employee Records',
      'CRUD Operations',
      'Attendance',
      'Salary Details',
      'Search',
      'File Handling',
    ],
    github: null,
    liveDemo: null,
  },
]

export const EXPERIENCE = [
  {
    id: 'yuga-yatra-intern',
    role: 'Software Engineer Intern',
    company: 'Yuga Yatra Retail (OPC) Private Ltd.',
    location: 'Remote',
    period: 'July 2026 – Present',
    description:
      'Working on modern web applications, contributing to feature development, and applying best practices in a professional software engineering environment.',
    highlights: [
      'Building and maintaining web application features',
      'Collaborating with the development team remotely',
      'Applying modern frontend and backend practices',
      'Continuous learning and skill development',
    ],
  },
]


import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  selfemployed,
} from '../assets'





export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Blockchain and Web3 Developer",
    icon: web,
  },
  {
    title: "Crypto, Forex Trader",
    icon: mobile,
  },
  {
    title: "Javascript, Python, C++ Programmer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
    {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },


 

];

const experiences = [
  {
    title: "Freelance Blockchanin Developer",
    company_name: "Self Employed",
    icon:selfemployed,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Building the future of finance, one decentralized application at a time.",
      "As a blockchain developer with expertise in Web3 technologies and years of experience trading crypto, forex, and futures.",
      "Combining technical skills and financial acumen to solve real-world problems in the Web3 space.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aravindselvan's contribution was simply awesome! He brought a fresh perspective to our blockchain project and consistently delivered innovative solutions that exceeded our expectations. A valuable team player.",
    name: "Saravanan RK",
    designation: "CEO",
    company: "AIRTON",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Working with Aravindselvan has been a game-changer. He's an innovative thinker who is always looking for ways to improve our project. His technical skills and collaborative spirit made him a joy to work with.",
    name: "Vasanth K",
    designation: "CFO",
    company: "AIRTON",
    image: secondTestimonial,
  },
/*  {
    testimonial:
      "After Aravind optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },*/
];

const projects = [
  {
    name: "Blockchain Visualization",
    description:
      "Blockchain Explorer is a project designed to demystify the blockchain and make its intricate workings accessible to everyone. It's a visually-driven explorer that goes beyond just displaying raw data, aiming to provide a clear and intuitive understanding of blockchain technology.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "white-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "CryptoJS",
        color: "green-text-gradient",
      },
      {
        name: "Animate.css",
        color: "orange-text-gradient",
      }
 
    ],
    image: project2,
    source_code_link: "https://github.com/AravindS2006/Blockchain-Visualization",
  },
  {
    name: "Health Monitoring",
    description:
      "This is a project revolutionizing personal health monitoring by bringing real-time vital signs to an intuitive and beautifully designed web dashboard. Using cutting-edge yet readily accessible technology, VitalSigns captures and displays a user's heart rate, SpO2 (blood oxygen saturation), and body temperature, providing instant insights into their well-being. This isn't just about monitoring; it's about empowering individuals to take proactive control of their health through readily available data.",
    tags: [
      {
        name: "HTML CSS JS",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Proteus",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/AravindS2006/Health-Monitoring",
  },
  {
    name: "AIRTON",
    description:
      "This project is a ultimate solution for the early detection and diagnostics of Glaucoma , Which is the very easy and affordable solution available in the market. This project uses Artificial Intelligence, Machine Learning and Image Processing for accurate detection of Glaucoma",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Electronics",
        color: "white-text-gradient",
      },
      {
        name: "Image Processing",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/AravindS2006/AIRTON_MAIN",
  },
];

export { services, technologies, experiences, testimonials, projects };
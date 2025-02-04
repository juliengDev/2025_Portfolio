
// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Julien",
  middleName: "",
  lastName: "Gilbert",
  message: "Passionate about transforming ideas into impactful digital experiences using modern technologies.",
  icons: [
    {
      image: "fa-solid fa-github",
      url: "https://github.com/juliengDev",
    },
    {
      image: "fa fa-laptop-code",
      url: "https://www.frontendmentor.io/profile/juliengDev",
    },
    
    {
      image: "fab fa-free-code-camp",
      url: "https://www.freecodecamp.org/JulienGilbert",
    },
    
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/julien-gilbert-reactjs/",
    }
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/Gylbi/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/julien.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/julien.jpg"),
  imageSize: 375,
  message:
    "Hey there! I'm Julien, a tech enthusiast who evolved from IT expert to full-stack developer. After 10+ years managing networks and systems, I discovered my passion for coding and turned it into a thrilling new chapter of my career. I love pushing boundaries and learning new things - it's what gets me out of bed in the morning! My sweet spot? Crafting modern web applications where performance meets security. Whether you need a blazing-fast website or a complex web app, I bring both my IT background and development skills to the table to create solutions that just work. Always up for a new challenge and excited to learn something new. Want to build something cool together?",
  resume: "https://drive.google.com/file/d/1FpBnXHI5D9qhGCL15jweMjpbun635sdH/view",
};

// LAST PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "juliengDev", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: [],
};

// PROJECTS SECTION 

const data = {
  show:"true",
  heading: "My Projects",
  projects: [
    {
    id: 1,
    title: 'E-commerce product page',
    description: 'An interactive and accessible e-commerce product page featuring a lightbox gallery and dynamic cart management!',
    image: require('../assets/projects/19_desktop-preview.jpg'), 
    liveDemo: 'https://juliengdev-e-commerce-product-page.netlify.app/',
    githubLink: 'https://github.com/juliengDev/E-commerce_product_page'
    },
    {
      id: 2,
      title: 'News homepage',
      description: 'The site is a news homepage focused on topics like Web 3.0, technology trends, and gaming. It features a clean, modern design with a focus on usability and responsiveness.',
      image: require('../assets/projects/18_desktop-preview.jpg'), 
      liveDemo: 'https://juliengdev-news-hompage.netlify.app/',
      githubLink: 'https://github.com/juliengDev/News_Homepage'
    },
    {
      id: 3,
      title: 'Contact form',
      description: 'This project is an accessible contact form component that allows users to submit their inquiries while providing real-time validation feedback. It was developed with a strong focus on accessibility, keyboard navigation, and responsive design, following modern front-end development best practices.',
      image: require('../assets/projects/17_desktop-preview.jpg'), 
      liveDemo: 'https://juliengdev-contact-form.netlify.app/',
      githubLink: 'https://github.com/juliengDev/Contact_Form'
    },  
    {
      id: 4,
      title: 'FAQ Accordion Component',
      description: 'This project is an interactive FAQ accordion component that allows users to expand and collapse answers to frequently asked questions. It prioritizes accessibility, keyboard navigation, and responsive design, ensuring an intuitive experience across all devices.',
      image: require('../assets/projects/16_desktop-preview.jpg'), 
      liveDemo: 'https://juliengdev-faq-accordion.netlify.app/',
      githubLink: 'https://github.com/juliengDev/FAQ_accordion'
    } , 
    {
      id: 5,
      title: 'Interactive rating component',
      description: 'This project is an interactive web component that allows users to rate from 1 to 5 stars and display the result in a modal. It was developed with a focus on accessibility and best practices in front-end development.',
      image: require('../assets/projects/15_desktop-preview.jpg'), 
      liveDemo: 'https://juliengdev-interactive-rating.netlify.app/',
      githubLink: 'https://github.com/juliengDev/Interactive_rating_component'
    },  
    {
      id: 6,
      title: 'Frontend quiz app',
      description: 'This project is a web-based quiz application that tests users knowledge of front-end development across four different topics. It was developed as the final challenge in the "JavaScript Fundamentals" course on Frontend Mentor.',
      image: require('../assets/projects/14_desktop-preview.jpg'), 
      liveDemo: 'https://juliengdev-frontend-quizz-app.netlify.app/',
      githubLink: 'https://github.com/juliengDev/Frontend_Quiz_app'
    },  
    {
      id: 7,
      title: 'Password generator app',
      description: 'This project is an interactive password generator app that allows users to create strong passwords based on selected criteria. It includes a strength indicator, a clipboard copy feature, and a responsive design for an optimal user experience.',
      image: require('../assets/projects/13_desktop-preview.jpg'), 
      liveDemo: 'https://juliengdev-password-generator-app.netlify.app/',
      githubLink: 'https://github.com/juliengDev/Password-generator-app'
    },  
    {
      id: 8,
      title: 'Tip Calculator App',
      description: 'This project is a tip calculator app designed to help users quickly split bills and calculate tips accurately. Built with TypeScript, it ensures precise real-time calculations and a smooth user experience.',
      image: require('../assets/projects/12_desktop-preview.jpg'), 
      liveDemo: 'https://juliengdev-tip-calculator-app.netlify.app/',
      githubLink: 'https://github.com/juliengDev/tip-calculator-app'
    },  
    {
      id: 9,
      title: 'Time Tracking Dashboard',
      description: 'This project is a dynamic time tracking dashboard that allows users to visualize their activity data in a clear and interactive way. Built with TypeScript, it dynamically updates based on **JSON data** and provides a responsive UI for a seamless experience across all devices.',
      image: require('../assets/projects/11_desktop-preview.jpg'), 
      liveDemo: 'https://juliengdev-time-tracking-dashboard.netlify.app/',
      githubLink: 'https://github.com/juliengDev/Time-tracking-dashboard'
    }
  ]
}
// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/julien.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/julien.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "HTML", value: 100 },
    { name: "CSS/SCSS", value: 100 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 80 },
    { name: "React", value: 90 },
    { name: "Redux", value: 90 },
    { name: "Data Structures", value: 80 },
    { name: "NodeJs", value: 60 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 80 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 100 },
    { name: "Communication", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I’m currently seeking opportunities as a Front-End Developer, whether for short-term or long-term projects, internships, or freelance collaborations. If you know of any openings, have any questions, or just want to connect, please feel free to email me at",
  email: "juliengilbert.pro@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Front-End Developer',// Here Add Company Name
      companylogo: require('../assets/img/wealth.jpeg'),
      date: 'March 2024 - June 2024',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/argent.jpeg'),
      date: 'Jan 2024 - Feb 2024',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/sportsee.png'),
      date: 'Nov 2023 - Dec 2023',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/kasa.png'),
      date: 'Aug 2023 - Sept 2023',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/learn.png'),
      date: 'Jul 2023 - Aug 2023',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/billed.png'),
      date: 'Mai 2023 - Jul 2023',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/plats.png'),
      date: 'Feb 2023 - Mai 2023',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/fish.png'),
      date: 'Nov 2022 - Jan 2023',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/game.png'),
      date: 'Oct 2022 - Nov 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, data, skills, leadership, getInTouch, experiences };

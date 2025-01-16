
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
    "My name is Julien Gilbert. I graduated in 2024 with a Software Design degree from a renowned online school recognized across the internet. I started my coding journey as a completely self-taught developer, driven by my passion for learning and the boundless possibilities that coding offers to solve real-world problems. My goal is to improve every single day, contribute to ambitious and impactful projects, and keep pushing the boundaries of what technology can achieve. I would be delighted to connect, discuss your projects, and bring my skills and expertise to the table.",
  resume: "https://drive.google.com/file/d/1FpBnXHI5D9qhGCL15jweMjpbun635sdH/view",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "juliengDev", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

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
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
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
      role: 'FrontEnd Developer',// Here Add Company Name
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

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

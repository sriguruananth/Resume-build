/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sri Guru Ananth Gadicherla",
  description:
    "A dedicated professional driven by a passion for crafting end-to-end solutions that foster sustainable and scalable social and technical systems, ultimately aimed at generating meaningful impact.",
  og: {
    title: "Sri Guru Ananth Gadicherla's Portfolio",
    type: "website",
    url: "http://ananthgadicherla.com/",
  },
};

//Home Page
const greeting = {
  title: "Sri Guru Ananth Gadicherla",
  logo_name: "AG",
  subTitle:
    "A dedicated professional driven by a passion for crafting end-to-end solutions that foster sustainable and scalable social and technical systems, ultimately aimed at generating meaningful impact.",
  resumeLink:
    "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"


  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ananth-gadicherla/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sriguruananth@gmail.com",
    fontAwesomeIcon: "fa-brands fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in developing highly scalable production-ready models tailored for a diverse range of deep learning and statistical applications.",
        "⚡ Demonstrated expertise in executing Computer Vision and Natural Language Processing (NLP) projects, ensuring seamless integration and optimal performance.",
        "⚡ Skilled in conducting complex quantitative modeling, specializing in dynamic forecasting and time series analysis to drive informed decision-making and strategic planning initiatives.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in HTML5, CSS3, and JavaScript frameworks like React.js, ensuring dynamic and responsive user interfaces.",
        "⚡ Experienced in building intuitive and visually appealing web applications.",
        "⚡ Ensuring dynamic and responsive user interfaces.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Software Testing",
      fileName: "DesignImg",
      skills: [
        "⚡ Automated Testing for highly attractive user interface for mobile and web applications",
        "⚡ Proficient in writing and maintaining test scripts and scenarios",
        "⚡ Experienced in integrating automated testing into continuous integration and continuous deployment (CI/CD) pipelines",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "fa-java",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Sri Venkateswara college of Engineering, Tirupati",
      subtitle: "Bacherlor's in Electrical and Electronics Engineering",
      logo_path: "svce.jpeg",
      alt_name: "SVCE Tirupati",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://svce.edu.in/",
    },
    {
      title: "State University of Binghamton at Binghamton",
      subtitle: "M.S. in Computer Science",
      logo_path: "Binghamton.webp",
      alt_name: "Binghamton University",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.binghamton.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Engineering",
      subtitle: "- JP Morgan & Chase",
      logo_path: "jpmorganchase_logo.jpeg",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_7aP994EXeDLjSraTQ_1693784290560_completion_certificate.pdf",
      alt_name: "Software Engineering",
      color_code: "#1F70C220",
    },
    {
      title: "Agile Experience Program",
      subtitle: "- JP Morgan & Chase",
      logo_path: "jpmorganchase_logo.jpeg",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20&%20Co._7aP994EXeDLjSraTQ_1691006841159_completion_certificate.pdf",
      alt_name: "Agile Experience",
      color_code: "#167b9c",
    },
    {
      title: "Introduction to cloud computing",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.jpeg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-bcb5cb7b-8378-4b6e-9124-f33c11d00575/",
      alt_name: "Cloud Computing",
      color_code: "#0C5899",
    },
    {
      title: "Machine Learning, Data Science and Deep Learning with Python",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.jpeg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b300153d-e11e-4dcc-9ca0-761c318104b9/",
      alt_name: "Machine Learning, Data Science and Deep Learning",
      color_code: "#1F70C199",
    },
    {
      title: "Data Structures + Algorithms",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.jpeg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-83431213-4694-436f-8a6d-ae4f1341050f/",
      alt_name: "Data Structures + Algorithms",
      color_code: "#008f4c",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I've gained a comprehensive understanding of building and testing user interfaces to deliver high-quality software applications. As a front-end developer, I've honed my skills in crafting interactive and visually appealing web pages and mobile interfaces using languages like HTML, CSS, and JavaScript.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate",
          company: "Cognizant Technology Solutions",
          company_url: "https://www.cognizant.com/en/",
          logo_path: "cognizant.png",
          duration: "July 2021 - June 2022",
          location: "Hyderabad, INDIA",
          description:
            "Developed web applications tailored to financial services, ensuring secure and compliant interfaces for banking and investment platforms. My work involved integrating real-time data feeds and creating user-friendly dashboards to enhance financial transparency and user engagement.",
          color: "#000000",
        },
        {
          title: "Analyst",
          company: "cognizant Technology Solutions",
          company_url: "https://cognizant.com/",
          logo_path: "cognizant.png",
          duration: "December 2019 - June 2021",
          location: "Hyderabad, INDIA",
          description:
            "For a healthcare company, I utilized Selenium WebDriver for automation testing to validate financial modules within patient management systems. My automation scripts ensured rigorous testing of billing, invoicing, and financial reporting features, enhancing accuracy and compliance with healthcare finance regulations.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Animated_ananth.jpg",
    description:
      "I am looking for a Full-Time oppurtunity. Proficient in Front End Technologies and Machine Learnings. Please Email me for any discussions. Any help would be appreciated.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "127 Laurel Ave, Binghamton, New York, USA",
    locality: "Binghamton",
    country: "USA",
    region: "New York",
    postalCode: "13905",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/9mX2ciNjtry51fLe6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mirko Milicevic — AI & Backend Engineer",
  description:
    "Backend and AI engineer based in Belgrade. I build reliable backend services, production-ready ML systems, and data platforms for product-focused teams.",
  og: {
    title: "Mirko Milicevic — AI & Backend Engineer",
    type: "website",
    url: "https://www.linkedin.com/in/mirko-milicevic-80141a36b/",
  },
};

//Home Page
const greeting = {
  title: "Mirko Milicevic",
  logo_name: "Mirko Milicevic",
  nickname: "",
  subTitle:
    "Backend and AI engineer with 6+ years shipping production systems. I focus on API architecture, model integration, and the infrastructure work that keeps services reliable under real load.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://www.linkedin.com/in/mirko-milicevic-80141a36b/",
  githubProfile: "https://www.linkedin.com/in/mirko-milicevic-80141a36b/",
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
    link: "https://www.linkedin.com/in/mirko-milicevic-80141a36b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:milicevicmirko40@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "AI & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ I take models from experiment to production — feature pipelines, serving, monitoring, and retraining loops included",
        "⚡ Most comfortable with predictive and NLP systems, and increasingly with LLM-integrated product features",
        "⚡ I care about evaluation, not just accuracy — rollout strategy, fallbacks, and drift detection matter as much as the model itself",
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
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "MLflow",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: {
            color: "#0194E2",
          },
        },
      ],
    },
    {
      title: "Backend Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ My default stack is Python and Node.js — I also work in Go and Ruby on Rails depending on the project",
        "⚡ I spend a lot of time on API design, data modeling, and making sure services behave predictably under load",
        "⚡ Good observability and clear service contracts save more debugging time than anything else — I build for that from the start",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "Ruby on Rails",
          fontAwesomeClassname: "simple-icons:rubyonrails",
          style: {
            color: "#CC0000",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },
    {
      title: "Cloud & Platform Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Mostly AWS in production — comfortable with GCP and Azure when the project calls for it",
        "⚡ Docker and Kubernetes for deployments; I treat infrastructure as code and keep environments consistent",
        "⚡ CI/CD, alerting, and structured logging are non-negotiable for me — releases should be boring",
        "⚡ I wire data and model pipelines into backend services so they're usable by product engineers, not just data scientists",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#7B42BC",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
      ],
    },
    {
      title: "Technical Leadership",
      fileName: "FullStackImg",
      skills: [
        "⚡ I help teams define scope clearly, cut what isn't necessary, and ship things that hold up over time",
        "⚡ Comfortable leading technical direction across product, data, and engineering without losing sight of delivery",
        "⚡ I mentor by reviewing code seriously, writing things down, and being honest when something is over-engineered",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "simple-icons:confluence",
          style: {
            color: "#172B4D",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#85EA2D",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    // {
    //   title: "Indian Institute of Information Technology Kurnool",
    //   subtitle: "B.Tech. in Computer Engineering",
    //   logo_path: "iiitk_logo.png",
    //   alt_name: "IIITDM Kurnool",
    //   duration: "2016 - 2020",
    //   descriptions: [
    //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
    //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
    //   ],
    //   website_link: "http://iiitk.ac.in",
    // },
    {
      title: "University of Belgrade",
      subtitle: "Bachelor of Computer Science",
      logo_path: "ub_logo.png",
      alt_name: "University of Belgrade",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ Studied core CS subjects — algorithms, databases, operating systems, distributed systems, and software engineering.",
        "⚡ Built several web projects as coursework. That's where I realized I cared more about how the backend was designed than how the frontend looked.",
        "⚡ Graduated with distinction. Final project was a full web application built end to end.",
      ],
      website_link: "https://www.bg.ac.rs/study-in-belgrade/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Back-End Development and APIs",
      subtitle: "- freeCodeCamp",
      logo_path: "ub_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "freeCodeCamp",
      color_code: "#2A2A7299",
    },
    {
      title: "Front-End Development and APIs",
      subtitle: "- freeCodeCamp",
      logo_path: "ub_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "freeCodeCamp",
      color_code: "#0A66C299",
    },
    {
      title: "Ruby on Rails Developer Certificate",
      subtitle: "- The Odin Project",
      logo_path: "ub_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "The Odin Project",
      color_code: "#CC000099",
    },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },

    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Where I've Worked and What I've Built",
  description:
    "Six years across automotive, edtech, and enterprise software. I've mostly worked on backend systems and AI-powered features, on teams where shipping correctly matters more than shipping fast.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Experience",
      work: true,
      experiences: [
        {
          title: "Senior Backend & ML Integration Engineer",
          company: "TrueCar, Inc.",
          company_url: "https://www.truecar.com/",
          logo_path: "tc_logo.jpeg",
          duration: "July 2024 - June 2025",
          location: "Santa Monica, CA, USA",
          description:
            "TrueCar is a high-volume automotive marketplace where lead routing and dealer data are latency-sensitive and need to be correct. I owned the backend services for those flows and brought ML-based lead scoring into production — which meant designing the feature pipeline, the inference integration, and the fallback behavior myself. Beyond the model work, I focused on caching strategy, deployment reliability, and distributed tracing. The unglamorous work that actually prevents incidents.",
          color: "#0f4c81",
        },
        {
          title: "Senior Backend Engineer, Personalization & Platform",
          company: "FutureLearn Limited",
          company_url: "https://www.futurelearn.com/",
          logo_path: "futurelearn_logo.jpeg",
          duration: "September 2022 - June 2024",
          location: "London, UK",
          description:
            "FutureLearn serves millions of learners across courses and partner institutions. I was on the backend, working on personalization and course progression systems. That meant integrating recommendation models with the platform's content and enrollment APIs, keeping response times reasonable, and making sure data between services stayed consistent. I also owned parts of the async job infrastructure — scheduled recommendations, background syncs, event-driven workflows — things that had to be reliable without being expensive to operate.",
          color: "#de6f00",
        },
        {
          title: "Backend Engineer, Enterprise Systems & AI Automation",
          company: "Levi9 Global Sourcing B.V.",
          company_url: "https://www.levi9.com/",
          logo_path: "levi9_logo.webp",
          duration: "October 2019 - August 2022",
          location: "Belgrade, Serbia",
          description:
            "Levi9 embeds engineers into client teams, so over three years I worked across several enterprise projects. The common thread was integration work — connecting external APIs, third-party data providers, and internal legacy services into something stable enough to build on. In a few projects, I introduced ML automation where rules-based logic was breaking down, usually around classification and anomaly detection. Good experience in learning how to make software actually usable in complex organizational environments.",
          color: "#6f42c1",
        },
      ],
    },
    {
      title: "Early Career",
      experiences: [
        {
          title: "Software Engineering Intern, Client Delivery",
          company: "Zuhlke Engineering AG",
          company_url: "https://www.zuehlke.com/",
          logo_path: "zuhike_logo.webp",
          duration: "December 2018 - September 2019",
          location: "Belgrade, Serbia",
          description:
            "My first real exposure to professional software development. I joined client-facing web projects and quickly learned how different production code is from academic work — version control, code review, testing, and thinking carefully about edge cases. Nine months here set me up well for the backend-focused work that followed.",
          color: "#008f7a",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected work across backend systems, AI product features, and cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Technical Writing",
  description:
    "Notes and write-ups on backend architecture, data systems, and applied AI engineering.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ub_logo.png",
    description:
      "Open to senior AI and backend engineering roles. Happy to talk about the right fit — reach out directly.",
  },
  blogSection: {
    title: "Professional Profile",
    subtitle:
      "Find me on LinkedIn — I post occasionally about backend architecture, AI engineering, and things I find worth writing down.",
    link: "https://www.linkedin.com/in/mirko-milicevic-80141a36b/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Belgrade, Serbia",
    locality: "Belgrade",
    country: "Serbia",
    region: "Belgrade",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Belgrade,+Serbia",
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
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

export const generalData = {
  firstName: "Matthew",
  middleName: "John",
  lastName: "Orford",
  email: "mattorford9@gmail.com",
  location: "Salt Lake City, UT",
  jobTitle: "backend software engineer",
  bio:
    "recently-graduated software engineer currently based in salt lake city, ut with a wide " +
    "array of interests ranging from servers to ski slopes",
  socials: [
    {
      title: "Twitter",
      link: "https://twitter.com/mattjorford",
      icon: "fa fa-twitter",
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/in/matthew-orford/",
      icon: "fa fa-linkedin",
    },
    {
      title: "GitHub",
      link: "https://github.com/mattheworford",
      icon: "fa fa-github",
    },
    {
      title: "HackerRank",
      link: "https://hackerrank.com/mattorford",
      icon: "fa fa-code",
    },
    {
      title: "ConnectSC",
      link: "https://usc-csm.symplicity.com/profiles/matthew.orford",
      icon: "fa fa-graduation-cap",
    },
  ],
};

export const aboutData = {
  bio: [
    "Until my sophomore year of college, the world of technology represented a daunting " +
      "mystery I figured I would never understand. Fortunately, that fear turned into curiosity, " +
      "leading me to sign up for a computer science class. The course introduced me to data " +
      "structures and basic algorithms and was lead by a professor dead set on changing our " +
      "perspective on programming. He urged us to look at it as an exercise in problem-solving " +
      "and domain modeling that should be enjoyed rather than avoided. I guess that’s when I " +
      "caught ‘the bug,’ and I never looked back.",
    "Outside of school and work, which you can read about in my portfolio, I'm an avid skier " +
      "and biker. As a result, much of my interest in technology stems from the ways it has been " +
      "integrated into the world of outdoor sports. I still see a lot of potential for growth " +
      "both inside and outside of that industry as countless companies could stand to learn from " +
      "the adaptability it demands.",
  ],
  resumeLink: "Matthew_Orford_Resume.pdf",
  experience: [
    {
      company: "Credit Karma",
      role: "Software Engineer II",
      description:
        "Building and maintaining backend microservices that power the company's " +
        "mortgage-related products",
    },
    {
      company: "University of Southern California",
      role: "B.S. Computer Science",
      description:
        "Graduated from the Viterbi School of Engineering in the Spring of 2021",
    },
  ],
  skills: [
    {
      name: "Scala",
      percentage: "65%",
    },
    {
      name: "Python",
      percentage: "85%",
    },
    {
      name: "C++",
      percentage: "80%",
    },
  ],
};

export const experienceData = {
  honorsAndAwards: [
    {
      title: "Dean's List",
      time: "Spring 2019, Fall 2019, Fall 2020 & Spring 2021",
    },
    {
      title: "Presidential Scholarship",
      time: "Fall 2017 - Spring 2021",
    },
  ],
  education: {
    school: "University of Southern California",
    degree: "B.S. Computer Science",
    time: "Fall 2017 - Spring 2021",
    courses:
      "Artificial Intelligence, Operating Systems, Theory of Computing, Professional " +
      "C++, iOS App Development, Computer Systems, Algorithms, Software Engineering, Embedded " +
      "Systems, Data Structures, Object-Oriented Design, Discrete Methods & Writing",
    activities:
      "HackSC, Data Science Club, Trojan Scholars Society, Ski and Snowboard Club & " +
      "Pi Kappa Alpha",
    honors: "Presidential Scholar & Dean's List",
  },
  work: [
    {
      company: "Credit Karma",
      position: "Software Engineer II",
      location: "Charlotte, NC",
      time: "Present",
      description:
        "Building and maintaining the backend services that power Credit Karma's Home " +
        "product",
      skills: ["Scala", "GraphQL", "TypeScript"],
    },
    {
      company: "USC Viterbi School of Engineering",
      position: "Teaching Assistant",
      location: "Los Angeles, CA",
      time: "Spring 2021",
      description:
        "Graded programming assignments, hosted office hours and made myself " +
        "available as a resource to help students in Prof. Nathan Greenfield's course: ITP " +
        "365 (Managing Data in C++)",
      skills: ["C++", "Xcode", "TravisCI"],
    },
    {
      company: "Credit Karma",
      position: "Software Engineer Intern",
      location: "Charlotte, NC",
      time: "Fall 2020",
      description:
        "Assisted the Mobile Engineering team in developing and maintaining one of " +
        "the company’s newest products: Credit Karma Money.",
      skills: ["Swift", "TypeScript", "Scala", "Xcode", "GraphQL", "Python"],
    },
    {
      company: "Credit Karma",
      position: "Product Manager Intern",
      location: "San Francisco, CA",
      time: "Summer 2020",
      description:
        "Worked with the Growth and User Management teams on optimizing the " +
        "company's login, registration and account recovery flows.",
      skills: ["Figma", "Excel", "Looker", "GraphQL", "Python"],
    },
    {
      company: "University of Southern California",
      position: "Computer Science Tutor",
      location: "Los Angeles, CA",
      time: "Fall 2019 - Fall 2020",
      description:
        "Tutored students in the following courses: CSCI 170 (Discrete Methods in " +
        "Computer Science), CSCI 270 (Introduction to Algorithms and Theory of Computing), " +
        "ITP 115 (Programming in Python) & ITP 449 (Applications of Machine Learning).",
      skills: ["Python", "C++", "NumPy", "Scikit-Learn", "Matplotlib"],
    },
    {
      company: "USC Information Technology Services",
      position: "Student Technical Assistant",
      location: "Los Angeles, CA",
      time: "Fall 2018 - Spring 2020",
      description:
        "Maintained classroom AV technology in buildings on both the University " +
        "Park and Health Sciences campuses.",
      skills: [],
    },
  ],
  research: [
    {
      company: "USC Dornsife College of Letters, Arts and Sciences",
      location: "Los Angeles, CA",
      time: "Fall 2020 - Spring 2021",
      description:
        "Contributed to an effort that applied computational linguistics and machine " +
        "learning theories to model RNA virus architecture and better understand its behavior.",
      skills: ["Computational Linguistics", "TensorFlow"],
    },
    {
      company: "USC Viterbi School of Engineering",
      location: "Playa Vista, CA",
      time: "Fall 2019 - Spring 2020",
      description:
        "Helped write data collection and cleaning scripts that were used in " +
        "preparation for unsupervised training of NLP neural network models.",
      skills: ["Python", "TensorFlow", "Jupyter Notebook"],
    },
  ],
};

export const projectsData = {
  projects: [
    {
      key: "showpa",
      name: "Showpa",
      image: "showpa-1.jpg",
      link: "/projects/showpa",
      externalLink: "https://showpa.com",
      headerImage: "showpa-1.jpg",
      tags: ["Design", "Web Development"],
      description:
        "For my senior Capstone project at USC, I worked with a team of 4 other " +
        "students to assist an entertainment start-up, Showpa, with translating their Native " +
        "product to a web application. The application's purpose is to streamline the " +
        "content-searching process by centralizing the offerings of many services so that users " +
        "can easily find where to watch desired content or discover new content entirely.",
      time: "Spring '21",
      skills: ["React", "React Native", "JavaScript"],
    },
    {
      key: "nlp",
      name: "NLP Research - USC Inst. for Creative Technologies",
      image: "ict-1.png",
      link: "/projects/nlp",
      externalLink:
        "https://people.ict.usc.edu/~gordon/publications/IITSEC2020.PDF",
      headerImage: "ict-2.jpg",
      tags: ["Machine Learning"],
      description:
        "During my junior year at USC, I worked with a group at USC's Institute for Creative " +
        "Technologies to develop software that would synthesize computer vision data to produce " +
        "narrative summaries of combat training exercises. In my role, I helped write data " +
        "collection and cleaning scripts that were used in preparation for unsupervised " +
        "training of NLP neural network models.",
      time: "Fall '19 - Spring '20",
      skills: ["Python", "TensorFlow", "Jupyter Notebook"],
    },
    {
      key: "ling",
      name: "RNA Research - USC Dept. of Linguistics",
      image: "ling-1.jpg",
      link: "/projects/ling",
      externalLink:
        "dornsife.usc.edu/cf/ling/ling_faculty_display.cfm?Person_ID=1038317",
      headerImage: "ling-2.jpg",
      tags: ["Machine Learning", "Linguistics"],
      description:
        "I worked with Prof. Khalil Iskarous on his effort to apply computational linguistics " +
        "theories to the process of modeling viral RNA. This project applied similar models to " +
        "those used in NLP processes to RNA replication in the same vein as recent developments " +
        "by DeepMind.",
      time: "Fall '20 - Spring '21",
      skills: ["TensorFlow", "Jupyter Notebook"],
    },
    {
      key: "wussopen",
      name: "WussOpen",
      image: "wussopen.jpeg",
      link: "/projects/wussopen",
      externalLink: "https://github.com/brklinker/WussOpen",
      headerImage: "wussopen-2.jpeg",
      tags: ["Web Development"],
      description:
        "WussOpen was a web application I developed with a team of 5 other computer science " +
        "students. It provided users with a simple, minimalist UI to search for and find the " +
        "current status of restaurants anywhere. It also promoted discovery of new restaurants " +
        "all by integrating with the Google Places API.",
      time: "Fall '19",
      skills: ["HTML", "CSS", "Apache Tomcat", "JavaScript", "MySQL"],
    },
    {
      key: "personal-site",
      name: "Personal Site",
      image: "personal-site.png",
      link: "/projects/personal-site",
      externalLink: "https://mattheworford.surge.sh",
      headerImage: "personal-site.png",
      tags: ["Design", "Web Development"],
      description:
        "In an effort to improve my shot at landing internships as an undergrad, I build a " +
        "static site to display my experience and a short bio. It was the predecessor to this " +
        "site.",
      time: "Fall '19",
      skills: ["HTML", "CSS", "JavaScript", "JQuery", "Node.js", "Surge"],
    },
  ],
};

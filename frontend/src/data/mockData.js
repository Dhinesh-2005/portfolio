// Mock data for portfolio - will be replaced with backend API later

export const profileData = {
  name: "DHINESH P",
  role: "B.Tech Information Technology Student",
  college: "St. Peter's College of Engineering and Technology",
  summary: "Passionate IT student with a keen interest in software development, testing, and emerging technologies. Eager to learn and contribute to innovative projects.",
  email: "prakashdinesh09@gmail.com",
  phone: "+91 9941796400",
  location: "Tamil Nadu, India",
  profileImage: "/photos/dinesh.jpeg",
  resumeUrl: "/resume/cv.pdf",
  social: {
    instagram: "https://www.instagram.com/dhinesh___07_?igsh=MWs5dzAwamYzNjZwZA==",
    linkedin: "https://www.linkedin.com/in/dhinesh-p-51575229b",
    github: "https://github.com/Dhinesh-2005"
  }
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I am a dedicated Information Technology student at St. Peter's College of Engineering and Technology, passionate about leveraging technology to solve real-world problems.",
    "My journey in tech has equipped me with a solid foundation in programming, web development, and software testing. I thrive in collaborative environments and am always eager to learn new technologies and methodologies.",
    "Beyond academics, I actively participate in coding competitions and tech communities to stay updated with industry trends. I believe in continuous learning and am committed to growing as a well-rounded technology professional."
  ]
};

export const skillsData = {
  technical: [
    { name: "HTML/CSS", level: 80 },
    { name: "JavaScript", level:70},
    { name: "React.js", level: 70 },
    { name: "Python", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "MySQL", level: 75 },
    { name: "MongoDb", level: 75 },
    { name: "Git/GitHub", level: 80 },
    { name: "Java", level: 70 }
  ],
  soft: [
    { name: "Teamwork", icon: "Users" },
    { name: "Problem Solving", icon: "Lightbulb" },
    { name: "Communication", icon: "MessageSquare" },
    { name: "Adaptability", icon: "RefreshCw" },
    { name: "Time Management", icon: "Clock" },
    { name: "Critical Thinking", icon: "Brain" }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Teamacy Website",
    description: "A collaborative team management platform for organizing projects, assigning tasks, and tracking progress in one place.",
    technologies: ["React", "FastAPI", "MongoDB", "REST API"],
    role: "Full Stack Developer",
    image: "/photos/teamacy.jpeg",
    github: "https://github.com/Dhinesh-2005t",
    live: "https://www.teamacy.in"
  },
   {
    id: 2,
    title: "Students Result Portal System",
    description: "A web-based system to publish, view, and manage student examination results securely and efficiently.",
    technologies: ["React", "FastAPI", "MongoDB", "REST API"],
    role: "Full Stack Developer",
    image: "/photos/crp.jpeg",
    github: "https://github.com/Dhinesh-2005",
    live: "https://spcet-crp.onrender.com"
  },
  {
    id: 3,
    title: "NKS Website",
    description: "A responsive website designed to showcase services, content, and contact details with a clean and modern UI.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    role: "Frontend Developer",
    image: "/photos/nks.jpeg",
    github: "https://github.com/Dhinesh-2005",
    live: "https://nkswebsite.onrender.com"
  }
 
];

export const experienceData = [
  {
    id: 1,
    company: "Teamacy",
    role: "Full Stack Web Developer",
    duration: "January 2026 - Present",
    responsibilities: [
      "Designed and developed Teamacy, a full-stack team collaboration web application from scratch.",
      "Implemented project and task management features with a clean, responsive user interface.",
      "Built backend APIs using FastAPI and integrated them with MongoDB for data management.",
      "Handled authentication, API integration, and overall application workflow.",
      "Deployed and tested the application for real-world usage and performance."
    ]
  }/*,
  {
    id: 2,
    company: "Digital Innovation Labs",
    role: "Software Testing Intern",
    duration: "January 2024 - March 2024",
    responsibilities: [
      "Executed manual testing procedures for web and mobile applications",
      "Documented and reported bugs using issue tracking tools",
      "Created test cases and test plans for new features",
      "Worked closely with developers to ensure software quality"
    ]
  }*/
];

export const certificationsData = [
   {
    id: 1,
    name: "Python for Data Science",
    platform: ["NPTEL ," , " Pantech e Learning"],
    date: "2025",
    icon: "Award"
  },
  {
    id: 2,
    name: "Full Stack Web Development",
    platform: ["NoviTech R&D Pvt. Ltd ," , " Simplilearn SkillUP"],
    date: "2024 - 2025",
    icon: "Award"
  },
  {
    id: 3,
    name: "Artificial Intelligence Fundamentals",
    platform: "IBM SkillsBuild",
    date: "2025",
    icon: "Award"
  },
  {
    id: 4,
    name: "Cybersecurity Fundamentals",
    platform: "IBM SkillsBuild",
    date: "2025",
    icon: "Award"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "B.Tech - Information Technology",
    institution: "St. Peter's College of Engineering and Technology",
    duration: "2023 - 2027",
    description: "Currently pursuing Bachelor's degree in Information Technology with focus on software development, database management, and emerging technologies."
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Ebenezer Jaganath Marcus Matriculation Higher Secondary School",
    duration: "2021 - 2023",
    description: "Completed higher secondary education with Computer Science as major subject."
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "Hackathon Finalist",
    description: "Reached finals in college-level hackathon with an innovative IoT project",
    icon: "Trophy"
  },
  {
    id: 2,
    title: "Academic Excellence Award",
    description: "Recognized for outstanding academic performance in IT department",
    icon: "Medal"
  },
  {
    id: 3,
    title: "Coding Competition Winner",
    description: "First place in intra-college coding competition",
    icon: "Star"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

// Mock data for portfolio - will be replaced with backend API later

export const profileData = {
  name: "SABARINATHA M",
  role: "B.Tech Information Technology Student",
  college: "St. Peter's College of Engineering and Technology",
  summary: "Passionate IT student with a keen interest in software development, testing, and emerging technologies. Eager to learn and contribute to innovative projects.",
  email: "sabarinathan@example.com",
  phone: "+91 9876543210",
  location: "Tamil Nadu, India",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  resumeUrl: "/resume.pdf",
  social: {
    instagram: "https://www.instagram.com/ur_sabari?igsh=MWh6cTE3cGVvbHR0aw==",
    linkedin: "https://www.linkedin.com/in/sabarinathanmanohar",
    github: "https://github.com/Sabarinathan-git"
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
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "MySQL", level: 75 },
    { name: "Git/GitHub", level: 85 },
    { name: "Java", level: 70 }
  ],
  soft: [
    { name: "Communication", icon: "MessageSquare" },
    { name: "Teamwork", icon: "Users" },
    { name: "Problem Solving", icon: "Lightbulb" },
    { name: "Adaptability", icon: "RefreshCw" },
    { name: "Time Management", icon: "Clock" },
    { name: "Critical Thinking", icon: "Brain" }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description: "A full-stack e-commerce platform with product listings, cart functionality, and secure checkout. Implemented responsive design and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com/Sabarinathan-git",
    live: "#"
  },
  {
    id: 2,
    title: "Weather Forecast App",
    description: "A weather application that fetches real-time weather data using APIs. Features include location-based forecasts and 5-day predictions.",
    technologies: ["JavaScript", "HTML", "CSS", "REST API"],
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    github: "https://github.com/Sabarinathan-git",
    live: "#"
  },
  {
    id: 3,
    title: "Student Management System",
    description: "A comprehensive system for managing student records, attendance, and grades. Built with Python and MySQL database integration.",
    technologies: ["Python", "MySQL", "Tkinter"],
    role: "Backend Developer & Tester",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    github: "https://github.com/Sabarinathan-git",
    live: "#"
  }
];

export const experienceData = [
  {
    id: 1,
    company: "Tech Solutions Pvt Ltd",
    role: "Web Development Intern",
    duration: "June 2024 - August 2024",
    responsibilities: [
      "Developed and maintained responsive web pages using HTML, CSS, and JavaScript",
      "Collaborated with the design team to implement UI/UX improvements",
      "Participated in code reviews and implemented feedback for quality assurance",
      "Assisted in debugging and testing web applications"
    ]
  },
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
  }
];

export const certificationsData = [
  {
    id: 1,
    name: "Full Stack Web Development",
    platform: "Coursera",
    date: "2024",
    icon: "Award"
  },
  {
    id: 2,
    name: "Python for Data Science",
    platform: "IBM",
    date: "2024",
    icon: "Award"
  },
  {
    id: 3,
    name: "JavaScript Algorithms",
    platform: "freeCodeCamp",
    date: "2023",
    icon: "Award"
  },
  {
    id: 4,
    name: "Git & GitHub Fundamentals",
    platform: "LinkedIn Learning",
    date: "2023",
    icon: "Award"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "B.Tech - Information Technology",
    institution: "St. Peter's College of Engineering and Technology",
    duration: "2022 - 2026",
    description: "Currently pursuing Bachelor's degree in Information Technology with focus on software development, database management, and emerging technologies."
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Government Higher Secondary School",
    duration: "2020 - 2022",
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

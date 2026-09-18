// All site copy lives here. Edit this file to update the portfolio.
// Content follows the resume: "ATHUL K V — Java Full Stack Developer".

export const profile = {
  name: 'Athul K V',
  initials: 'AK',
  title: 'Java Full Stack Developer · Spring Boot, React, MySQL',
  location: 'Bangalore, India',
  email: 'kvathul27@gmail.com',
  phone: '+91 80862 57339',
  github: 'https://github.com/kvathul7',
  githubHandle: 'kvathul7',
  linkedin: 'https://linkedin.com/in/athul-kv-16a3ab256',
  linkedinHandle: 'athul-kv-16a3ab256',
  resume: '/Athul_KV_Resume.pdf',
  // Roles Athul is open to — shown as an "Open to" band under the hero.
  roles: [
    'Java Developer',
    'Full Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'React.js Developer',
    'Software Engineer',
  ],
  positioning:
    'Computer Science graduate (B.E., 2026) with hands-on experience in Java, Spring Boot, REST APIs, Hibernate/JPA, MySQL and React.js. Built a complete HR management system with JWT login and role-based access.',
  about: [
    'I build the parts of an application most people never see — the API layer, the schema underneath it, and the access rules that decide who is allowed to touch what.',
    'Most of what I know came from building an HR management system end to end: twelve modules, four user roles, JWT login, and a normalized MySQL schema behind a React frontend. Working through that gave me a real feel for how a backend holds together once it stops being a tutorial.',
    'I am currently a software development intern at ORGGU in Bangalore, working on real-world web and mobile app projects under mentor guidance along with cloud development basics. I am looking for a Java backend or full-stack developer role.',
  ],
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const experience = [
  {
    company: 'ORGGU Private Limited',
    role: 'Software Development Intern',
    location: 'Bangalore',
    period: 'Ongoing',
    kind: 'Experience',
    current: true,
    logo: '/logos/orggu.png',
    logoSize: 'lg',
    site: 'https://www.orggu.com/',
    siteLabel: 'orggu.com',
    stack: ['Web Development', 'Mobile Apps', 'Cloud Basics', 'Bitbucket', 'Fork'],
    bullets: [
      'Working on real-world web and mobile app projects under mentor guidance, along with cloud development basics.',
      'Use Bitbucket and Fork for version control on team repositories.',
    ],
  },
  {
    company: 'Pentagon Space',
    role: 'Java Full Stack Development',
    location: 'Bengaluru',
    period: '6 Months',
    kind: 'Training & Certification',
    current: false,
    logo: '/logos/pentagon-space.png',
    logoSize: 'xl',
    site: 'https://pentagonspace.in/',
    siteLabel: 'pentagonspace.in',
    stack: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL'],
    bullets: [
      'Hands-on course covering HTML, CSS, JavaScript, Java and MySQL; built small full-stack apps as assignments.',
      'Used Git feature branches, pull requests and peer code review on team assignments.',
    ],
  },
]

export const projects = [
  {
    featured: true,
    name: 'HR Management System (HRMS)',
    short: 'HRMS',
    year: 'June 2026',
    role: 'Java Full Stack',
    repo: 'https://github.com/kvathul7/hrms',
    repoLabel: 'github.com/kvathul7/hrms',
    logo: '/logos/axon-hrms.png',
    summary:
      'A full-stack HR platform covering the employee lifecycle — twelve modules behind a single role-aware React interface, served by a Spring Boot REST API over a normalized MySQL schema.',
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'Hibernate/JPA',
      'MySQL',
      'React.js (Vite)',
      'Material UI',
      'Axios',
      'Chart.js',
    ],
    stats: [
      { value: '12', label: 'Modules' },
      { value: '4', label: 'User roles' },
      { value: '15+', label: 'REST APIs' },
    ],
    modules: [
      'Dashboard',
      'Employees',
      'Attendance',
      'Leave',
      'Payroll',
      'Recruitment',
      'Performance',
      'Departments',
      'Holidays',
      'Reports',
      'Settings',
      'About',
    ],
    roles: [
      { name: 'Admin', scope: 'Full system access' },
      { name: 'HR', scope: 'People & payroll operations' },
      { name: 'Manager', scope: 'Team-scoped records' },
      { name: 'Employee', scope: 'Own records only' },
    ],
    bullets: [
      'Full-stack HR app with 12 modules — employees, attendance, leave, payroll, recruitment, performance, reports and more.',
      'JWT login and role-based access for Admin, HR, Manager and Employee roles using Spring Security.',
      'Built 15+ REST APIs in Spring Boot and connected them to the React frontend with Axios.',
      'Designed a normalized MySQL schema mapped with Hibernate/JPA; CRUD, search, filters and form validation across all modules.',
      'Dashboard with live employee stats using Material UI and Chart.js.',
    ],
  },
  {
    featured: false,
    name: 'Network Intrusion Detection System (NIDS)',
    short: 'NIDS',
    year: '2025',
    role: 'Python, group project',
    repo: 'https://github.com/kvathul7/NIDS',
    repoLabel: 'github.com/kvathul7/NIDS',
    logo: null,
    summary:
      'A network security tool that watches traffic in real time and flags suspicious activity on a live dashboard.',
    stack: ['Python'],
    stats: [],
    modules: [],
    roles: [],
    bullets: [
      'Watches network traffic in real time and flags suspicious activity on a live dashboard.',
      'Took it from requirements to a working deployment as a complete project.',
    ],
  },
]

export const skills = [
  {
    group: 'Languages',
    items: [
      'Java (Core Java, OOP, Collections, Exception Handling)',
      'JavaScript',
      'SQL',
      'Python (basics)',
      'HTML',
      'CSS',
    ],
  },
  {
    group: 'Backend',
    items: ['Spring Boot', 'Spring Security', 'JWT', 'REST APIs', 'Hibernate/JPA', 'Maven'],
  },
  {
    group: 'Frontend',
    items: ['React.js (Vite)', 'Material UI', 'Axios', 'Chart.js'],
  },
  { group: 'Database', items: ['MySQL'] },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'Bitbucket', 'Fork', 'VS Code', 'Eclipse'],
  },
  {
    group: 'Creative & Marketing',
    note: 'Beginner',
    items: [
      'Social media handling',
      'Content creation',
      'AI content creation',
      'Photo & video editing',
      'Digital marketing',
    ],
  },
]

export const education = [
  {
    school: 'Shree Devi Institute of Technology (VTU)',
    detail: 'B.E. in Computer Science Engineering',
    result: '70%',
    period: '2026',
  },
  {
    school: 'CKNS GHSS Pilicode',
    detail: 'Class XII',
    result: '85%',
    period: '',
  },
  {
    school: 'CKNS GHSS Pilicode',
    detail: 'Class X',
    result: '96%',
    period: '',
  },
]

export const certification = {
  name: 'Java Full Stack Development',
  issuer: 'Pentagon Space, Bengaluru',
  duration: '6 Months',
  status: 'Completed',
  logo: '/logos/pentagon-space.png',
  logoSize: 'xl',
}

// ---------------------------------------------------------------------------
// Editorial presentation metadata. Layout/labelling only — no new claims.
// ---------------------------------------------------------------------------

export const editorial = {
  // The oversized condensed word that anchors the hero.
  heroWord: 'PORTFOLIO',
  // Vertical rail labels running up the hero's outer margins.
  railsLeft: ['Spring Boot', 'Java 17'],
  railsRight: ['MySQL', 'React.js'],
  // Rotating stamp in the hero, repeated around the circle.
  badge: 'Open to Java developer roles · Bangalore, India · ',
  badgeLines: ['Open', 'for', 'work'],
  // Hero metadata strip, drawn from facts already on the page.
  meta: [
    { k: 'Based in', v: 'Bangalore, India' },
    { k: 'Focus', v: 'Java Full Stack' },
    { k: 'Degree', v: 'B.E. CSE — VTU' },
    { k: 'Status', v: 'Open to roles' },
  ],
  // Short display labels for the project covers, keyed by project.short.
  projectMeta: {
    HRMS: { subtitle: 'HR Management Platform', cover: 'HRMS' },
    NIDS: { subtitle: 'Network Security Tool', cover: 'NIDS' },
  },
  // Pull quote for the skills spread — taken verbatim from the About copy.
  pullQuote:
    'I build the parts of an application most people never see — the API layer, the schema underneath it, and the access rules that decide who is allowed to touch what.',
}

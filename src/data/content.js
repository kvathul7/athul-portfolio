// All site copy lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Athul K V',
  initials: 'AK',
  title: 'Software Engineer · Backend & Full-Stack Developer',
  location: 'Bangalore, India',
  email: 'kvathul27@gmail.com',
  phone: '+91 8086257339',
  github: 'https://github.com/kvathul7',
  githubHandle: 'kvathul7',
  linkedin: 'https://linkedin.com/in/athul-kv-16a3ab256',
  linkedinHandle: 'athul-kv-16a3ab256',
  resume: '/Athul_KV_Resume.pdf',
  positioning:
    'Computer Science Engineering graduate building production-style backend systems with Java, Spring Boot, React, and MySQL — REST APIs, relational schema design, and secure role-based applications.',
  about: [
    'I build the parts of an application most people never see — the API layer, the schema underneath it, and the access rules that decide who is allowed to touch what.',
    'Most of what I know came from building an enterprise HRMS end to end: twelve modules, four user roles, JWT authentication, and a normalized MySQL schema behind a React frontend. Working through that gave me a real feel for how a backend holds together once it stops being a tutorial.',
    'I am currently a software development intern at ORGGU, working across web, mobile, and cloud under mentor guidance. I care about clean code, readable commits, and shipping things that actually work.',
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
    current: true,
    stack: ['Web Development', 'Mobile', 'Cloud', 'Fork', 'Bitbucket', 'CloudCode'],
    bullets: [
      'Engaged in a mentor-guided, learning-focused internship spanning web development, mobile app development, and cloud technologies.',
      'Working on real-world projects under mentor guidance, applying AI tools such as ChatGPT and Claude to support learning and development.',
      'Using Fork (Git GUI client) and Bitbucket for source control and repository management, and CloudCode for cloud-based development workflows.',
    ],
  },
  {
    company: 'Pentagon Space',
    role: 'Full-Stack Web Development Training (Course-Based Internship)',
    location: 'Bengaluru',
    period: '6 Months',
    current: false,
    stack: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL'],
    bullets: [
      'Completed a structured, course-based training internship covering full-stack web development, building both frontend interfaces and backend logic.',
      'Integrated MySQL databases into web applications, designing schemas and queries for reliable data persistence.',
      'Practiced debugging, code review, and backend development workflows through hands-on exercises.',
      'Collaborated using a Git/GitHub feature-branch workflow, including pull requests and peer code review.',
    ],
  },
]

export const projects = [
  {
    featured: true,
    name: 'Enterprise Human Resource Management System',
    short: 'HRMS',
    year: 'June 2026',
    role: 'Full Stack Developer',
    repo: 'https://github.com/kvathul7/hrms',
    repoLabel: 'github.com/kvathul7/hrms',
    summary:
      'An enterprise-grade HR platform covering the full employee lifecycle — twelve modules behind a single role-aware React interface, served by a Spring Boot REST API over a normalized MySQL schema.',
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'React.js (Vite)',
      'Material UI',
      'MySQL',
      'Hibernate/JPA',
      'Maven',
      'REST APIs',
      'Axios',
      'Chart.js',
    ],
    stats: [
      { value: '12', label: 'Modules' },
      { value: '4', label: 'User roles' },
      { value: '15+', label: 'REST endpoints' },
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
      'Developed an enterprise-grade HRMS platform with 12 modules using Java Spring Boot, React.js, and MySQL.',
      'Implemented JWT-based authentication and role-based access control (RBAC) for 4 user roles using Spring Security.',
      'Designed and consumed 15+ RESTful API endpoints across modules, integrating them into a React frontend via Axios.',
      'Designed and managed a normalized MySQL relational schema with Hibernate/JPA for efficient, scalable persistence.',
      'Created responsive analytics dashboards with real-time employee statistics using Material UI and Chart.js.',
      'Implemented CRUD operations, employee search & filtering, form validation, and secure role-based data access across all modules.',
      'Maintained source control on GitHub with structured commits, enabling traceable, incremental feature development.',
    ],
  },
  {
    featured: false,
    name: 'Network Intrusion Detection System',
    short: 'NIDS',
    year: '2025',
    role: 'Developer',
    repo: 'https://github.com/kvathul7/NIDS',
    repoLabel: 'github.com/kvathul7/NIDS',
    summary:
      'An end-to-end network security application that analyses traffic in real time and surfaces what it finds on a live visualization dashboard.',
    stack: ['Python', 'Data Visualization', 'Real-Time Analytics'],
    stats: [],
    modules: [],
    roles: [],
    bullets: [
      'Designed and implemented an end-to-end network security application with real-time traffic analysis and a live visualization dashboard.',
      'Delivered a fully functional solution from requirements gathering through deployment, covering the complete software development lifecycle (SDLC).',
    ],
  },
]

export const skills = [
  { group: 'Languages', items: ['Java'] },
  {
    group: 'Backend',
    items: ['Spring Boot', 'Spring Security', 'JWT', 'REST APIs', 'Hibernate/JPA', 'Maven'],
  },
  {
    group: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js (Vite)', 'Material UI', 'Axios', 'Chart.js'],
  },
  { group: 'Databases', items: ['MySQL'] },
  {
    group: 'Tools',
    items: [
      'Git',
      'GitHub (feature-branch, pull requests)',
      'Fork',
      'Bitbucket',
      'CloudCode',
      'VS Code',
      'Eclipse',
    ],
  },
  {
    group: 'AI Platforms',
    items: ['ChatGPT', 'Claude', 'Gemini', 'GitHub Copilot', 'Cursor', 'Bolt.new'],
  },
  {
    group: 'Strengths',
    items: [
      'Prompt engineering',
      'AI-assisted development',
      'Communication',
      'Leadership',
      'Time management',
    ],
  },
]

export const education = [
  {
    school: 'Shree Devi Institute of Technology, VTU',
    detail: 'B.E. Computer Science Engineering',
    result: '70%',
    period: 'Expected 2026',
  },
  {
    school: 'CKNS GHSS Pilicode',
    detail: 'Higher Secondary (Class XII)',
    result: '85%',
    period: '',
  },
  {
    school: 'CKNS GHSS Pilicode',
    detail: 'SSLC (Class X)',
    result: '96%',
    period: '',
  },
]

export const certification = {
  name: 'Java Full Stack Development',
  issuer: 'Pentagon Space, Bangalore',
  duration: '6 Months',
  status: 'Completed',
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
  badge: 'Open to software engineer roles · Bangalore, India · ',
  badgeLines: ['Open', 'for', 'work'],
  // Hero metadata strip, drawn from facts already on the page.
  meta: [
    { k: 'Based in', v: 'Bangalore, India' },
    { k: 'Focus', v: 'Backend / Full-Stack' },
    { k: 'Degree', v: 'B.E. CSE — VTU' },
    { k: 'Status', v: 'Open to roles' },
  ],
  // Short display labels for the project covers, keyed by project.short.
  projectMeta: {
    HRMS: { subtitle: 'Enterprise HR Platform', cover: 'HRMS' },
    NIDS: { subtitle: 'Network Security Tool', cover: 'NIDS' },
  },
  // Pull quote for the skills spread — taken verbatim from the About copy.
  pullQuote:
    'I build the parts of an application most people never see — the API layer, the schema underneath it, and the access rules that decide who is allowed to touch what.',
}

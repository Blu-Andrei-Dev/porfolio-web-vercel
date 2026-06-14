export const portfolio = {
  candidate: {
    name: 'Blu Andrei R. Chumbingco',
    role: '.NET + React JS Software Engineer',
    targetRole: 'Mid to Senior .NET / React Developer',
    location: 'Pasig City, Philippines',
    email: 'blu.chumbingco@gmail.com',
    phone: '+63 961 320 4074',
    github: '',
    linkedin: 'https://www.linkedin.com/in/blu-andrei-chumbingco/',
    resume: '/Blu_Andrei_Chumbingco_Resume.pdf',
    summary:
      'Software Engineer and Application Developer with 3+ years of experience building web, desktop, API, and middleware solutions for financial services and land registration environments.',
    elevatorPitch:
      'I build practical business systems with C#, .NET Framework, .NET Core, ASP.NET, .NET MVC, Razor Pages, React.js, SQL, Sybase, REST/SOAP APIs, data migration, third-party integrations, and production support practices that help teams ship reliably.',
    availability:
      'Open to mid-to-senior full-stack, .NET, application developer, API integration, and middleware roles.',
    coreStack: '.NET 4-8, React.js, SQL, Sybase, REST/SOAP APIs',
  },
  navItems: [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ],
  metrics: [
    {
      value: '3+ yrs',
      label: 'Engineering Experience',
      detail: 'Web, desktop, API, and middleware solutions',
    },
    {
      value: '.NET 4-8',
      label: 'Core Back End',
      detail: 'C#, ASP.NET, .NET Framework, .NET Core',
    },
    {
      value: 'React.js',
      label: 'Front-End Stack',
      detail: 'JavaScript, Tailwind, Bootstrap, HTML, CSS',
    },
    {
      value: 'Finance + Land',
      label: 'Business Domains',
      detail: 'Financial services and land registration systems',
    },
  ],
  expertise: [
    {
      title: 'Enterprise Application Development',
      description:
        'Build and maintain business applications across web, desktop, API, and middleware layers for regulated and process-heavy environments.',
      points: ['Web apps', 'Desktop apps', 'Internal platforms', 'Production support'],
    },
    {
      title: '.NET API and Middleware Engineering',
      description:
        'Develop API components, middleware applications, API adapters, and internal connectivity for partner integrations and business workflows.',
      points: ['ASP.NET', 'REST APIs', 'SOAP APIs', 'API adapters'],
    },
    {
      title: 'Data Migration, Sync, and Reporting',
      description:
        'Support database migration, data extraction, synchronization, executive reporting, and internal data display across SQL and Sybase platforms.',
      points: ['SQL Server', 'Sybase', 'Transact-SQL', 'Tableau'],
    },
    {
      title: 'Performance and Delivery Ownership',
      description:
        'Analyze bottlenecks, improve background processing, prepare release documentation, support deployments, and work inside Agile/Scrum delivery cycles.',
      points: ['Performance tuning', 'Multi-threading', 'Hangfire', 'Release support'],
    },
  ],
  projects: [
    {
      name: 'EIS - Executive Information System',
      type: 'Web Portal + API + Middleware',
      summary:
        'Executive reporting platform with a web portal, API layer, middleware, internal data display, data migration, and synchronization across database platforms.',
      problem:
        'Executive and internal reporting workflows needed reliable access to synchronized data across multiple database platforms and application layers.',
      contribution:
        'Worked on .NET 4-8 components, React.js interfaces, Hangfire background processing, Tailwind UI, Tableau reporting support, Sybase data sources, and SQL-backed synchronization workflows.',
      impact:
        'Supported better internal visibility and reporting reliability by connecting web, API, middleware, migration, and synchronization components into one platform.',
      stack: ['.NET 4-8', 'React.js', 'Hangfire', 'Tailwind', 'Tableau', 'Sybase', 'SQL'],
      highlights: ['Executive reporting', 'Data synchronization', 'Background jobs', 'Cross-database workflows'],
      repo: '',
      demo: '',
      status: 'Confidential enterprise work',
    },
    {
      name: 'API Adapter',
      type: 'Third-Party Integration Platform',
      summary:
        'API manager for third-party business partner integrations, centralized logging, and internal application connectivity.',
      problem:
        'Business partner connectivity required a consistent integration layer that could manage requests, track activity, and connect internal applications.',
      contribution:
        'Developed and supported API adapter components using .NET Framework and SQL, with emphasis on partner connectivity, logging, and maintainable integration flow.',
      impact:
        'Helped standardize third-party integrations and improved traceability for connected business applications through centralized logging.',
      stack: ['.NET Framework 4', 'C#', 'SQL', 'REST APIs', 'Third-party APIs', 'Logging'],
      highlights: ['Partner integrations', 'Centralized logs', 'Internal connectivity', 'Reusable adapter layer'],
      repo: '',
      demo: '',
      status: 'Confidential enterprise work',
    },
    {
      name: 'IClick 3.0 / eCebuana',
      type: 'Financial Services Applications',
      summary:
        'Financial applications supporting pawn-broking, domestic and international remittance, micro-savings, bills payment, prepaid e-loading, micro-insurance, mobile banking, remit-to-account, corporate payout, and collections services.',
      problem:
        'Financial service workflows needed maintainable application features, API connectivity, testing, debugging, and production-ready support across multiple service lines.',
      contribution:
        'Built maintainable .NET code, supported API components for partner connectivity, collaborated through Git-based workflows, and assisted in testing, debugging, documentation, and maintenance.',
      impact:
        'Contributed to production financial applications that supported multiple customer-facing and operations-facing service categories.',
      stack: ['.NET Framework 4', 'C#', 'SQL', 'GitLab', 'REST APIs', 'Financial Systems'],
      highlights: ['Remittance workflows', 'Bills payment', 'Collections', 'Partner API support'],
      repo: '',
      demo: '',
      status: 'Confidential enterprise work',
    },
    {
      name: 'NIS - Legacy Application Support',
      type: 'Legacy Modernization + Data Tools',
      summary:
        'Legacy application support initiative involving reverse engineering, bypass fixes, migration tools, and synchronization tooling.',
      problem:
        'Legacy application behavior needed to be understood, supported, and improved while reducing disruption to existing operational workflows.',
      contribution:
        'Reverse-engineered application behavior, built bypass fixes, created migration utilities, and supported synchronization tooling using .NET 6, Sybase, and SQL.',
      impact:
        'Reduced support risk around legacy workflows by improving understanding, maintainability, migration capability, and data synchronization support.',
      stack: ['.NET 6', 'C#', 'Sybase', 'SQL', 'Data Migration', 'Synchronization'],
      highlights: ['Reverse engineering', 'Bypass fixes', 'Migration tools', 'Legacy support'],
      repo: '',
      demo: '',
      status: 'Confidential enterprise work',
    },
  ],
  experience: [
    {
      role: 'Application Developer',
      company: 'Land Registration Systems, Inc.',
      period: 'Jul 2024 - Mar 2026',
      summary:
        'Developed and maintained web and middleware applications supporting land registration processes and internal system workflows.',
      achievements: [
        'Optimized application performance by analyzing bottlenecks and implementing targeted technical solutions.',
        'Implemented multi-threaded processing in existing applications to improve background processing and application throughput.',
        'Built and supported data migration and synchronization components across database platforms.',
        'Prepared effort estimates, technical specifications, release notes, testing documentation, and deployment support across multiple environments.',
        'Participated in Agile cycles including sprint planning, daily stand-ups, and retrospectives.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Networld Capital Ventures Inc.',
      period: 'Aug 2022 - Jun 2024',
      summary:
        'Developed scalable and maintainable financial applications supporting pawn-broking, remittance, insurance, bills payment, collections, payout, e-loading, and mobile banking services.',
      achievements: [
        'Built maintainable .NET application code for financial service workflows and internal business operations.',
        'Integrated third-party APIs and supported API components for business partner connectivity.',
        'Used Git-based version control and Agile practices to collaborate with teams and deliver software updates.',
        'Assisted in testing, debugging, documentation, and maintenance of production software applications.',
      ],
    },
  ],
  skillGroups: [
    {
      name: 'Languages and Frameworks',
      skills: ['C#', '.NET Framework', '.NET Core', 'ASP.NET', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Flutter'],
    },
    {
      name: 'UI and Styling',
      skills: ['React Components', 'Bootstrap', 'Tailwind', 'Responsive UI', 'HTML/CSS', 'JavaScript UI Logic'],
    },
    {
      name: 'Database and Data Work',
      skills: ['MS SQL Server', 'MySQL', 'Sybase', 'Transact-SQL', 'Data Migration', 'Data Extraction', 'Synchronization'],
    },
    {
      name: 'APIs and Integration',
      skills: ['RESTful APIs', 'SOAP APIs', 'Third-party APIs', 'API Adapters', 'Middleware Apps', 'Centralized Logging'],
    },
    {
      name: 'Tools and Platforms',
      skills: ['GitLab', 'GitHub', 'Visual Studio', 'VS Code', 'AWS Cloud Services', 'Tableau', 'Hangfire', 'Microsoft Office'],
    },
    {
      name: 'Delivery Practices',
      skills: ['Agile', 'Scrum', 'Waterfall', 'Sprint Planning', 'Daily Stand-ups', 'Retrospectives', 'Testing', 'Debugging', 'Release Notes', 'Deployment Support'],
    },
  ],
  credentials: [
    {
      title: 'Education',
      items: [
        'Bachelor of Science in Information Technology - Pamantasan ng Lungsod ng Pasig, 2018 - 2022',
        'TECHVOC ICT - Computer Systems Servicing Strand - Jose Rizal University, 2016 - 2018',
      ],
    },
    {
      title: 'Certifications and Training',
      items: [
        '55320AC: Programming with HTML, CSS & JavaScript',
        '55339AC: Programming in C#',
        '55352AC: SQL Database / Introduction to SQL Database',
        'DP-080T00AC: Querying Data with Microsoft Transact-SQL',
        'National Certificate II in Computer Systems Servicing',
        'Flutter Training, 2022',
        'Application Development Technologies - Microsoft Programming, NTT DATA, 2022',
      ],
    },
  ],
  principles: [
    {
      title: 'Make systems maintainable',
      description:
        'I prefer clear application structure, readable implementation, useful documentation, and practical patterns that help teams maintain systems after release.',
    },
    {
      title: 'Protect integration reliability',
      description:
        'For API and middleware work, I focus on traceability, logging, consistent contracts, and careful handling of partner and internal application connectivity.',
    },
    {
      title: 'Improve performance with intent',
      description:
        'I look for bottlenecks first, then apply targeted fixes such as query improvements, background processing, and multi-threading where the system benefits.',
    },
  ],
};

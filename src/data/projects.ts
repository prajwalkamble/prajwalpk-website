import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "queenbee-core-server",
    title: "Offline-First Self-Hosted Server",
    description:
      "Offline-first server running on a repurposed laptop. When the machine is off, visitors are handed to a static fallback instead of a browser error — and carried back automatically the moment it returns.",
    icon: "/skills/html.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/prajwalkamble/queenbee-core-server",
    url: "https://prajwalkamble.github.io/queenbee-core-server/",
    tags: ["Linux", "Nginx", "Tailscale", "Parrot OS", "JavaScript", "GitHub Pages"],
  },
  {
    id: "iportfolio-pratik",
    title: "Pratik Kamble's Portfolio",
    description:
      "A Technical Writer's Portfolio.",
    icon: "/skills/html.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://techwriterpratik.in",
    tags: ["HTML", "CSS", "JavaScript", "Web3Forms"],
  },
  {
    id: "ai-finance-manager",
    title: "Whealth",
    description:
      "An AI based finance manager that keeps track of your personal finances and gives proper insights using AI.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/prajwalkamble/Whealth",
    url: "https://whealth-finance.vercel.app/",
    tags: ["Next.js", "Shadcn UI", "Clerk", "Supabase"],
  },
  {
    id: "e-commerce-app",
    title: "E-commerce App",
    description:
      "An e-commerce web application developed using React.js, Bootstrap, Redux, and Spring Boot.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/prajwalkamble/eTrendHive",
    tags: ["React.js", "Redux", "Bootstrap", "Spring Boot"],
  },
  {
    id: "bug-tracking-application",
    title: "Bug Tracking Application",
    description:
      "A simple Bug Tracking web application developed using React.js, Bootstrap, Redux and Spring Boot.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/prajwalkamble/Simple-Bug-Tracker",
    tags: ["React.js", "Redux", "Bootstrap", "Spring Boot"],
  },
];
export default projects;

// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "a-radiator";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =

  "DevOps/Platform Engineer based in Manchester 🐝 who enjoys learning new tech, homelab and automation. Improving companies' lives through reliable pipelines, observability, clean automation and teaching. Love dabbling in newer technologies such as this! Running this via Github REST API, React and Github Pages.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  // Cloud & Infrastructure
  {
    id: 1,
    skill: <Icon icon="logos:aws" className="display-4" />,
    name: "AWS",
  },
  {
    id: 2,
    skill: <Icon icon="logos:aws-lambda" className="display-4" />,
    name: "Lambda",
  },
  {
    id: 3,
    skill: <Icon icon="logos:cloudflare-icon" className="display-4" />,
    name: "Cloudflare",
  },
  // Container Orchestration
  {
    id: 4,
    skill: <Icon icon="logos:docker-icon" className="display-4" />,
    name: "Docker",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:kubernetes" className="display-4" />,
    name: "Kubernetes",
  },
  {
    id: 6,
    skill: <Icon icon="logos:helm" className="display-4" />,
    name: "Helm",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:istio" className="display-4" />,
    name: "Istio",
  },
  // GitOps & CI/CD
  {
    id: 8,
    skill: <Icon icon="logos:git-icon" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="mdi:source-branch" className="display-4" />,
    name: "ArgoCD",
  },
  {
    id: 10,
    skill: <Icon icon="logos:github-actions" className="display-4" />,
    name: "GitHub Actions",
  },
  {
    id: 11,
    skill: <Icon icon="logos:jenkins" className="display-4" />,
    name: "Jenkins",
  },
  // Infrastructure as Code
  {
    id: 12,
    skill: <Icon icon="logos:terraform-icon" className="display-4" />,
    name: "Terraform",
  },
  {
    id: 13,
    skill: <Icon icon="logos:ansible" className="display-4" />,
    name: "Ansible",
  },
  // Monitoring & Observability
  {
    id: 14,
    skill: <Icon icon="logos:prometheus" className="display-4" />,
    name: "Prometheus",
  },
  {
    id: 15,
    skill: <Icon icon="logos:grafana" className="display-4" />,
    name: "Grafana",
  },
  // Programming Languages
  {
    id: 16,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 17,
    skill: <Icon icon="logos:gopher" className="display-4" />,
    name: "Go",
  },
  {
    id: 18,
    skill: <Icon icon="simple-icons:gnubash" className="display-4" />,
    name: "Bash",
  },
  // Systems & Services
  {
    id: 19,
    skill: <Icon icon="logos:linux-tux" className="display-4" />,
    name: "Linux",
  },
  {
    id: 20,
    skill: <Icon icon="logos:nginx" className="display-4" />,
    name: "Nginx",
  },
  {
    id: 21,
    skill: <Icon icon="logos:mysql-icon" className="display-4" />,
    name: "MySQL",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xzzyzoqz";

// Footer icons theme (light or dark)
export const footerTheme = "dark";

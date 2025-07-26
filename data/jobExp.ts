interface JobRole {
  title: string;
  start: string;
  end: string;
  duration: string;
  location: string;
  type: string;
  statusColor?: string; // Tailwind class for the border color of the dot
  description?: string;
  technologies?: string[];
}

interface CompanyExperience {
  name: string;
  color: string; // Tailwind class
  roles: JobRole[];
}

export const jobExp: CompanyExperience[] = [
  {
    name: "Clapmi",
    color: "bg-blue-500",
    roles: [
      {
        title: "Frontend Web Developer",
        start: "Febuary 2025",
        end: "March 2025",
        duration: "1 month",
        location: "Remote, Nigeria",
        type: "Contract",
        statusColor: "border-blue-500",
        description:
          "Delivered pixel-perfect responsive UI components from Figma designs with custom form validation, improving user registration completion • Built advanced image editing capabilities (crop, rotate, resize) and emoji integration, enhancing user content creation experience.",
        technologies: ["Nuxt.js", "Typescript", "Sass", "Scss", "Vuetify"],
      },
    ],
  },
  {
    name: "Ecolabz",
    color: "bg-green-500",
    roles: [
      {
        title: "Frontend Web Developer",
        start: "June 2022",
        end: "Jan 2023",
        duration: "7 months",
        location: "Remote",
        type: "Contract",
        statusColor: "border-green-500",
        description:
          "Collaborated with the UI/UX designer to develop a responsive and visually appealing website, ensuring a 20% improvement in user engagement based on usability testing feedback. • Integrated the Mailchimp API, increasing product accessibility and streamlining communication, resulting in a 10% boost in email campaign click-through rates. • Collaborated with cross-functional teams to deliver projects on time, utilizing agile tools like Jira to improve task tracking efficiency.",
        technologies: [
          "React.js",
          "Firebase",
          "Vercel",
          "Mailchimp API",
          "Sass",
          "Scss",
        ],
      },
    ],
  },
  {
    name: "Rendex",
    color: "bg-orange-500",
    roles: [
      {
        title: "Web Developer Intern",
        start: "December 2021",
        end: "May 2022",
        duration: "5 months",
        location: "Benin, Nigeria",
        type: "Full - Time",
        statusColor: "border-orange-500",
        description:
          "Utilized Laravel, Vue.js, and MySQL to build the agricultural inventory system, and automated reporting features. • Enhanced website functionality and visual appeal for client websites, contributing to a 12% increase in user retention. • Co-developed an agricultural inventory management system with a team of three developers, reducing manual inventory tracking errors by 30% and cutting processing time by 40%.",
        technologies: ["Laravel", "PHP", "MYSQL", "Blade", "CSS"],
      },
      {
        title: "Frontend Web Developer",
        start: "March 2021",
        end: "December 2021",
        duration: "9 months",
        location: "Benin, Nigeria",
        type: "Full-Time",
        statusColor: "border-green-500",
        description:
          "Collaborated with the ui/ux designer to build the website, maintainable code for Rendex web projects",
        technologies: ["Javascript", "JQuery", "Vue.js", "Bootstrap", "CSS"],
      },
    ],
  },
];

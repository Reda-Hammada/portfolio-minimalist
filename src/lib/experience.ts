interface Project {
  project_name: string;
  project_description: string;
  used_stack: string[];
}

interface Experience {
  company_name: string;
  work_years: string;
  projects: Project[];
}

export const experiences: Experience[] = [
  {
    company_name: "Terabyte Software - Frontend Developer",
    work_years: "2023 – PRESENT",
    projects: [
      {
        project_name: "INVOLV3",
        project_description:
          "INVOLV3 is a danish software solution that generates valuable insights through GAP assessments to assist customers in making informed purchasing decisions",
        used_stack: [
          "JavaScript",
          " React.js",
          " Dva.js",
          "Ant design",
          "Less",
          " Redux saga ",
        ],
      },
      {
        project_name: "Ajiel",
        project_description:
          "Ajiel is a SaaS solution for comprehensive payroll and personnel management tailored to Moroccan legislation and integrating innovative features such as decentralized absence management",
        used_stack: [
          "Typescript",
          "Next.js",
          "Material UI",
          "Schadcn",
          "Tailwind",
          "react query",
          "zustand ",
        ],
      },
      {
        project_name: "Better2know",
        project_description:
          "Better2Know An online booking system that facilitates the process of booking the right clinical test for patients",
        used_stack: [
          "Vue.js",
          "Nuxt.js",
          "Typescript",
          "Tailwind css",
          "pinia",
        ],
      },
    ],
  },
];

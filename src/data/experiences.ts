import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Full Stack Development Intern",
    company: "AI Variant",
    startDate: "Sept 2024",
    endDate: "Dec 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Spearheaded website development and enhancements for company portals.",
      "Prioritized clean, reusable code with modern tech stacks.",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Collaborated with senior team members to meet and exceed project goals.",
    ],
  },
  {
    designation: "Data Science Intern",
    company: "AI Variant",
    startDate: "Mar 2023",
    endDate: "Jun 2023",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Conducted Exploratory Data Analysis on Global Development Measurement dataset to identify patterns and insights.",
      "Preprocessed the data by cleaning, transforming, and scaling features to ensure suitability for clustering.",
      "Built a clustering model using suitable algorithms and evaluated its performance using appropriate metrics.",
      "Incorporated feedback to refine the model and prepared it for deployment in a real-world scenario.",
    ],
  },
];

export default experiences;

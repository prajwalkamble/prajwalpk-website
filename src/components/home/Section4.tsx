import React from "react";
import ResponsiveBox from "../core/ResponsiveBox";
import ConstrainedBox from "../core/constrained-box";
import SectionTitle from "../common/SectionTitle";
import { Timeline } from "../common/timeline";
import education from "@/data/education";
import EducationItem from "./ui/EducationItem";

const HomeSection4 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15]"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Education</SectionTitle>

        <Timeline
          data={education.map((edu, i) => ({
            title: edu.startDate
              ? `${edu.startDate} - ${edu.endDate || "Present"}`
              : edu.endDate || "Present",
            content: <EducationItem key={`education-${i}`} data={edu} />,
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection4;

import React from "react";
import ProjectItem from "./ProjectItem";
import jobSearchImg from "../assets/jobsearch.jpg";
import placeHolderImg from "../assets/placeholder.jpg";

export const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={jobSearchImg} title="Job Search App" />
        <ProjectItem img={placeHolderImg} title="Placeholder" />
        <ProjectItem img={placeHolderImg} title="Placeholder" />
        <ProjectItem img={placeHolderImg} title="Placeholder" />
        {/* <ProjectItem img={jobSearchImg} title="Job Search App" />
        <ProjectItem img={jobSearchImg} title="Job Search App" /> */}
      </div>
    </div>
  );
};
export default Projects;

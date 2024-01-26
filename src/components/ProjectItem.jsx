import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative group flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0">
        <h3 className="text-2xl font-bold text-white tracking-wider mb-2">{title}</h3>
        <p className="text-white mb-4">React Js</p>
        <a href="/">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;

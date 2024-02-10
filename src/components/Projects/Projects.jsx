import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectDetailsCard from "../ProjectDetailsCard/ProjectDetailsCard";
import "./Projects.css";

function Projects() {
  const [data, setData] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/anirudh-mk/repos", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB}`,
        },
      })
      .then(function (response) {
        setData(response.data);
        setDisplayedProjects(data.slice(0, 2));
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  const handleToggleDisplay = () => {
    if (showAll) {
      setDisplayedProjects(data.slice(0, 2));
    } else {
      setDisplayedProjects(data);
    }
    setShowAll(!showAll);
  };

  return (
    <div className="py-[20px]">
      <h1 className="text-[22px] font-bold pl-[20px] pb-[20px]">Projects</h1>
      <ul>
        {displayedProjects.map((project) => (
          <ProjectDetailsCard key={project.id} data={project} />
        ))}
      </ul>
      <div className="flex justify-center py-[10px]">
        <button
          className="w-[200px] h-[40px] text-center pointer show-more-button"
          onClick={handleToggleDisplay}
        >
          <p className="text-[14px] text-black font-semibold">
            {showAll ? "Show Less" : "Show More"}
          </p>
        </button>
      </div>
    </div>
  );
}

export default Projects;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectDetailsCard from "../ProjectDetailsCard/ProjectDetailsCard";

function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/anirudh-mk/repos", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB}`,
        },
      })
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);
  return (
    <div className="py-[20px]">
      <h1 className="text-[22px] font-bold pl-[20px]">Projects</h1>
      <ul>
        {data.map((project) => (
          <ProjectDetailsCard key={project.id} data={project} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;

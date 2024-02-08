import React from "react";
import "./ProjectDetailsCard.css";

function ProjectDetailsCard({ data }) {
  return (
    <div className="my-[20px] mx-[40px] bg-[#6E6F64] p-[20px] rounded-xl project-details-card">
      <a href={data.html_url}>
        <h1 className="text-white text-[20px] font-semibold overflow-text">
          {data.name
            .replace(/[_-]/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </h1>
        <p className="text-white text-[18px] py-[10px] overflow-text">
          {data.description == null
            ? data.name
                .replace(/[_-]/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())
            : data.description}
        </p>
        <p className="text-white text-[18px] pt-[10px] text-right">
          <i>{data.language == null ? "None" : data.language}</i>
        </p>
      </a>
    </div>
  );
}

export default ProjectDetailsCard;

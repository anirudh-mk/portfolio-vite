import React from "react";

function ProjectDetailsCard({ data }) {
  return (
    <div className="my-[20px] mx-[40px] bg-[#6E6F64] p-[20px] rounded-xl">
      <a href={data.html_url}>
        <h1 className="text-white text-[20px] font-semibold">
          {data.name
            .replace(/[_-]/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </h1>
        <p className="text-white text-[18px]">
          {data.description == null
            ? data.name
                .replace(/[_-]/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())
            : data.description}
        </p>
        <p className="text-white text-[18px] text-right">
          <i>{data.language}</i>
        </p>
      </a>
    </div>
  );
}

export default ProjectDetailsCard;

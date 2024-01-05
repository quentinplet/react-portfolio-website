import React from "react";

const WorksItem = ({ image, title, category, links }) => {
  return (
    <div className="work__card">
      <a href={links.demo} className="work__img__link" target="_blank">
        <img src={image} alt={title} className="work__img" />
      </a>
      <h3 className="work__title">{title}</h3>
      <div className="Works__links">
        <a href={links.demo} className="work__button" target="_blank">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href={links.github} className="work__button" target="_blank">
          Github{" "}
          <i className="bx uil uil-github-alt work__button-icon-github"></i>
        </a>
      </div>
    </div>
  );
};

export default WorksItem;

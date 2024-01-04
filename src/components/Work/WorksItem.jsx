import React from "react";

const WorksItem = ({ image, title, category }) => {
  return (
    <div className="work__card">
      <a href="#" className="work__img__link">
        <img src={image} alt={title} className="work__img" />
      </a>
      <h3 className="work__title">{title}</h3>
      <a href="#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItem;

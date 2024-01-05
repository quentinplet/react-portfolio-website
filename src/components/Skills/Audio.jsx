import React from "react";

const Audio = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Audio developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Max</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Faust</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">PureData</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group"></div>
      </div>
    </div>
  );
};

export default Audio;

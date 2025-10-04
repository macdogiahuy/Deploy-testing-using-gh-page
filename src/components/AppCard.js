import React from 'react';

const AppCard = ({ name, subtext, svg }) => (
  <div className="app-card">
    <span>
      {svg}
      {name}
    </span>
    <div className="app-card__subtext">{subtext}</div>
    <div className="app-card-buttons">
      <button className="content-button status-button">Update</button>
      <div className="menu"></div>
    </div>
  </div>
);

export default AppCard;

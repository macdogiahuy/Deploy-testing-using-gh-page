import React from 'react';

const LeftSide = ({ switchSection }) => (
  <div className="left-side">
    <div className="side-wrapper">
      <div className="side-title">Apps</div>
      <div className="side-menu">
        <a href="#">All Apps</a>
        <a href="#">
          Updates <span className="notification-number updates">3</span>
        </a>
      </div>
    </div>
    <div className="side-wrapper">
      <div className="side-title">Categories</div>
      <div className="side-menu">
        <a href="#">Photography</a>
        <a href="#">Graphic Design</a>
        <a href="#">Video</a>
        <a href="#">Illustrations</a>
        <a href="#">UI/UX</a>
        <a href="#">3D/AR</a>
      </div>
    </div>
    <div className="side-wrapper">
      <div className="side-title">Resource Links</div>
      <div className="side-menu">
        <a href="#">Stock</a>
        <a href="#">Tutorials</a>
        <a href="#" onClick={() => switchSection('profile')}>
          Portfolio
        </a>
        <a href="#">Behance</a>
        <a href="#">Social Forum</a>
      </div>
    </div>
  </div>
);

export default LeftSide;

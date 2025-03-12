import React from 'react';
import ContentWrapper from './ContentWrapper';
import ProfileCard from './ProfileCard';

const MainContainer = ({ activeSection }) => {
  return (
    <div className="main-container">
      {activeSection === 'home' && <ContentWrapper />}
      {activeSection === 'profile' && <ProfileCard />}
      {/* Thêm các section khác nếu cần */}
    </div>
  );
};

export default MainContainer;

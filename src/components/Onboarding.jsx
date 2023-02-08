import '../Onboarding.css';
import React from 'react';

import LeftSection from './LeftSection';
import RightComponent from './RightComponent';
// import Switch from './Switch';

function Onboarding() {
  return (
    <div className="container flex text-inter">
      <LeftSection />
      <RightComponent/>
      
    </div>
  );
}

export default Onboarding;

import React from 'react'
import LeftSection from './LeftSection';
import ResidencyForm from './Forms/ResidencyForm';

function Residency() {
  
  return (
    <div className="containers flex">
      <LeftSection />
      <ResidencyForm />
    </div>
  );
}

export default Residency;

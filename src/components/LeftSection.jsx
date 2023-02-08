import React from 'react'
import logoText from '../images/Oasis..png';
import logo from '../images/Logo.png';
import dots from '../images/dots.png';
import quote from '../images/quote.png';
import check from '../images/Check.png';
import Edge from '../images/Edge.png';


function LeftSection() {
  return (
  
      <div
        className="left-section w-[41.625rem] h-[64rem] bg-blend-soft-light mix-blend-overlay"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Spot for logo and logotext */}
        <div className="logo-logotext">
          <div className="flex items-center mt-[4rem]">
            <div>
              <img src={logo} alt="" className="ml-[4.47rem]" />
            </div>
            <div>
              <img src={logoText} alt="" className="ml-[0.649rem]" />
            </div>
          </div>
        </div>
        {/* Spot for dots */}
        <div className="dots">
          <img src={dots} alt="" className="ml-[26rem] mt-[7.5rem]" />
        </div>

        {/* Spot for quote */}
        <div className="quote">
          <img src={quote} alt="" className="ml-[5.125rem] mt-[3.875rem]" />
          <h3 className="text-white font-normal w-[29.563rem] text-left text-xl mt-[2.5rem] ml-[5.125rem] leading-[2.375rem] h-[11.875rem]">
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
          </h3>
          <div className="author flex items-center ml-[5.125rem] mt-[1.375rem] space-x-[0.604rem]">
            <p className="font-medium text-white text-lg">Vincent Obi</p>
            <div>
              <img src={check} alt="" />
            </div>
          </div>
        </div>
        {/* Place for edge */}
        <div className="edge">
          <img src={Edge} alt="" className="mt-[2.188rem] ml-[30.25rem]" />
        </div>
      </div>
  
  )
}

export default LeftSection
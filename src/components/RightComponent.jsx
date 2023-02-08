import React from 'react';
import arrow from '../images/Union.png';
import user from '../images/user.png';
import business from '../images/Vector.png';
import { Link } from 'react-router-dom';

function RightComponent() {
  return (
    <div className="right-sect">
      <div className="top-sign">
        <p className="text-gray text-lg mt-[4.375rem] ml-[25.688rem] font-medium">
          Already have an account?
          <span className="text-formBlue focus"> Sign In</span>
        </p>
      </div>

      <div className="pre-pick text-left ml-[7.938rem] mt-[8.438rem]">
        <h1 className="font-bold text-3xl mb-[0.625rem]">Join Us!</h1>
        <p className="font-normal text-gray w-[25.688rem] mb-[2.188rem]">
          To begin this journey, tell us what type of account you'd be opening.
        </p>

        <div className="pick">
          <Link to="/individual">
            <div className="top w-[26.625rem] mb-[1.75rem]">
              <button
                className="innerOne rounded-md hover:bg-hoverFocus hover:border border-formBlue flex items-center pt-[1.625rem] pl-[1.75rem] pb-[1.563rem] pr-[2.063rem]"
                style={{ borderColor: '#1565D8' }}
                // onClick={() => handleToggle('individual')}
              >
                <div>
                  <img
                    src={user}
                    alt=""
                    style={{
                      backgroundColor: '#1565D8',
                      marginRight: '2.75rem',
                      padding: '1rem',
                      borderRadius: '50px',
                    }}
                  />
                </div>
                <div className="on-top flex-column">
                  <h3 className="font-medium text-base text-left">
                    Individual
                  </h3>

                  <p className="text-gray text-left text-sm">
                    Personal account to manage all your activities.
                  </p>
                </div>
                <div>
                  <img src={arrow} alt="" style={{ marginLeft: '0.75rem' }} />
                </div>
              </button>
            </div>
          </Link>
          <div className="bottom  w-[26.625rem] mb-[1.75rem]">
            <div
              className="innerOne rounded-md hover:bg-hoverFocus hover:border border-formBlue flex items-center pt-[1.625rem] pl-[1.75rem] pb-[1.563rem] pr-[2.063rem]"
              // onClick={() => handleToggle('business')}
            >
              <div>
                <img
                  src={business}
                  alt=""
                  style={{
                    backgroundColor: 'white',
                    marginRight: '2.75rem',
                    padding: '1rem',
                    borderRadius: '50px',
                    border: '0.088rem solid #1565D8',
                  }}
                />
              </div>
              <div className="on-top flex-column">
                <h3 className="font-medium text-base">Business</h3>
                <p className="text-gray text-sm">
                  Own or belong to a company, this is for you.
                </p>
              </div>
              <div>
                <img src={arrow} alt="" style={{ marginLeft: '0.75rem' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightComponent;

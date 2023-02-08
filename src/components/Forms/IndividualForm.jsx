import React from 'react'
import {Link} from 'react-router-dom'
import back from '../../images/Back.png';
import google from '../../images/google.png';

function IndividualForm() {
  return (
    <div>
      <div className="top-sect flex">
          <Link to="/">
            <section className="top-sect mt-[4.734rem] text-left flex items-center">
              <div>
                <img src={back} alt="" className=" ml-[3.634rem]" />
              </div>
              <p className="ml-[0.884rem] text-base font-semibold pointer text-gray">
                Back
              </p>
            </section>
          </Link>
          <section className="top-sect right flex flex-col mt-[4.734rem] ml-[30.188rem]">
            <p className="font-medium text-sm text-step mb-[0.25rem]">
              STEP 01/03
            </p>
            <p className="font-semibold text-base text-gray">Personal Info.</p>
          </section>
        </div>
        {/* Main content */}
        <main className="ml-[7.938rem] text-left mt-[3.8rem] mr-[2.188rem]">
          <h1 className=" font-bold text-3xl text-black mb-[0.625rem]">
            Register Individual Account!
          </h1>
          <p className="font-normal text-lg text-gray w-[25.688rem] leading-7 mb-[2.5rem]">
            For the purpose of industry regulation, your details are required.
          </p>

          {/* Form */}
          <form action="" className="flex flex-col">
            {/* Fullname */}
            <label
              htmlFor=""
              className="font-medium text-base text-label mb-[0.875rem]"
            >
              Your fullname*
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="John Doe"
              className="focus:outline-none w-[26.625rem] border border-gray rounded-md py-[1.375rem] pl-[1.875rem] text-sm text-gray focus:border-formBlue focus:text-black focus:border-2 mb-[1.5rem]"
            />
            {/* Email */}
            <label
              htmlFor=""
              className="font-medium text-base text-label mb-[0.875rem]"
            >
              Email address*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="focus:outline-none w-[26.625rem] border border-gray rounded-md py-[1.375rem] pl-[1.875rem] text-sm text-gray focus:border-formBlue focus:text-black focus:border-2 mb-[1.5rem]"
            />
            {/* Password */}
            <label
              htmlFor=""
              className="font-medium text-base text-label mb-[0.875rem]"
            >
              Create password*
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="focus:outline-none w-[26.625rem] border border-gray rounded-md py-[1.375rem] pl-[1.875rem] text-sm text-gray focus:border-formBlue focus:text-black focus:border-2 mb-[1.5rem]"
            />
            <div className="flex ">
              <input type="checkbox" name="" id="" />
              <p className="text-label ml-[0.979rem] ">
                I agree to terms & conditions
              </p>
            </div>
            <Link to='/residency'>
            <button
              type="submit"
              className="py-[1.375rem] mt-[2.438rem] mb-[4.063rem] w-[26.625rem] rounded-md px-[9.188rem] bg-formBlue text-white text-base font-medium"
            >
              Register Account
            </button>
            </Link>
            {/* Register with Google */}
            <button
              type="submit"
              className=" text-center  h-[4rem] rounded-md drop-shadow-lg w-[26.625rem] rounded-md  bg-white"
            >
              <div className="flex items-center justify-center">
                <div>
                  <img src={google} alt="" className="grow-2 pl-[3rem]" />
                </div>
                <p className="text-black grow  w-[10rem] mr-[3rem] text-base  font-medium">
                  Register with Google
                </p>
              </div>
            </button>
          </form>
        </main>
    </div>
  )
}

export default IndividualForm
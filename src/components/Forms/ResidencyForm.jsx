import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { Link } from 'react-router-dom';
import back from '../../images/Back.png';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function ResidencyForm() {
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: '',
  });
  const [phone, setPhone] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountryState((prevState) => ({ ...prevState, loading: true }));
        // Fetch Data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState((prevState) => ({
          ...prevState,
          countries: response.data,
          loading: false,
        }));
      } catch (error) {
        setCountryState((prevState) => ({
          ...prevState,
          loading: false,
          errorMessage: 'Sorry, something went wrong',
        }));
      }
    };
    fetchData();
  }, []);
  const { loading, errorMessage, countries } = countryState;
  console.log('Loading', loading);
  console.log('Error Message', errorMessage);
  console.log('Countries', countries);
  return (
    <div>
      <div className="top-sect flex">
        <Link to="/individual">
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
            STEP 02/03
          </p>
          <p className="font-semibold text-base text-gray">Residency Info.</p>
        </section>
      </div>
      {/* Main content */}
      <main className="ml-[7.938rem] text-left mt-[3.8rem] mr-[2.188rem]">
        <h1 className=" font-bold text-3xl text-black mb-[0.625rem]">
          Complete Your Profile!
        </h1>
        <p className="font-normal text-lg text-gray w-[25.688rem] leading-7 mb-[2.5rem]">
          For the purpose of industry regulation, your details are required.
        </p>

        {/* Form */}
        <form action="" className="flex flex-col">
          {/* Phone Number */}
          <label
            htmlFor=""
            className="font-medium text-base text-label mb-[0.875rem]"
          >
            Phone Number*
          </label>

          <PhoneInput
            country={'eg'}
            inputStyle={{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#8692A6',

              width: '26.625rem',
            }}
            enableSearch={true}
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
          {/* Your Address */}
          <label
            htmlFor=""
            className="font-medium text-base text-label mb-[0.875rem]"
          >
            Your address*
          </label>
          <input
            type="address"
            name="address"
            placeholder="Please enter address"
            className="focus:outline-none w-[26.625rem] border border-gray rounded-md py-[1.375rem] pl-[1.875rem] text-sm text-gray focus:border-formBlue focus:text-black focus:border-2 mb-[1.5rem]"
          />
          {/* Country */}
          <label
            htmlFor=""
            className="font-medium text-base text-label mb-[0.875rem]"
          >
            Country of Residence*
          </label>

          <select className="focus:outline-none w-[26.625rem] border border-gray rounded-md py-[1.375rem] pl-[1.875rem] text-sm text-gray focus:border-formBlue focus:text-black focus:border-2 mb-[1.5rem]">
            <option>Select Country</option>
            {countries.map((item) => {
              return (
                <option key={uuidv4()} value={item.name.common}>
                  {item.name.common}
                </option>
              );
            })}
          </select>

          <button
            type="submit"
            className="py-[1.375rem] mt-[2.438rem] mb-[4.063rem] w-[26.625rem] rounded-md px-[9.188rem] bg-formBlue text-white text-base font-medium"
          >
            Save & Continue
          </button>
        </form>
      </main>
    </div>
  );
}

export default ResidencyForm;

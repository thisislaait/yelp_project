import React from 'react';
import airbnb from "../Assets/Airbnb.svg";
import booking from '../Assets/Booking.svg';
import plumguide from '../Assets/Plum Guide.svg';


const Partners = () => {
  return (        
        <div>
            <p className="pt-8">Partnered with:</p>
            <div className="partner-logos flex space-x-3 pt-2.5 pb-24 lg:pb-44">
                <img src={airbnb} alt="" className="w-40" />
                <img src={booking} alt="" className="w-40" />
                <img src={plumguide} alt="" className="w-28 md:w-36 lg:w-40" />
            </div>
    </div>
  );
};

export default Partners;
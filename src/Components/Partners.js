import React from 'react';
import airbnb from '../Assets/Airbnb.svg';
import booking from '../Assets/Booking.svg';
import plumguide from '../Assets/Plum Guide.svg';


const Partners = () => {
  return (        
        <div>
            <p>Partnered with:</p>
            <div className="partner-logos flex space-x-3 pt-2.5 pb-44">
                <img src={airbnb} alt="" className="w-40" />
                <img src={booking} alt="" className="w-40" />
                <img src={plumguide} alt="" className="w-40" />
            </div>
    </div>
  );
};

export default Partners;
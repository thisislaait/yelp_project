import React from 'react';
import checkmark from '../Assets/Checkmark.svg';


const Features = () => {
  return (        
    <ul className="list-none">
        <li className="text-sm lg:text-base md:text-base flex items-center text-gray-900 pb-1 pt-1.5">
        <img src={checkmark} alt="" className="w-4 md:w-5 lg:w-5 mr-2" /><span>Add your own camp suggestions.</span>
        </li>
        <li className="text-sm lg:text-base md:text-base flex items-center text-gray-900 pb-1">
        <img src={checkmark} alt="" className="w-4 md:w-5 lg:w-5 mr-2" /><span>Leave reviews and experiences.</span>
        </li>
        <li className="text-sm md:text-base lg:text-base flex items-center text-gray-900 pb-1">
        <img src={checkmark} alt="" className="w-4 md:w-5 lg:w-5 mr-2" /><span>See locations for all camps.</span>
        </li>
  </ul>
  );
};

export default Features;
import React from 'react';
import search from "../Assets/Search Icon.svg";


const Banner = () => {
  return (
    <div className="banner my-2.5 ml-12 mr-16 py-5 px-4 md:ml-20 md:mr-28" style={{ backgroundColor: 'rgb(247, 242, 231)' }}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-3 pl-5 pr-14">Welcome To YelpCamp!</h1>
        <p className="text-base md:text-lg pr-16 pl-5 md:pr-72 lg:pr-96 my-2 lg:text-xl">View our hand-picked campgrounds from all over the world, or add your own.</p>
        <form action="/search" method="GET" className="search-box relative sm:inline-block md:flex">
            <img src={ search } alt="search-box" className="absolute pl-10 pr-44 mt-7 md:mt-10 -translate-y-2/4" />
            <input type="text" name="query" placeholder="Search for camps" className="form py-1.5 px-14 md:py-2.5 md:px-8 md:pl-12 my-2.5 ml-4 rounded border border-gray-400 md:border-solid sm:block" />
            <button type="submit" className="py-1.5 px-32 md:py-4 md:px-12 ml-4 rounded md:mt-2.5 md:mb-3 text-white bg-black">Search</button>
        </form>
        <p className="py-4"><a href="/" className="text-blue-900 underline mx-4">Or add your own campground</a></p>
    </div>
         
  );
};


export default Banner;
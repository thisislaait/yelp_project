import React from 'react';
import Nav from "../Components/Nav";

const Campgrounds = () => {
  return (
    <main className="row">
      <Nav />
      <section>
        <div className="banner my-2.5 ml-12 mr-16 py-5 px-4 md:ml-20 md:mr-28" style={{ backgroundColor: 'rgb(247, 242, 231)' }}>
          <h1 className="text-3xl font-bold py-1 pl-5 pr-20">Welcome To YelpCamp!</h1>
          <p className="text-base pr-32 pl-5 md:pr-80">View our hand-picked campgrounds from all over the world, or add your own.</p>
          <form action="/search" method="GET" className="search-box relative sm:inline-block md:flex">
            <img src="/Assets/Search Icon.svg" alt="search-box" className="absolute pl-10 pr-44 mt-5 md:mt-8 -translate-y-2/4" />
            <input type="text" name="query" placeholder="Search for camps" className="form py-1.5 px-12 md:py-2.5 md:px-8 md:pl-12 my-2.5 ml-4 rounded border border-gray-400 md:border-solid sm:block" />
            <button type="submit" className="py-1.5 px-28 md:py-4 md:px-12 ml-4 rounded md:mt-2.5 md:mb-3 text-white bg-black">Search</button>
          </form>
          <p className="py-4"><a href="/" className="text-blue-900 underline mx-4">Or add your own campground</a></p>
        </div>
      </section>
      <section className="row card-content mx-12 md:mx-20 flex items-center flex-wrap md:flex gap-2.5 mb-10">
        {/* Cards for mobile and tablet */}
      </section>
    </main>
  );
};

export default Campgrounds;

import React from 'react';
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import campgroundData from "../Data/campgroundData";
import campgroundCard from "../Data/campgroundCard";

const Campgrounds = () => {
  return (
    <main className="row">
      <Nav />
      <section>
        <Banner />
      </section>
      <section className="row card-content mx-12 md:mx-20 flex items-center flex-wrap md:flex gap-2.5 mb-10">
        {campgroundData.map((campground) => (
            <campgroundCard key={campground.id} campground={campground} />
        ))}
      </section>
    </main>
  );
};

export default Campgrounds;

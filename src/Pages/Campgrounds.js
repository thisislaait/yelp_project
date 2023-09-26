import React from 'react';
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";

const Campgrounds = () => {
  return (
    <main className="row">
      <Nav />
      <section>
        <Banner />
      </section>
      <section className="row card-content mx-12 md:mx-20 flex items-center flex-wrap md:flex gap-2.5 mb-10">
        {/* Cards for mobile and tablet */}
      </section>
    </main>
  );
};

export default Campgrounds;

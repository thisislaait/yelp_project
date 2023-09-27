import React from 'react';

const CampgroundCard = ({ campground }) => {
  return (
    <div className="cards flex flex-row grow gap-10 basis-80 mr-4 md:mr-8">
      <div className="images my-5 p-3.5 rounded-xl" style={{ border: 'solid 0.5px rgb(189, 185, 185)' }}>
        <img src={campground.img} alt="img1" className="w-full" />
        <div className="card-body flex flex-col gap-2.5">
          <h1 className="card_title mt-2.5 text-base font-black">{campground.title}</h1>
          <p className="card-text text-base mr-20 text-gray-600">{campground.des}</p>
          <button className="card-btn font-black text-sm p-1 py-4 justify-center rounded" style={{ border: 'solid 0.5px rgb(189, 185, 185)' }}>
            <a href={campground.route}>View Campground</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampgroundCard;

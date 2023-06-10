import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

import Swal from "sweetalert2";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import SingleCard from "./SingleCard";

const Classes = () => {

  const url = "http://localhost:5000/allclass";
  const [classCard, setClassCard] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClassCard(data));
  }, []);

  const modal = () => {
    Swal.fire("log in before selecting the course");
  };
  return (
    <>
      <div className="w-10/12 mx-auto">
        {
          <HeaderTitle
            title={"All classes"}
            subTitle={
              "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
            }
          />
        }

        <div className="mb-24">
          <h1 className="btn btn-sm mt-14 mb-5 bg-warning text-white font-semibold">
            Classes
          </h1>
          <div className="md:grid grid-cols-3  gap-3">
            {classCard &&
              classCard.map((pd) => <SingleCard key={pd._id} product={pd} />)}
          </div>
        </div>
      </div>

      {/*<!-- End E-commerce card --> */}
    </>
  );
};

export default Classes;

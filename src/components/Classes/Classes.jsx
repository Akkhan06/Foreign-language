import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import SingleCard from "./SingleCard";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const Classes = () => {
  const { user } = useAuth();
  const [axiosSe] = useAxios();
  const [classCard, setClassCard] = useState([]);
  const [selected, setSelected] = useState(true);
  const { data: users = [], refetch } = useQuery(["selected"], async () => {
    // const res = await axiosSe.get('/user')
    // return res.data;
  });
  useEffect(() => {
    axiosSe.get("/allclass").then((data) => {
      const filteringData = data.data.filter((pd) => pd.status === "approved");
      console.log(filteringData);
      setClassCard(filteringData);
    });
  }, []);

  const selectHandler = (_id) => {
    const selectedItem = classCard.find((item) => item._id === _id);
    const { classes, price, instructor, seats, image, status } = selectedItem;
    const newItems = {
      classes,
      price,
      instructor,
      image,
      email: user?.email,
      status: "select",
    };
    console.log(newItems);
    axiosSe.post(`/select`, newItems).then((res) => {
      console.log(res.data);
    });

    // fetch(`http://localhost:5000/select/${_id}`, {
    //   method: "PUT",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     refetch();
    //     console.log(data);
    //     Swal.fire("selected", "", "success");
    //   });
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
              classCard.map((pd) => (
                <SingleCard
                  key={pd._id}
                  selectHandler={selectHandler}
                  selected={selected}
                  product={pd}
                />
              ))}
          </div>
        </div>
      </div>

      {/*<!-- End E-commerce card --> */}
    </>
  );
};

export default Classes;

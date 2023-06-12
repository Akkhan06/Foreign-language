import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";

const Instructor = () => {
  const [togol, setTogol] = useState(false)

  const [instructor, setInstructor] = useState([])
  const [axiosSe] = useAxios()
  

  


  useEffect(() => {
    axiosSe('https://foreign-language-akkhan06.vercel.app/user')
    .then(res => {
      const instructorFilter = res.data.filter(instructor => instructor.role === 'instructor')
      setInstructor(instructorFilter)
    })
  },[])


  return (
    <>
      <div className="w-10/12 mx-auto">
        <div className="mx-auto text-center mt-24">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Most Popular Instructor
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <hr />
        </div>

        <div className="">
          <h1 className="btn btn-sm mt-14 mb-5 bg-warning text-white font-semibold">
            Popular Instructor
          </h1>
          <div className="md:flex  gap-3">

        
        {instructor && 
        instructor.map(pd =>   <div className="overflow-hidden border rounded-lg bg-white text-center text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure className="p-6 pb-0">
          <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
            <img
              src={pd.image}
              alt="user name"
              title="user name"
              width="80"
              height="80"
              className="max-w-full rounded-full"
            />
          </span>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              {pd.name}
            </h3>
            <p className=" text-slate-400">{pd.email}</p>
          </header>
        </div>
        {/*  <!-- Action base sized with lead icon buttons  --> */}
        <div className="flex justify-end items-center gap-2 p-6 pt-0">
          <button onClick={() => setTogol(!togol)} className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-yellow-50 px-5 text-sm font-medium tracking-wide text-yellow-900 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
            <span className="order-2">Class Available</span> {5}
          </button>
          <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-warning px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-yellow-700 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span className="order-2">See class</span>
            <span className="relative only:-mx-5">
             
              
            </span>
          </button>
        </div>
      </div>)
        }

            
          </div>
        </div>
      </div>

      {/*<!-- End E-commerce card --> */}
    </>
  );
};

export default Instructor;

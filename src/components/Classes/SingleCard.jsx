import React from 'react';
import useAuth from '../../hooks/useAuth';

const SingleCard = ({product}) => {
    const { user } = useAuth();
    const  { classes, price, instructor, seats, image }  = product
    return (
        <div className="w-full mt-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
             <div className="flex justify-center"> <img
                className="p-8 rounded-t-lg md:h-80 md:w-96"
                src={image}
                alt="product image"
              /></div>
           
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {classes}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
              Available seats:
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {seats}
                </span>
              </div>
              <div className="flex items-center mt-2.5 mb-5">
                Instructor name: 
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {instructor}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${price}
                </span>
                {user ? <button
                  className="text-white bg-warning border-none hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Select
                </button> : <button
                  className="text-white bg-warning border-none hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Select
                </button>}
              </div>
            </div>
          </div>
    );
};

export default SingleCard;
import React, { useEffect, useState } from 'react';
import HeaderTitle from '../../../components/HeaderTitle/HeaderTitle';
import MySingleCard from './MySingleCard';

const MyClass = () => {
  const url = "http://localhost:5000/allclass";
  const [classCard, setClassCard] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClassCard(data));
  }, []);
    return (
        <div>
            <HeaderTitle title={'My all class'}/>
            <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600  p-4">
          <div className="h-full">
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">My class</h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Total Enrolled Students</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Feedback</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Action</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">status</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                     {classCard && classCard.map(pd => <MySingleCard key={pd._id} product={pd}/>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default MyClass;
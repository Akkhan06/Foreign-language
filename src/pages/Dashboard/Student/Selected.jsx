import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Selected = () => {
  const {user} = useAuth()
  const [selectedItems, setSelectedItems] = useState([])
  const [axiosSe] = useAxios()

  useEffect(() => {
    axiosSe(`/selected?email=${user.email}`).then(res => {
      const enrolledItems = res.data.filter(pd => pd.payment === 'incomplete')
      setSelectedItems(enrolledItems)
    })
  } ,[])
    return (
        <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
          <div className="h-full">
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Selected class</h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Course Name</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Instructor Name</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Action</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">Payment</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {selectedItems && 
                      selectedItems.map(pd => <tr className='pt-3'>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img className="rounded-full" src={pd.image} width="40" height="20" alt="Alex Shatov" />
                            </div>
                            <div className="font-medium text-gray-800">{pd.classes}</div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{pd.instructor}</div>
                        </td>
                        <td className="p-2">
                          <div className="text-center"><button className='btn-sm bg-blue-100 text-yellow-900 rounded-xl'>delete</button></div>
                        </td>
                        <td className="p-2">
                          <Link to={`/dashboard/selectedonde/${pd._id}`}><div className="text-center"><button className='btn-sm bg-yellow-500 text-white rounded-xl border-t-yellow-300'>Pay</button></div></Link>
                        </td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Selected;
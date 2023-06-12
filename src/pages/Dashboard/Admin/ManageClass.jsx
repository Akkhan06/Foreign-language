import React, { useEffect, useState } from "react";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";
import { Helmet } from "react-helmet";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { key } from "localforage";


const ManageClass = () => {
const [axiosSe] = useAxios()

  const url = 'http://localhost:5000/myclass'
  const [status, setStatus] = useState("pending")

  
  const [card, setCard] = useState([])
  useEffect(() => {
   axiosSe.get('/myclass').then(data => setCard(data.data))
  },[url])

console.log(card)


  const statusHandler = (_id) => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Approved',
      denyButtonText: `denied`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myclass/${_id}`, {
          method: 'PUT'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          Swal.fire('saved', '', 'success')
      })

      } else if (result.isDenied) {
        fetch(`http://localhost:5000/danied/${_id}`, {
          method: 'PUT'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
      
          Swal.fire('Changes are not saved', '', 'info')
      })
      }
    })
  }

  
  return (
    <div>
      <div>
        <HeaderTitle title={"Class management"} />
        <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600  p-4">
          <div className="h-full">
            <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Class manage {card.length}</h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                          Class Name
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                          Instructor name
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left"> Instructor email</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                          Available seats
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                          Price
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                          Status
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                          Action
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">

                     {card && 
                     card.map(pd =>  <tr> 
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                width="40"
                                height="40"
                                alt="Alex Shatov"
                              />
                            </div>
                            <div className="font-medium text-gray-800">{pd.classes}</div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{pd.instructor}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{pd.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-center">{pd.seats}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">${pd.price}</div>
                        </td>
                        <td className="p-2">
                          <div className="text-center">
                           <button className={`btn text-white btn-xs ${pd.status === 'pending' ? 'bg-red-500' : 'bg-success'}`}>
                              {status === "pending" ? 'Pending' : pd.status === 'approved' ? 'Approved' : 'denied'}
                            </button>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-center">
                          <button onClick={() => statusHandler(pd._id)} className="btn btn-xs disabled bg-warning text-white">
                              Deny
                            </button>
                          </div>
                        </td>
                      </tr>)
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageClass;

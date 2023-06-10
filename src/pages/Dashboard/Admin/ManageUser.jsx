import React, { useEffect, useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import useAxios from "../../../hooks/useAxios";

const ManageUser = () => {
  const [users, setUser] = useState([])
  const [axiosSe] = useAxios()
  useEffect(() => {
    axiosSe.get('/user').then(res => {
      setUser(res.data)
    })
  },[])
  return (
    <div>
      <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600  p-4">
        <div className="h-full">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">All user</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Role</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {users &&
                    users.map(user => <tr>
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
                          <div className="font-medium text-gray-800">
                            {user.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{user.email}</div>
                      </td>
                      <td className="p-2">
                        <div className="form-control w-full ">
                        <button className="btn text-white btn-xs bg-success">
                                {user.role}
                        </button>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">
                          <button className="btn text-white btn-xs bg-warning">
                           Admin
                          </button>

                          <button className="btn text-white btn-xs bg-yellow-500">
                                Instructor
                              </button>
                        </div>
                      </td>
                    </tr>)}
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

export default ManageUser;

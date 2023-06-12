import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';


const InstructorPage = () => {
  
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
        <div className="mx-auto text-center mt-5">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
           Our Instructor
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <hr />
        </div>
        <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
          <div className="h-full">
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Instructors</h2>
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
                          <div className="font-semibold text-left">Email</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Course Available</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">Action</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {
                        instructor && 
                        instructor.map(pd => <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img className="rounded-full" src={pd.image} width="40" height="40" alt="Alex Shatov" />
                              </div>
                              <div className="font-medium text-gray-800">{pd.name}</div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{pd.email}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">{7}</div>
                          </td>
                          <td className="p-2">
                            <div className="text-center"><button className='btn-sm bg-yellow-500 text-white rounded-xl border-t-yellow-300'>see course</button></div>
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

      </>
      );
};

export default InstructorPage;
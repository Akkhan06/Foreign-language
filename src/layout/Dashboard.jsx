import React from "react";
import { FaBell, FaCheck, FaCheckCircle, FaHistory, FaHome, FaQrcode } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link to={'/shome'} className="flex items-center font-semibold p-2 space-x-3 rounded-md gap-2"><FaCheckCircle/> My Selected Classes</Link>
              </li>
              <li className="rounded-sm">
                <Link to='/dashboard/enrolled' className="flex items-center font-semibold p-2 space-x-3 rounded-md gap-2"><FaCheck/> My Enrolled Classes</Link>
              </li>
              <li className="rounded-sm">
                <Link to='/dashboard/history' className="flex items-center font-semibold p-2 space-x-3 rounded-md gap-2"><FaHistory/> Payment history</Link>
              </li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link to={'/'} className="flex font-semibold items-center p-2 space-x-3 rounded-md gap-2"><FaHome/> Home</Link>
              </li>
              <li className="rounded-sm">
                <Link to="/classes" className="flex font-semibold items-center p-2 space-x-3 rounded-md gap-2"><FaQrcode/>Classes</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
       <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;

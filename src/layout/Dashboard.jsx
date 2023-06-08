import React from "react";
import { FaBell, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../pages/Home/Home";

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
                <Link className="flex items-center p-2 space-x-3 rounded-md gap-2"><FaHome/> Home</Link>
              </li>
              <li className="rounded-sm">
                <Link className="flex items-center p-2 space-x-3 rounded-md gap-2"><FaBell/> Notification</Link>
              </li>
              <li className="rounded-sm">
                <Link className="flex items-center p-2 space-x-3 rounded-md gap-2"><FaHome/> Home</Link>
              </li>
              <li className="rounded-sm">
                <Link className="flex items-center p-2 space-x-3 rounded-md gap-2"><FaHome/> Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total users
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              12,00
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Profit
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              $ 450k
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Orders
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">20k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

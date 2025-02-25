import React from "react";
import { NavLink } from "react-router-dom";
import {
  HiUserCircle,
  HiClipboardList,
  HiCurrencyDollar,
  HiBookmark,
  HiQuestionMarkCircle,
} from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside className="w-100 bg-white shadow-md py-8 px-6">
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-yellow-200 text-gray-800 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <HiUserCircle className="w-6 h-6" />
              <span>My Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myorders"
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-yellow-200 text-gray-800 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <HiClipboardList className="w-6 h-6" />
              <span>My Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/subscriptions"
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-yellow-200 text-gray-800 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <HiCurrencyDollar className="w-6 h-6" />
              <span>My Plans</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/savedprojects"
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-yellow-200 text-gray-800 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <HiBookmark className="w-6 h-6" />
              <span>Saved Project</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-yellow-200 text-gray-800 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <HiQuestionMarkCircle className="w-6 h-6" />
              <span>Help & Support</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
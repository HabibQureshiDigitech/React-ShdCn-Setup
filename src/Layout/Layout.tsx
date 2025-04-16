import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarCollapsed((prev:any) => !prev);
    };
  return (
    <div className="flex h-screen">
      {/* Sidebar hidden/collapsed toggle */}
      <div className={`${isSidebarCollapsed ? "w-0" : "w-auto"} transition-all duration-300 overflow-hidden`}>
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hide">
        <Topbar toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout

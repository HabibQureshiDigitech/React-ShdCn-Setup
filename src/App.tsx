import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar hidden/collapsed toggle */}
      <div className={`${isSidebarCollapsed ? "w-0" : "w-auto"} transition-all duration-300 overflow-hidden`}>
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Topbar toggleSidebar={toggleSidebar} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

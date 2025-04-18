
import { Home, BarChart2, Settings, LogOut, Bolt, BadgeDollarSign, HandCoins, ScanEye, ShieldHalf, Logs, History, ChartCandlestick, User2} from "lucide-react";
import '../Css/Sidebar.css'
import { Link } from "react-router-dom";

const links = [
  { name: "Dashboard", icon: <Home />, path: "/" },
  { name: "Users", icon: <User2 />, path: "/finance" },
  { name: "Controls", icon: <Bolt />, path: "/control" },
  { name: "Sales", icon: <BadgeDollarSign />, path: "#" },
  { name: "Profits", icon: <HandCoins />, path: "#" },
  { name: "Orders", icon: <Logs />, path: "#" },
  { name: "History", icon: <History />, path: "#" },
  { name: "Vendors", icon: <ShieldHalf />, path: "#" },
  { name: "Stocks", icon: <ChartCandlestick />, path: "#" },
  { name: "Surveys", icon: <ScanEye />, path: "#" },
  { name: "Analytics", icon: <BarChart2 />, path: "#" },
  { name: "Settings", icon: <Settings />, path: "#" },
  { name: "Logout", icon: <LogOut />, path: "#" },
];

export default function Sidebar() {

  return (
    <>
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col bg-black text-white lg:w-54 w-auto h-screen p-4 space-y-6 overflow-y-auto scrollbar-hide">
        <h1 className="text-md font-bold text-center">Admin-Dashboad</h1>
        <div className="flex justify-center">
          
         <img className="rounded-full h-20 w-20" src="/profile.png" alt="" />
        </div>
         {/* <h2 className="text-center text-sm">Muhammad Riyan</h2> */}
        <ul className="space-y-4 mt-3">
          {links.map((link) => (
           <Link to={link.path}>
            <li
              key={link.name}
              className="flex items-center gap-3 hover:text-black hover:bg-orange-500 p-2 hover:shadow rounded cursor-pointer"
            >
              {link.icon}
              {link.name}
            </li></Link>
          ))}
        </ul>
      </aside>
    </>
  );
}

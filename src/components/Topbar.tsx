import { BadgeDollarSign, BarChart2, Bell, Bolt, ChartCandlestick, HandCoins, History, Home, Landmark, LogOut, Logs, Menu, MessageSquareDot, ScanEye, Settings, ShieldHalf, User } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Topbar({ toggleSidebar }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const links = [
    { name: "Dashboard", icon: <Home />, path: "#" },
    { name: "Finance", icon: <Landmark />, path: "#" },
    { name: "Controls", icon: <Bolt />, path: "#" },
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-gray-100 shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        {isMobile ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Menu className="w-6 h-6 cursor-pointer" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-54 bg-green-700 text-white p-6 fixed top-0 left-0 h-full z-50"
            >
              <h2 className="text-xl font-bold mb-6">Dashboard</h2>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li
                    key={link.name}
                    className="flex items-center gap-3 hover:text-green-300 cursor-pointer"
                  >
                    {link.icon}
                    {link.name}
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        ) : (
          <Menu className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} />
        )}
      </div>
      <div className="flex justify-center gap-2">
      
     
      
      
      <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <Bell className="rounded-full hover:active:scale-x-150" />
    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
      <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <MessageSquareDot className="rounded-full hover:active:scale-x-150" />
    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
      <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <User className="rounded-full hover:active:scale-x-150" />
    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
      <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <Settings className="rounded-full hover:active:scale-x-150" />
    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

      </div>
    </header>
  );
}

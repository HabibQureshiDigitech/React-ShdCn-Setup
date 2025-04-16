// src/pages/Dashboard.jsx

import { BarChartComponent } from "@/components/BarChart";
import { ComChartComponent } from "@/components/Chart";
import { ChartLineComponent } from "@/components/ChartLine";
import { PieChartComponents } from "@/components/PieChart";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-6 bg-white h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <Card className="bg-black">
          <CardContent className="p-4">
            <h2 className="text-lg text-white font-semibold">Users</h2>
            <p className="text-2xl text-white mt-2">1,234</p>
          </CardContent>
        </Card>
        <Card className="bg-black">
          <CardContent className="p-4">
            <h2 className="text-lg text-white font-semibold">Revenue</h2>
            <p className="text-2xl text-white mt-2">$45,678</p>
          </CardContent>
        </Card>
        <Card className="bg-black">
          <CardContent className="p-4">
            <h2 className="text-lg text-white font-semibold">Orders</h2>
            <p className="text-2xl text-white mt-2">782</p>
          </CardContent>
        </Card>
        <Card className="bg-black">
          <CardContent className="p-4">
            <h2 className="text-lg text-white font-semibold">Orders</h2>
            <p className="text-2xl text-white mt-2">782</p>
          </CardContent>
        </Card>
      </div>
      <div className=" flex justify-center gap-6 p-4 mt-5">
        <BarChartComponent />
        <PieChartComponents />
        <ComChartComponent />
      </div>
      <ChartLineComponent />
    </div>
  );
}

import DailyOrdersAmountCard from "./components/daily-orders-amount-card";
import MonthlyCanceledOrdersAmountCard from "./components/monthly-canceled-orders-amount-card";
import MonthlyOrdersAmountCard from "./components/monthly-orders-amount-card";
import MonthlyRevenueCard from "./components/monthly-revenue-card";
import { RevenueChart } from "./components/revenue-chart";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">       
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

          <div className="grid grid-cols-4 gap-4">
            <MonthlyRevenueCard />
            <DailyOrdersAmountCard />
            <MonthlyOrdersAmountCard />
            <MonthlyCanceledOrdersAmountCard />
          </div>

          <div className="grid grid-cols-9 gap-4">
            <RevenueChart />
          </div>
    </div>
  );
}

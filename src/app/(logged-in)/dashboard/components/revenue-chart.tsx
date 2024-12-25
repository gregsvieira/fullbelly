"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from 'recharts';

const data = [
  { date: '20/12', revenue: 1222 },
  { date: '21/12', revenue: 450 },
  { date: '22/12', revenue: 694 },
  { date: '23/12', revenue: 860 },
  { date: '24/12', revenue: 15622 },
  { date: '25/12', revenue: 16544 },
  { date: '26/12', revenue: 1200 },
];

export function RevenueChart(){
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Revenue of the period</CardTitle>
          <CardDescription>Daily revenue for the period</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <LineChart data={[]} style={{ fontSize: 12 }}></LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
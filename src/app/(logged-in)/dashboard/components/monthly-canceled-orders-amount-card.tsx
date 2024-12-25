import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function MonthlyCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Cancellations (Month)
          </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          26
        </span>
        <p className="text-xs text-muted-foreground">
        <span className="text-emerald-500 dark:text-emerald-400">-2</span> relative to last month
        </p>
      </CardContent>
    </Card>
  );
}

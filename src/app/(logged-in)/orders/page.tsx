import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";

export default function Dashboard() {
  return (
    <>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        

        <div className="space-y-2.5">
          <OrderTableFilters />
          
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[148px]">Order Id</TableHead>
                  <TableHead className="w-[180px]">Realized At</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead className="w-[140px]">Order total</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <OrderTableRow key={i} />
                })}
              </TableBody>
            </Table>

          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
      </>
   
  );
}


import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// export interface OrderDetailsProps {}

export function OrderDetails(){
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: 8e21sa612sdczkxla</DialogTitle>
        <DialogDescription>Details</DialogDescription>
      </DialogHeader>

    <div className="space-y-6">
      <Table>
      <TableBody>
        <TableRow>
          <TableCell className="text-muted-foreground">Status</TableCell>
          <TableCell className="flex justify-end">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              <span className="font-medium text-muted-foreground">Pending</span>
            </div>
          </TableCell>
        </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Costumer</TableCell>
            <TableCell className="flex justify-end">
              Gregory Vieira
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Phone</TableCell>
            <TableCell className="flex justify-end">
              +55 (51) 999999999
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Email</TableCell>
            <TableCell className="flex justify-end">
              gregoryvieira@fullbelly.com
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Realized At</TableCell>
            <TableCell className="flex justify-end">
              15 minutes ago
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Qty.</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Pizza Pepperoni</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell className="text-right">$ 69,90</TableCell>
            <TableCell className="text-right">$ 139,80</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pizza Mussarela</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell className="text-right">$ 59,90</TableCell>
            <TableCell className="text-right">$ 119,80</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Order total: </TableCell>
            <TableCell className="text-right font-medium">
              $ 259,60
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      
    </div>
    </DialogContent>
  )
}
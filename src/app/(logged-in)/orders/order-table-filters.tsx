'use client'

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SubmitButton } from "@/components/ui/submit-button";
import { LoaderCircle, Search, X, Trash2 } from "lucide-react";
import Form from "next/form";
import { useActionState } from "react";
import { filterAction } from "./actions/filter-actions";

export function OrderTableFilters(){
  const [_, formAction] = useActionState(filterAction, null);

  return (
    <Form action={formAction} className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filters</span>
      <Input name="orderId" placeholder="Order Id" className="h-8 w-auto" />
      <Input  name="clientName" placeholder="Client Name" className="h-8 w-[320px]" />
      <Select name="status" defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="canceled">Canceled</SelectItem>
          <SelectItem value="processing">Processing</SelectItem>
          <SelectItem value="delivering">Delivering</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>
        </SelectContent>
      </Select>

      <SubmitButton
        type="submit"
        variant="secondary"
        size="xs"
        name="action"
        value="filter"
        pendingText={(
          <><LoaderCircle className="h-4 w-4 mr-2 animate-spin text-blue-500" />
            <span>
              Filtering
            </span></>
          )} 
        text={(
          <><Search className="h-4 w-4 mr-2" /><span>Filter results</span></>
          )}
      />
      
      <SubmitButton
        type="button"
        variant="outline"
        size="xs"
        name="action"
        value="remove"
        pendingText={(
          <><Trash2 className="h-4 w-4 mr-2 animate-bounce text-red-500" />
            <span>
              Removing
            </span></>
          )} 
        text={(
          <><Trash2 className="h-4 w-4 mr-2" /><span>Remove filters</span></>
          )}
      />
      
      </Form>
  )
}
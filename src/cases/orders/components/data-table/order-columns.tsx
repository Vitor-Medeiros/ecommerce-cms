import type { ColumnDef } from "@tanstack/react-table";
import type { OrderDTO } from "../../dtos/order.dto";

export const orderColumns: ColumnDef<OrderDTO>[] = [
  {
    accessorKey: 'id',
    header: 'Id'
  },
    {
    accessorKey: 'name',
    header: 'Nome do Pedido'
  }
];
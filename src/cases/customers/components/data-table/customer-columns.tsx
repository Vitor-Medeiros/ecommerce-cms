import type { ColumnDef } from "@tanstack/react-table";
import { DataTableAction } from "@/components/layout/data-table-actions";
import type { CustomerDTO } from "../../dtos/customer";

export const customerColumns: ColumnDef<CustomerDTO>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },
    {
        accessorKey: 'name',
        header: 'Nome da Marca'
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const customer = row.original;

            return(
                <div className="flex justify-end mr-4">
                    <DataTableAction itemId={customer.id!} />
                </div>
            )
        }
    }
];
import { DataTable } from "@/components/ui/data-table";
import { brandColumns } from "./category-columns";
import { useBrands } from "../../hooks/use-brand";


export function BrandDataTable() {

    const {data: categories,isLoading} = useBrands();

  return (

    <div>
        {isLoading ?(
            <p>Carregando</p>
        ): (
        <DataTable columns={brandColumns} data={categories!}/>
        )}
    </div>
)
}

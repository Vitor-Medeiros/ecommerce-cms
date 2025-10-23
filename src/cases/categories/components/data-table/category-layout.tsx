import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CategoryDataTable } from "./category-data-table";

export function CategoryLayout() {
    return 
    <div className="flex-col py-4">
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />

    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Categorias</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

    <div>
        <CategoryDataTable/>
    </div>

    </div>;
}
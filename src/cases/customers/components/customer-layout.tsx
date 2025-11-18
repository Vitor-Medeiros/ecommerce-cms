import { BreadCrumb } from "@/components/layout/bread-crumb";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Outlet, useNavigate } from "react-router-dom";
import { CustomerDataTable } from "./data-table/customer-data-table";

export function CustomerLayout() {
  const navigate = useNavigate();
  function handleCreate() {
    navigate("/customer/create");
  }

  return (
    <div className="p-4">
      <BreadCrumb title="Customer" />

      <div className="flex flex-col py-4 gap-4 my-4"></div>

      <div className="flex flex-row justify-end gap-4">
        <InputGroup className="max-w-96">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <Button onClick={handleCreate}>
          <Plus />
          Adicionar
        </Button>
      </div>
      <div>
        <CustomerDataTable />
        <Outlet />
      </div>
    </div>
  );
}
import { SidebarForm } from "@/components/layout/sidebar-form";
import { useParams } from "react-router-dom";
import {useOrder} from "../hooks/use-order"

export function OrderForm(){
    const {id} = useParams<{id: string}>();
    const {data, isLoading}=useOrder(id ?? '')
    function handleSave(){
        
    }

    return(
        <SidebarForm title="Cadastro de Pedidos"
        onSave={handleSave}
        >
            {isLoading ? (
                <h4>Carregando</h4>
            ):(
                <p>
                    {JSON.stringify(data)}
                </p>
            )}
        </SidebarForm>
    )
}


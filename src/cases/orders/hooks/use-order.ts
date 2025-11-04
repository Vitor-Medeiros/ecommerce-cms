import { useMutation, useQuery } from "@tanstack/react-query";
import type { OrderDTO } from "../dtos/order.dto";
import { OrderService } from "../services/order.service";


export function useOrders() {
    return useQuery<OrderDTO[]>({
        queryKey: ['orders'],
        queryFn: OrderService.list
    });
}
export function useOrder(id: string) {
    return useQuery<OrderDTO>({
        queryKey: ['order', id],
        queryFn: () => OrderService.getById(id),
        enabled: !!id //--> or Boolean(id)
    });
}
export function useCreateOrder() {
    return useMutation<OrderDTO, Error, Omit<OrderDTO, 'id'>>({
        mutationFn: (order: Omit<OrderDTO, 'id'>) => OrderService.create(order)
    });
}
export function useUpdateOrder() {
    return useMutation<OrderDTO, Error, { id: string, order: OrderDTO }>({
        mutationFn: ({ id, order }) => OrderService.update(id, order)
    });
}
export function useDeleteOrder() {
    return useMutation<void, Error, string>({
        mutationFn: (id: string) => OrderService.delete(id)
    });
}

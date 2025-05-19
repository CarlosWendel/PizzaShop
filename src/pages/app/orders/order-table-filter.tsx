import { Select, SelectItem, SelectValue } from "@radix-ui/react-select";
import { SelectContent, SelectTrigger } from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { Search, X } from "lucide-react";

export function OrderTableFilter() {
    return (
        <form className=" flex items-center gap-2 ">
            <span className="text-sm font-semibold">Filtros:</span>
            <input placeholder="ID do cliente " className="h-8 w-auto" />
            <input placeholder="Nome do cliente" className="h-8 w-[320px]" />
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='all'>Todos status</SelectItem>
                    <SelectItem value='pending'>Pendente</SelectItem>
                    <SelectItem value='canceled'>Cancelado</SelectItem>
                    <SelectItem value='prossesing'>Em preparo</SelectItem>
                    <SelectItem value='delivering'>Em entrega</SelectItem>
                    <SelectItem value='delivered'>Entregue</SelectItem>
                </SelectContent>
            </Select>
            <Button variant={'secondary'} size='xs' type="submit">
                <Search className="mr-2 h-4 w-4"/>
                Filtrar resultados
            </Button>
            <Button  variant={'outline'} size='xs' type="button">
                  <X className="mr-2 h-4 w-4"/>
                  Remover Filtros
            </Button>
        </form>
    )
}
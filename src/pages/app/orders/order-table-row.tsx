import { ArrowRight, Search, X } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { TableCell, TableRow } from "../../../components/ui/table";

export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Button variant={"outline"} size={"xs"}>
                    <Search className="h-3 w-3" />
                    <span className="sr-only">Detalhes de pedido</span>
                </Button>
            </TableCell>
            <TableCell className="font-mono text-ts font-medium">
                aam4wvf8eqg767qVG67eavg7eab                               </TableCell>
            <TableCell className="text-gray-500">
                há 15 minutos
            </TableCell>
            <TableCell>
                <div className="felx items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-black" />
                    <span className="font-medium text-gray-500">
                        Pedente
                    </span>
                </div>
            </TableCell>
            <TableCell className="font-medium">
                Carlos Wendel da Silva costa
            </TableCell>
            <TableCell className="font-medium"> R$ 149,60</TableCell>
            <TableCell>
                <Button variant={'outline'} size={'xs'}>
                    <ArrowRight className='h-3 w-3 mr-2' />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant={'ghost'} size={'xs'}>
                    <X className='h-3 w-3 mr-2' />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}
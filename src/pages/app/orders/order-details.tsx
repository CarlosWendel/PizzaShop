import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent, DialogHeader } from "../../../components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../../../components/ui/table";

export function OrderDetails(){
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 124roe2h5r3i45h2</DialogTitle>
                <DialogDescription>Detalhes do pedido</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className=" text-muted-forenground">Status</TableCell>
                            <TableCell className="felx justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-forenground">
                                        Pendente
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className=" text-muted-forenground"> Cliente</TableCell>
                            <TableCell className="felx justify-end">
                                Carlos Wendel
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className=" text-muted-forenground"> Telefone</TableCell>
                            <TableCell className="felx justify-end">
                               (32) 9888740032
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className=" text-muted-forenground"> E-mail</TableCell>
                            <TableCell className="felx justify-end">
                                wendeluzumak824@gmail.com
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className=" text-muted-forenground"> Realizado há</TableCell>
                            <TableCell className="felx justify-end">
                                há 3 minutos
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produtos</TableHead>
                            <TableHead className="text-rigth">Qtd.</TableHead>
                            <TableHead className="text-rigth">Preço</TableHead>
                            <TableHead className="text-rigth">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Pizza Peperoni Família</TableCell>
                            <TableCell className="text-rigth">2</TableCell>
                            <TableCell className="text-rigth">R$ 69,98</TableCell>
                            <TableCell className="text-rigth">R$ 139,80</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell >Pizza Mussarela Família</TableCell>
                            <TableCell className="text-rigth">2</TableCell>
                            <TableCell className="text-rigth">R$ 59,90</TableCell>
                            <TableCell className="text-rigth">R$ 119,80</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total de pedidos</TableCell>
                            <TableCell className="text-right font-medium">
                                R$ 259,60
                            </TableCell> 
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )

}
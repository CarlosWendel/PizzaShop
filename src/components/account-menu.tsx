import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { DropdownMenuContent } from "./ui/dropdown-menu";

export function AccountMenu(){
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant={"outline"} className="flex select-none items-center gap-2">
                    Pizza Shop
                    <ChevronDown className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-58">
                <DropdownMenuLabel className="flex flex-col">
                    <span>Carlos Wendel</span>
                    <span className="text-ts font-normal text-muted-forenground">
                        wendeluzumak824@gmail.com
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Building className="mr-2  h-4 w-4"/>
                    <span>Perfil da loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 drak:text-rose-400">
                    <LogOut className="mr-2 h-4 w-4"/>
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
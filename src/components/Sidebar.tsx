import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"outline"}>
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="py-4 px-2">
        <NavLinks/>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

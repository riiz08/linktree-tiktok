import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const AddButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="fixed bottom-7 right-4 uppercase">
            <span className="font-semibold text-lg">+</span> Add product
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add product</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddButton;

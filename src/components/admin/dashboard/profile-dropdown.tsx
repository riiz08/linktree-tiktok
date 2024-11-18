"use client";

import { HiChevronUpDown } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsPerson } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import LogoutDialog from "@/components/logout-dialog";

const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={"lg"}
          className="flex px-2 items-center my-2 justify-between"
        >
          <div className="flex w-[80%] justify-beetwen items-center gap-2">
            <Avatar>
              <AvatarImage src="/profile.jpg" alt="Riiz O'Brien" />
              <AvatarFallback>RO</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold">Riiz O&apos;Brien</h1>
              <p className="text-left">riiz.obrien</p>
            </div>
          </div>
          <HiChevronUpDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <BsPerson />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <LogoutDialog />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;

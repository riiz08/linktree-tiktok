"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { GoSignOut } from "react-icons/go";
import { useRouter } from "next/navigation";

const LogoutDialog = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const response = await fetch("/api/v1/logout", {
      method: "DELETE",
    });
    router.push("/auth/login");
    console.log(response);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size={"lg"}>
          <GoSignOut /> Logout
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah Anda yakin ingin keluar?</AlertDialogTitle>
          <AlertDialogDescription>
            Anda akan keluar dari akun Anda. Anda perlu login kembali untuk
            melanjutkan
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutDialog;

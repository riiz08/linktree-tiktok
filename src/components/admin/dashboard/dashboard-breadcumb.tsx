"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardBreadcrumb = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(pathname); // Memastikan state diperbarui setiap kali `pathname` berubah
  }, [pathname]);

  // Konfigurasi breadcrumb berdasarkan pathname
  const breadcrumbConfig: Record<string, string> = {
    "/admin/dashboard": "Dashboard",
    "/admin/dashboard/fashion-wanita": "Fashion Wanita",
    "/admin/dashboard/fashion-pria": "Fashion Pria",
    "/admin/dashboard/parfum": "Parfum",
  };

  // Dapatkan nama halaman saat ini dari config
  const currentPage = breadcrumbConfig[currentPath];

  if (!currentPage) {
    return <Skeleton className="w-[70px] h-[20px]" />;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin/dashboard">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {currentPath !== "/admin/dashboard" && (
          <BreadcrumbItem>
            <BreadcrumbLink href={currentPath}>{currentPage}</BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadcrumb;

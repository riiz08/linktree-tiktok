"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardBreadcumb = () => {
  const [isClient, setIsClient] = useState(false);
  //   const [page, setPage] = useState("dashboard");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  } else {
    return <Skeleton className="w-[70px] h-[20px]" />;
  }
};

export default DashboardBreadcumb;

"use client";

import AddButton from "@/components/admin/dashboard/add-button";
import TableProducts from "@/components/admin/dashboard/table-products";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface ProductsData {
  name: string;
  image: string;
  description: string;
  shopee: string;
  price: string;
}

const Page = () => {
  const [productsData, setIsProductsData] = useState<ProductsData[]>([]);

  const fetchData = async () => {
    const fetching = await fetch("/api/v1/produk/parfum");
    const response = await fetching.json();

    if (fetching.ok) {
      return setIsProductsData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center relative h-screen items-center">
      <Card className="w-full h-screen">
        <CardContent>
          {productsData.length > 1 ? (
            <TableProducts data={productsData} />
          ) : (
            <div className="flex items-center justify-center w-full h-screen text-xl">
              Belum ada produk ditambahkan
            </div>
          )}
        </CardContent>
      </Card>
      <AddButton />
    </div>
  );
};

export default Page;

"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useEffect, useState } from "react";
import ActionDropdown from "./action-dropdown";

interface ProductData {
  name: string;
  image: string;
  description: string;
  shopee: string;
  price: string;
}

interface TableProductsProps {
  fetchData?: (
    setter: React.Dispatch<React.SetStateAction<ProductData[]>>
  ) => void;
  data?: ProductData[];
}

const TableProducts: React.FC<TableProductsProps> = ({
  fetchData,
  data: initialData,
}) => {
  const [data, setData] = useState<ProductData[]>(initialData || []);

  useEffect(() => {
    if (fetchData && !initialData) {
      fetchData(setData);
    }
  }, [fetchData, initialData]);

  return (
    <Table className="w-full">
      <TableCaption>A list of your recent products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((product) => (
          <TableRow key={product.name}>
            <TableCell className="font-medium w-48">{product.name}</TableCell>
            <TableCell className="text-xs">{product.description}</TableCell>
            <TableCell>
              <Image
                src={product.image}
                alt={product.name}
                height={40}
                width={40}
                className="rounded-md"
              />
            </TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <ActionDropdown />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableProducts;

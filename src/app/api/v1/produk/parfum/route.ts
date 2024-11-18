import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const products = await prisma.parfum.findMany({
    select: {
      name: true,
      image: true,
      description: true,
      shopee: true,
    },
  });

  if (products.length === 0)
    return NextResponse.json(
      { message: "Produk tidak ditemukan" },
      { status: 404 }
    );

  return NextResponse.json({ products });
};

export const POST = async (req: Request) => {
  const { name, image, description, shopee, price } = await req.json();

  const existingProduct = await prisma.parfum.findFirst({
    where: {
      name,
    },
  });

  if (existingProduct) {
    return NextResponse.json(
      { message: "Produk ini sudah ada di dalam daftar." },
      { status: 409 }
    );
  }

  const newProduct = await prisma.parfum.create({
    data: {
      name,
      image,
      description,
      shopee,
      price,
    },
  });

  if (!newProduct) {
    return NextResponse.json(
      { message: "Data produk yang dikirim tidak lengkap atau invalid." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: "Produk berhasil ditambahkan",
    data: {
      ...newProduct,
      price: newProduct.price.toString(),
    },
  });
};

export const PUT = async (req: Request) => {
  const { name, image, description, shopee, price, productId } =
    await req.json();

  const productUpdated = await prisma.parfum.update({
    where: {
      id: productId,
    },
    data: {
      name,
      image,
      description,
      shopee,
      price,
    },
  });

  if (!productUpdated) {
    return NextResponse.json(
      { message: "Data produk yang dikirim tidak lengkap atau invalid." },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      message: "Produk berhasil di update",
      data: {
        ...productUpdated,
        price: productUpdated.price.toString(),
      },
    },
    { status: 200 }
  );
};

export const DELETE = async (req: Request) => {
  const { productId } = await req.json();

  const deleteProduct = await prisma.parfum.delete({
    where: {
      id: productId,
    },
  });

  return NextResponse.json(
    { message: "Berhasil delete produk" },
    { status: 204 }
  );
};

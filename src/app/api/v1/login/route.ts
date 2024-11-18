import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { generateToken } from "@/lib/generateToken";

export const GET = () => {
  return NextResponse.json({ message: "hello world" });
};

export const POST = async (req: Request) => {
  const prisma = new PrismaClient();
  const { username, password } = await req.json();

  if (username === "") {
    return NextResponse.json(
      { message: "Username tidak boleh kosong" },
      { status: 400 }
    );
  } else if (password === "") {
    return NextResponse.json(
      { message: "Password tidak boleh kosong" },
      { status: 400 }
    );
  }

  const existingUsername = await prisma.admin.findUnique({
    where: {
      username,
    },
  });

  if (!existingUsername) {
    return NextResponse.json({ message: "Username tidak ditemukan" });
  }

  const comparePassword = await bcrypt.compare(
    password,
    existingUsername.password
  );

  if (!comparePassword) {
    return NextResponse.json({ message: "Something wrong" }, { status: 401 });
  }

  const token = generateToken(username);

  const response = NextResponse.json({ token });

  response.cookies.set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600,
  });

  return response;
};

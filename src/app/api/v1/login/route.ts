import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { generateToken } from "@/lib/generateToken";

export const GET = () => {
  return NextResponse.json({ message: "hello world" });
};

export const POST = async (req: Request) => {
  const prisma = new PrismaClient();
  const { nickname, password } = await req.json();

  if (nickname === "") {
    return NextResponse.json(
      { message: "Nickname tidak boleh kosong" },
      { status: 400 }
    );
  } else if (password === "") {
    return NextResponse.json(
      { message: "Password tidak boleh kosong" },
      { status: 400 }
    );
  }

  const existingNickname = await prisma.admin.findFirst({
    where: {
      nickname,
    },
  });

  if (!existingNickname) {
    return NextResponse.json({ message: "Nickname tidak ditemukan" });
  }

  const comparePassword = await bcrypt.compare(
    password,
    existingNickname.password
  );

  if (!comparePassword) {
    return NextResponse.json({ message: "Something wrong" }, { status: 401 });
  }

  const token = generateToken(nickname);

  const response = NextResponse.json({ token });

  response.cookies.set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600,
  });

  return response;
};

import { NextResponse } from "next/server";

export const DELETE = async () => {
  const response = NextResponse.json(
    { message: "Successfully logged out" },
    { status: 200 }
  );

  // Menghapus cookie dengan benar
  response.cookies.delete("auth-token"); // Parameter kedua adalah objek, bukan array

  return response;
};

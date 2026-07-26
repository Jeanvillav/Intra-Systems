"use server";

import { cookies } from "next/headers";

export async function loginAdmin(password: string) {
  const correctPassword = process.env.ADMIN_PASSWORD || "kevin123"; // Fallback for local testing
  
  if (password === correctPassword) {
    const cookieStore = await cookies();
    cookieStore.set("admin_token", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    return { success: true };
  }
  
  return { success: false, error: "Contraseña incorrecta" };
}

export async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");
  return token?.value === "authenticated";
}

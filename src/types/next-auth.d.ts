import { AuthUser } from "@/app/model/user";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: AuthUser;
  }
}

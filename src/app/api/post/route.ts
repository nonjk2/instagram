import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getUserByUsername } from "@/service/user";
import { gotFollowingPostsOf } from "@/service/posts";

// export const GET = async (req: Request) => {
//   return NextResponse.json("Hello world");
// };

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return gotFollowingPostsOf(user.username).then((data) =>
    NextResponse.json(data)
  );
}

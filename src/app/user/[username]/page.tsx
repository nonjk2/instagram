import UserPosts from "@/app/components/UserPosts";
import UserProfile from "@/app/components/UserProfile";
import { getUserForProfile } from "@/service/user";
import { notFound } from "next/navigation";

interface UserDetailProps {
  params: {
    username: string;
  };
}
const UserPage = async ({ params }: UserDetailProps) => {
  const { username } = params;
  const user = await getUserForProfile(username);

  if (!user) {
    notFound();
  }
  console.log();
  return (
    <>
      <UserProfile user={user} />;
      <UserPosts user={user} />
    </>
  );
};
export default UserPage;

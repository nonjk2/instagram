import Link from "next/link";
import { SearchUser } from "../model/user";
import Avatar from "./ui/Avatar";

interface UserCardProps {
  user: SearchUser;
}

const UserCard = ({ user }: UserCardProps) => {
  const { name, email, followers, following, username, image } = user;
  return (
    <Link
      href={`/user/${username}`}
      className="flex items-center w-full border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50 transition-all"
    >
      <Avatar image={image} />
      <div className="text-neutral-500">
        <p className="text-black font-bold leading-4">{username}</p>
        <p>{name}</p>
        <p className="text-sm leading-4">{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
};
export default UserCard;

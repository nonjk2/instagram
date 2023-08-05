import { FC } from "react";
import { AuthUser } from "../model/user";
import Avatar from "./ui/Avatar";

interface SidebarProps {
  user: AuthUser;
}

const Sidebar: FC<SidebarProps> = ({ user }) => {
  const { email, name, username, image } = user;
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">
        About ﹒ Help ﹒ Help ﹒ Press ﹒ API ﹒ Jobs ﹒ Privacy ﹒ Terms ﹒
        Location ﹒ Language
      </p>
      <p className="font-bold text-sm text-neutral-500">
        @Copyright INSTANGRAM from METAL
      </p>
    </>
  );
};
export default Sidebar;

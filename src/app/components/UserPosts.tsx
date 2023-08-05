"use client";
import { useState } from "react";
import { ProfileUser } from "../model/user";

import PostIcon from "./ui/icons/PostIcon";
import { BookmarkIcon, HeartIcon } from "./ui/icons";
import PostGrid from "./PostGrid";

interface UserPostProps {
  user: ProfileUser;
}
const tabs = [
  { type: "posts", icon: <PostIcon /> },
  { type: "saved", icon: <BookmarkIcon className="w-3 h-3" /> },
  { type: "liked", icon: <HeartIcon className="w-3 h-3" /> },
];
const UserPosts = ({ user }: UserPostProps) => {
  const [query, setQuery] = useState(tabs[0].type);
  const { email, followers, username, image } = user;

  return (
    <section>
      <ul>
        {tabs.map((t) => (
          <li
            key={t.type}
            onClick={() => setQuery(t.type)}
            className={query === t.type ? "bg-gray-100" : ""}
          >
            <button>{t.icon}</button>
            <span>{t.type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} query={query} />
    </section>
  );
};
export default UserPosts;

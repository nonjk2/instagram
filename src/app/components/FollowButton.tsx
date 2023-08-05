"use client";
import { HomeUser, ProfileUser } from "../model/user";
import useSWR from "swr";
import Button from "./ui/Button";
interface FollowButtonProps {
  user: ProfileUser;
}
const FollowButton = ({ user }: FollowButtonProps) => {
  const { data: loggedInUser } = useSWR<HomeUser>("/api/me");
  const { username } = user;
  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((following) => following.username === username);

  const text = following ? "Unfollow" : "Follow";
  return (
    <>
      {showButton && (
        <Button text={text} onClick={() => {}} red={text === "Unfollow"} />
      )}
    </>
  );
};
export default FollowButton;

"use client";
import useSWR from "swr";
import { HomeUser } from "../model/user";
import { PropagateLoader } from "react-spinners";
import Link from "next/link";
import Avatar from "./ui/Avatar";
import ScollableBar from "./ui/ScollableBar";
const FollowingBar = () => {
  //1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
  //2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서
  //3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴 (followings)
  //4. 여기에서, 클라이언트
  const { data, isLoading: loading, error } = useSWR<HomeUser>("/api/me");
  const users = data?.following;
  // const users = data?.following && [
  //   ...data?.following,
  //   ...data?.following,
  //   ...data?.following,
  // ];
  return (
    <section className="w-full flex justify-center items-center p-4 shadow-md shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-auto z-0">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className="flex flex-col items-center w-20"
              href={`/user/${username}`}
            >
              <Avatar image={image} highlight />
              <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                {username}
              </p>
            </Link>
          ))}
        </ScollableBar>
      )}
    </section>
  );
};
export default FollowingBar;

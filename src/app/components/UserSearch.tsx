"use client";
import { FormEvent, useState } from "react";
import useSWR from "swr";

import GridSpinner from "./ui/GridSpinner";
import { SearchUser } from "../model/user";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/useDebounce";

const UserSearch = () => {
  const [keyword, setKeyword] = useState("");
  const debounceKeyword = useDebounce(keyword);

  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debounceKeyword}`);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="w-full max-w-2xl my-4 flex flex-col items-center">
      <form onSubmit={onSubmit} className="w-full mb-4">
        <input
          type="text"
          className="w-full text-xl p-3 outline-none border-none"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>무언가가 잘못 되었다...</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && (
        <p>찾는 사용자가 없습니다.</p>
      )}
      <ul className="w-full p-4">
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
};
export default UserSearch;

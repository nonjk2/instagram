"use client";
import useSWR from "swr";
import { SimplePost } from "../model/post";
// import { GridLoader } from "react-spinners";
import dynamic from "next/dynamic";
import PostListCard from "./PostListCard";
const GridLoader = dynamic(() => import("react-spinners/GridLoader"), {
  ssr: false,
});
const PostList = () => {
  const { data: post, isLoading: loading } = useSWR<SimplePost[]>("api/post/");
  return (
    <section>
      {loading && (
        <div className="text-center mt-32">
          <GridLoader color="red" />
        </div>
      )}
      {post && (
        <ul>
          {post.map((p) => (
            <li key={p.id} className="mb-4">
              <PostListCard post={p} priority />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default PostList;

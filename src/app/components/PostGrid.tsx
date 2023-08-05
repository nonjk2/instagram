import useSWR from "swr";
import GridSpinner from "./ui/GridSpinner";
import PostGridCard from "./PostGridCard";
import { SimplePost } from "../model/post";
interface PostGridProps {
  username: string;
  query: string;
}
const PostGrid = ({ username, query }: PostGridProps) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/${query}`);
  return (
    <div>
      {isLoading && <GridSpinner />}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {posts &&
          posts.map((post: SimplePost, index: number) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default PostGrid;

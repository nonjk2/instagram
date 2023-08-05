import Image from "next/image";
import { FullPost, SimplePost } from "../model/post";
import useSWR from "swr";
import ActionBar from "./ActionBar";
import PostUserAvatar from "./PostUserAvatar";
import CommentForm from "./CommentForm";
import Avatar from "./ui/Avatar";
interface PostDetailProps {
  post: SimplePost;
}
const PostDetail = ({ post }: PostDetailProps) => {
  const { id, userImage, username, image, likes, createdAt } = post;
  const { data } = useSWR<FullPost>(`/api/post/${id}`);

  const comments = data?.comments;
  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5">
        <Image
          className="object-cover"
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes="650px"
        />
      </div>
      <div className="w-full basis-2/5 flex flex-col">
        <PostUserAvatar image={userImage} username={username} />
        <ul className="border-t border-gray-200 h-full overflow-y-auto p-4 mb-1">
          {comments &&
            comments.map(
              ({ username: commentUsername, comment, image }, index) => (
                <li key={index} className="flex items-center mb-1">
                  <Avatar
                    image={image}
                    size="small"
                    highlight={username === commentUsername}
                  />
                  <div className="ml-2">
                    <span className="font-bold mr-1">{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar likes={likes} username={username} createdAt={createdAt} />
        <CommentForm />
      </div>
    </section>
  );
};
export default PostDetail;

"use client";
import { FC, useState } from "react";
import { SimplePost } from "../model/post";
import Avatar from "./ui/Avatar";
import Image from "next/image";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";
import PostUserAvatar from "./PostUserAvatar";

interface PostListCardProps {
  post: SimplePost;
  priority?: boolean;
}
const PostListCard: FC<PostListCardProps> = ({ post, priority }) => {
  const { createdAt, image, likes, text, userImage, username } = post;
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <PostUserAvatar image={image} username={username} />
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar
        createdAt={createdAt}
        likes={likes}
        text={text}
        username={username}
      />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
};
export default PostListCard;

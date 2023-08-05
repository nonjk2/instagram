"use client";
import Image from "next/image";
import { SimplePost } from "../model/post";
import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";

interface PostGridCard {
  post: SimplePost;
  priority: boolean;
}

const PostGridCard = ({ post, priority = false }: PostGridCard) => {
  const { comments, createdAt, id, image, likes, text, userImage, username } =
    post;
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Image
        src={image}
        alt={`photo by ${username}`}
        fill
        sizes="650px"
        priority={priority}
      />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
};
export default PostGridCard;

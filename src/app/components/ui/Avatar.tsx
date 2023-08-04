import { FC } from "react";

interface AvatarProps {
  image?: string | null;
}

const Avatar: FC<AvatarProps> = (props) => {
  const { image } = props;

  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]">
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="rounded-full p-[0.01rem]"
          alt="user profile"
          src={image ?? undefined}
          referrerPolicy="no-referrer"
        />
      }
    </div>
  );
};
export default Avatar;

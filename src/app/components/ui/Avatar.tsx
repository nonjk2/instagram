import { FC } from "react";
type AvatarSize = "small" | "large" | "medium" | "xlarge";
interface AvatarProps {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
}

const Avatar: FC<AvatarProps> = (props) => {
  const { image, highlight = false, size = "large" } = props;

  return (
    <div className={getContainerStyle(size, highlight)}>
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={`bg-white object-cover rounded-full ${
            getImageSizeStyle(size).image
          }`}
          alt="user profile"
          src={image ?? undefined}
          referrerPolicy="no-referrer"
        />
      }
    </div>
  );
};
const getContainerStyle = (size: AvatarSize, highlight: boolean): string => {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]"
    : "";
  const { container } = getImageSizeStyle(size);
  return `${baseStyle} ${highlightStyle} ${container}`;
};
export default Avatar;

interface ImageSizeStyle {
  container: string;
  image: string;
}
const getImageSizeStyle = (size: AvatarSize): ImageSizeStyle => {
  switch (size) {
    case "small":
      return { container: "w-9 h-9", image: "w-[34px] h-[34px] p-[0.1rem]" };
    case "medium":
      return { container: "w-11 h-11", image: "w-[42px] h-[42px] p-[0.1rem]" };
    case "large":
      return { container: "w-[68px] h-[68px]", image: "w-16 h-16 p-[0.2rem]" };
    case "xlarge":
      return {
        container: "w-[142px] h-[142px]",
        image: "w-[138px] h-[138px] p-[0.3rem]",
      };
    default:
      throw new Error(`Invalid avatar size: ${size}`);
  }
};

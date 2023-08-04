import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  size?: "small" | "big";
}

const ColorButton: FC<ButtonProps> = (prop) => {
  const { onClick, text, size = "big" } = prop;
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]
      ${size === "big" ? "p-[0.3rem]" : " p-[0.5rem]"}
      `}
    >
      <button
        className={`bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity 
        ${size === "big" ? "p-4 text-2xl" : "p-[0.3rem] text-base"}
        `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
export default ColorButton;

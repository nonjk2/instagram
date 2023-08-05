import SmileIcon from "./ui/icons/SmileIcon";

const CommentForm = () => {
  return (
    <form className="flex border-t border-neutral-300 p-3">
      <SmileIcon />
      <input
        type="text"
        className="w-full ml-2 border-none outline-none p-3"
        placeholder="Add a comment..."
      />
      <button className="font-bold text-sky-500 ml-2">post</button>
    </form>
  );
};
export default CommentForm;

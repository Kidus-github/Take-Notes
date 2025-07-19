import { Textarea } from "./ui/textarea";

export default function NoteTextField(
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    <Textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Write your note here..."
      className="w-full h-[calc(100vh-350px)] resize-none border-none focus-visible:ring-0 focus-visible:outline-none focus-visible:border-none focus-visible:shadow-none"
    />
  );
}

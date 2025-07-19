import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import RichTextMenuBar from "./rich-text-menubar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { Placeholder } from "@tiptap/extensions";

function RichTextEditor(
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>
) {
  console.log(
    "Editor initialized with content:",
    content.length == 0 || content == "<p></p>"
  );
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-5 ",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-5 ",
          },
        },
      }),
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Write your note here...",
      }),
    ],

    content: content,
    editorProps: {
      attributes: {
        class:
          "w-full h-[calc(100vh-380px)] resize-none border-none focus-visible:ring-0 focus-visible:outline-none focus-visible:border-none focus-visible:shadow-none",
      },
    },

    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    onCreate: ({ editor }) => {
      editor.commands.setContent(content); // THIS parses HTML properly
    },
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return (
    <div>
      <RichTextMenuBar editor={editor} />
      <EditorContent editor={editor} />;
    </div>
  );
}

export default RichTextEditor;

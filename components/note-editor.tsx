import { Note } from "@/lib/type";
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Save, X } from "lucide-react";
import { Button } from "./ui/button";
import NoteTextField from "./note-text-field";
import RichTextEditor from "./rich-text-editor";
interface NoteEditorProps {
  note: Note;
  onCancel: () => void;
  onSave: (note: Note) => void;
}
function NoteEditor({ note, onCancel, onSave }: NoteEditorProps) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  const handleSave = () => {
    if (title.trim() === "" && content.trim() === "") {
      alert("Title and content cannot be empty.");
      return;
    }
    onSave({
      id: note.id,
      createdAt: note?.createdAt || new Date(),
      updatedAt: new Date(),
      title: title.trim() || "Untitled Note",
      content: content.trim() || "No content",
    });
  };

  return (
    <Card>
      <CardHeader>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="text-xl font-bold border-none px-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-none focus-visible:shadow-none mb-2"
        />
      </CardHeader>
      <CardContent>
        {/* {NoteTextField(content, setContent)} */}
        {RichTextEditor(content, setContent)}
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </CardFooter>
    </Card>
  );
}
export default NoteEditor;

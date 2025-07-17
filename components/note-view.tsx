import { Note } from "@/lib/type";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatDate } from "@/lib/storage";
import { Pen } from "lucide-react";
import { Button } from "./ui/button";

interface NoteViewProps {
  note: Note | null;
  onEdit: () => void;
}

function NoteView({ note, onEdit }: NoteViewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note?.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Updated Date: {formatDate(note?.updatedAt ?? new Date())}
        </p>
      </CardHeader>
      <CardContent>{note?.content}</CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onEdit}>
          <Pen className="h-4 w-4 mr-2" />
          Edit Note
        </Button>
      </CardFooter>
    </Card>
  );
}

export default NoteView;

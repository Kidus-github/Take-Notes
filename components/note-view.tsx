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
import { ScrollArea } from "./ui/scroll-area";

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
      <CardContent>
        <ScrollArea className="h-[calc(100vh-350px)]">
          <div>{note?.content}</div>
        </ScrollArea>
      </CardContent>
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

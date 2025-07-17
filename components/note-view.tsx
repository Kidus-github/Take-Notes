import { Note } from "@/lib/type";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { formatDate } from "@/lib/storage";

interface NoteViewProps {
  note: Note | null;
}

function NoteView({ note }: NoteViewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note?.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Updated Date: {formatDate(note?.updatedAt ?? new Date())}
        </p>
      </CardHeader>
      <CardContent>{note?.content}</CardContent>
    </Card>
  );
}

export default NoteView;

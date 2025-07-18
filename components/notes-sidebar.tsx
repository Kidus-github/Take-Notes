import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmptyState from "./empty-state";
import { Note } from "@/lib/type";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/storage";
import { Trash2 } from "lucide-react";
import { create } from "domain";
import { ScrollArea } from "./ui/scroll-area";
interface NotesSidebarProps {
  notes: Note[];
  onSelectNote: (note: Note) => void;
  createNewNote?: () => void;
  onDeleteNote: (noteId: string) => void;
  activeNoteId?: string;
}
function NotesSidebar({
  notes,
  onSelectNote,
  createNewNote,
  onDeleteNote,
  activeNoteId,
}: NotesSidebarProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>My Notes</CardTitle>
      </CardHeader>
      <CardContent>
        {notes.length === 0 ? (
          <EmptyState
            message="No notes yet"
            buttonText="Create your first note"
            onButtonClick={createNewNote}
          />
        ) : (
          <ScrollArea className="h-[calc(100vh-250px)]">
            <div>
              {notes.map((note) => (
                <div
                  key={note.id}
                  className={`p-3 rounded-md cursor-pointer hover:bg-accent transaction-colors hover:shadow-md hover:shadow-accent/20 active:bg-accent/80 active:shadow-none transition-colors mb-2 ${
                    activeNoteId === note.id
                      ? "bg-accent shadow-md shadow-accent/20"
                      : ""
                  }`}
                  onClick={() => onSelectNote(note)}
                >
                  <div className="flex justify-between items-center ">
                    <div>
                      <h3>
                        {note.title.substring(0, 30) || "Untitled Note"}
                        {note.title.length > 30 ? "..." : ""}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {note.content.substring(0, 40) || "No Text Found"}
                        {note.content.length > 40 ? "..." : ""}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(note.createdAt)}
                      </p>
                    </div>
                    <Button
                      className="h-8 w-8 text-muted-foreground cursor-pointer hover:text-destructive hover:bg-destructive/10 active:bg-destructive/20 active:text-destructive"
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteNote(note.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}

export default NotesSidebar;

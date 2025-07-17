"use client";
import EmptyState from "@/components/empty-state";
import Header from "@/components/header";
import NoteEditor from "@/components/note-editor";
import NoteView from "@/components/note-view";
import NotesSidebar from "@/components/notes-sidebar";
import { Button } from "@/components/ui/button";
import { Note } from "@/lib/type";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "New Note",
      content: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setIsEditing(true);
  };

  const renderNoteContent = () => {
    if (!selectedNote && notes.length === 0) {
      return (
        <EmptyState
          message={"Create your first Note to get started"}
          buttonText="New Note"
          onButtonClick={createNewNote}
        />
      );
    }
    return <NoteView note={selectedNote} onEdit={() => setIsEditing(true)} />;
  };

  const selectedNoteHandler = (note: Note) => {
    setSelectedNote(note);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };
  const saveNote = (UpdatedNote: Note) => {
    setNotes(
      notes.map((note) => (UpdatedNote.id === note.id ? UpdatedNote : note))
    );
    setSelectedNote(UpdatedNote);
    setIsEditing(false);
  };

  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // console.log(notes);
  return (
    <div className="flex flex-col min-h-screen">
      <Header onNewNote={createNewNote} />
      <main className="container mx-auto p-4 grid grid-col-1 md:grid-cols-3 gap-6 flex-1/2">
        <div className="md:col-span-1">
          <NotesSidebar
            notes={notes}
            onSelectNote={selectedNoteHandler}
            createNewNote={createNewNote}
          />
        </div>
        <div className="md:col-span-2">
          {isEditing && selectedNote ? (
            <NoteEditor
              note={selectedNote}
              onSave={saveNote}
              onCancel={cancelEdit}
            />
          ) : (
            renderNoteContent()
          )}
        </div>
      </main>
    </div>
  );
}

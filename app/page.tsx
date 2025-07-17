"use client";
import Header from "@/components/header";
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
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iure sequi fugit possimus nostrum necessitatibus accusamus neque praesentium quod sed illum suscipit voluptate consectetur, amet optio nisi quis molestias expedita dolorum totam minima reiciendis laboriosam rerum. Enim omnis, mollitia obcaecati, qui earum saepe possimus blanditiis magni delectus vitae, sit atque!",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes([newNote, ...notes]);
    console.log(newNote);
  };
  const renderNoteContent = () => {
    return <NoteView note={selectedNote} />;
  };

  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  return (
    <div className="flex flex-col min-h-screen">
      <Header onNewNote={createNewNote} />
      <main className="container mx-auto p-4 grid grid-col-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <NotesSidebar notes={notes} onSelectNote={setSelectedNote} />
        </div>
        <div className="md:col-span-2">
          {selectedNote ? renderNoteContent() : <></>}
        </div>
      </main>
    </div>
  );
}

import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface HeaderProps {
  onNewNote: () => void;
}

function Header({ onNewNote }: HeaderProps) {
  return (
    <header className="border-b p-4 bg-card">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Take Notes</h1>
        <Button size="sm" className="cursor-pointer" onClick={onNewNote}>
          <Plus className="h-4 w-4 mr-2" />
          New Note
        </Button>
      </div>
    </header>
  );
}

export default Header;

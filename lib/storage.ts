import { Note } from "./type";

const STORAGE_KEY = "notes";

export function saveNotes(notes: Note[]): void {
  //   console.log("Saving notes:", notes);
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error("Failed to save notes:", error);
  }
}
export function loadNotes(): Note[] {
  if (typeof window === "undefined") return [];
  try {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    // console.log("Loading notes:", storedNotes);
    return storedNotes ? JSON.parse(storedNotes) : [];
  } catch (error) {
    console.error("Failed to load notes:", error);
    return [];
  }
}

export function formatDate(dateInput: Date | string | number): string {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

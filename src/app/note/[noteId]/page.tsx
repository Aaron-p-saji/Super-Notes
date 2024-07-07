"use client";
import React, { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

type Props = {};

type Note = {
  name: String;
  title: String;
};

const Page = ({ params }: { params: { noteId: string } }) => {
  const [note, setNote] = useState<Note[] | null>(null);

  useEffect(() => {
    invoke<Note[]>("get_notes", { name: "Next.js" })
      .then((result) => setNote(result))
      .catch(console.error);
  }, []);

  return (
    <div>
      {note?.map((note, index) => (
        <div key={index}>
          <p>{note.name}</p>
          <p>{note.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;

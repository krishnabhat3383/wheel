import React from "react";

import { Pane, Typography } from "neetoui";

import NoteForm from "./Form";

export default function NewNote({ isNotePaneOpen, setIsNotePaneOpen }) {
  const onClose = () => setIsNotePaneOpen(false);

  return (
    <Pane isOpen={isNotePaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Note
        </Typography>
      </Pane.Header>
      <NoteForm onClose={onClose} />
    </Pane>
  );
}

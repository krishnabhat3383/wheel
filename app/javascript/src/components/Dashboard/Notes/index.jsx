import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { NOTES } from "./constants";
import NewNote from "./Create";
import Delete from "./Delete";
import NotesList from "./List";
import Menubar from "./Menubar";

const Notes = () => {
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [isNoteDeleteAlertOpen, setIsNoteDeleteAlertOpen] = useState(false);

  return (
    <div className="flex w-full">
      <Menubar />
      <Container className="w-full">
        <Header
          menuBarToggle
          title="All Notes"
          searchProps={{
            placeholder: "Search Name, Email, Phone Number, Ect.",
          }}
          actionBlock={
            <Button
              onClick={() => setIsNewNotePaneOpen(true)}
              label="Add New Note"
              icon={Plus}
            />
          }
        />
        <NotesList
          notes={NOTES}
          setIsNoteDeleteAlertOpen={setIsNoteDeleteAlertOpen}
        />
        <NewNote
          isNotePaneOpen={isNewNotePaneOpen}
          setIsNotePaneOpen={setIsNewNotePaneOpen}
        />
        {isNoteDeleteAlertOpen && (
          <Delete onClose={() => setIsNoteDeleteAlertOpen(false)} />
        )}
      </Container>
    </div>
  );
};

export default Notes;

import React, { useState } from "react";

import { Search } from "neetoicons";
import { Button, Input } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import { NOTES as notes } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menubar from "./Menubar";
import NotesList from "./NotesList";
import NewNotePane from "./Pane/CreateNote";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <div className="flex w-full">
      <Menubar />
      <Container className="w-full">
        <Header
          menuBarToggle
          title="All Notes"
          actionBlock={
            <div className="flex space-x-2">
              <Input
                size="small"
                className="w-64"
                prefix={<Search />}
                placeholder="Search Name, Email, Phone Number, Ect."
              />
              <Button
                onClick={() => setShowNewNotePane(true)}
                label="Add New Note"
                icon="ri-add-line"
              />
            </div>
          }
        />
        <NotesList notes={notes} setShowDeleteAlert={setShowDeleteAlert} />
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </div>
  );
};

export default Notes;

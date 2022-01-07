import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Avatar, Dropdown } from "neetoui";

import Card from "./Card";

const NotesList = ({ notes, setIsNoteDeleteAlertOpen }) => {
  return (
    <div className=" w-full flex flex-col space-y-2 text-gray-800">
      {notes.map((note, idx) => (
        <Card key={idx}>
          <Card.Header>
            <Typography style="h4">{note.title}</Typography>
            <Dropdown icon={MenuVertical} buttonStyle="text">
              <li>Edit</li>
              <li onClick={() => setIsNoteDeleteAlertOpen(true)}>Delete</li>
            </Dropdown>
          </Card.Header>
          <Card.Body>{note.description}</Card.Body>
          <Card.Footer>
            <Tag label={note.tag} color="gray" className="text-gray-500" />
            <div className="flex items-center space-x-2">
              <Clock size={15} color="gray" />
              <Typography style="body3" className="text-gray-500">
                Created {note.created} ago
              </Typography>
              <Avatar
                user={{
                  name: note.assigned,
                }}
                size="small"
              />
            </div>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default NotesList;

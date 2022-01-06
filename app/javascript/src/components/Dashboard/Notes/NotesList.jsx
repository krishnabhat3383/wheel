import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Avatar, Dropdown } from "neetoui/v2";

const NotesList = ({ notes, setShowDeleteAlert }) => {
  return (
    <div className=" w-full flex flex-col space-y-2 text-gray-800">
      {notes.map((note, idx) => (
        <div className="px-2 w-full border divide-y py-2" key={idx}>
          <div className="flex flex-col space-y-2 px-2 py-2">
            <div className="flex justify-between">
              <Typography style="h4">{note.title}</Typography>
              <Dropdown icon={MenuVertical} buttonStyle="text">
                <li>Edit</li>
                <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
              </Dropdown>
            </div>
            <div className="overflow-auto">{note.description}</div>
          </div>
          <div className="flex justify-between px-2 py-2">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;

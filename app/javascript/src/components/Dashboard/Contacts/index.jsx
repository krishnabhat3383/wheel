import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Header, Container } from "neetoui/layouts";

import { CONTACTS } from "./constants";
import NewContact from "./Create";
import Delete from "./Delete";
import ContactsList from "./List";
import Menubar from "./Menubar";

const Contacts = () => {
  const [isNewContactPaneOpen, setIsNewContactPaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  return (
    <div className="flex w-full overflow-auto">
      <Menubar />
      <Container className="w-full">
        <Header
          menuBarToggle
          title="All Contacts"
          searchProps={{
            placeholder: "Search Name, Email, Phone Number, Ect.",
          }}
          actionBlock={
            <Button
              onClick={() => setIsNewContactPaneOpen(true)}
              label="Add Contact"
              icon={Plus}
            />
          }
        />
        <ContactsList
          contacts={CONTACTS}
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
        />
        <NewContact
          isNewContactPaneOpen={isNewContactPaneOpen}
          setIsNewContactPaneOpen={setIsNewContactPaneOpen}
        />
        {isDeleteAlertOpen && (
          <Delete onClose={() => setIsDeleteAlertOpen(false)} />
        )}
      </Container>
    </div>
  );
};

export default Contacts;

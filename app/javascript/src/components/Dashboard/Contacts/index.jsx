import React, { useState } from "react";

import { Search } from "neetoicons";
import { Input, Button } from "neetoui/v2";
import { Header, Container } from "neetoui/v2/layouts";

import { CONTACTS as contacts } from "./constants";
import ContactsTable from "./ContactsTable";
import DeleteAlert from "./DeleteAlert";
import Menubar from "./Menubar";
import NewContactPane from "./Pane/CreateContact";

const Contacts = () => {
  const [showContactPane, setShowContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <div className="flex w-full overflow-auto">
      <Menubar />
      <Container className="w-full">
        <Header
          menuBarToggle
          title="All Contacts"
          actionBlock={
            <div className="flex space-x-2">
              <Input
                size="small"
                className="w-64"
                prefix={<Search />}
                placeholder="Search Name, Email, Phone Number, Ect."
              />
              <Button
                onClick={() => setShowContactPane(true)}
                label="Add Contact"
                icon="ri-add-line"
              />
            </div>
          }
        />
        <ContactsTable
          contacts={contacts}
          setShowDeleteAlert={setShowDeleteAlert}
        />
        <NewContactPane
          showPane={showContactPane}
          setShowPane={setShowContactPane}
        />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </div>
  );
};

export default Contacts;

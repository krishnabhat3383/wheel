import React from "react";

import { Pane, Typography } from "neetoui";

import ContactForm from "./Form";

export default function NewContact({
  isNewContactPaneOpen,
  setIsNewContactPaneOpen,
}) {
  const onClose = () => setIsNewContactPaneOpen(false);

  return (
    <Pane isOpen={isNewContactPaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <ContactForm onClose={onClose} />
    </Pane>
  );
}

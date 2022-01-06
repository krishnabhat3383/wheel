import React from "react";

import { Modal, Button, Typography, Toastr } from "neetoui/v2";

const DeleteAlert = ({ onClose }) => {
  const handleDelete = async () => {
    try {
      Toastr.success("Note deleted successfully");
      onClose();
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Modal isOpen onClose={onClose} size="medium">
      <Modal.Header>
        <Typography style="h2">Delete Note</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete the note? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button label="Continue" onClick={handleDelete} size="large" />
        <Button style="text" label="Cancel" onClick={onClose} size="large" />
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAlert;

import React from "react";

import { Alert, Toastr } from "neetoui";

const Delete = ({ onClose }) => {
  const handleDelete = async () => {
    try {
      Toastr.success("Contact deleted successfully");
      onClose();
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Alert
      isOpen
      message="Are you sure you want to delete the Contact? This action cannot be undone."
      onClose={onClose}
      onSubmit={handleDelete}
      title="Delete Contact"
    />
  );
};

export default Delete;

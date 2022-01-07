import React from "react";

import { Pane, Button, Toastr, Input, Select } from "neetoui";

const ContactForm = ({ onClose }) => {
  const handleSubmit = async () => {
    try {
      Toastr.success("Contact added successfully");
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <div className="w-full">
      <Pane.Body className="space-y-6">
        <div className="flex space-x-4">
          <Input
            label="First Name"
            name="firstName"
            className="flex-grow-0 w-full"
            required
          />
          <Input
            label="Last Name"
            name="lastName"
            className="flex-grow-0 w-full"
            required
          />
        </div>
        <Input
          label="Email"
          name="email"
          className="flex-grow-0 w-full"
          required
        />
        <Select
          size="small"
          className="w-full flex-grow-0"
          name="role"
          label="Role"
          required
        />
      </Pane.Body>
      <Pane.Footer>
        <Button
          type="submit"
          label="Save Changes"
          size="large"
          style="primary"
          className="mr-3"
          onClick={handleSubmit}
        />
        <Button onClick={onClose} label="Cancel" size="large" style="text" />
      </Pane.Footer>
    </div>
  );
};

export default ContactForm;

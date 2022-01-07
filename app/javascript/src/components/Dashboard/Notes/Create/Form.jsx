import React from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { TAGS, VALIDATION_SCHEMA, INITIAL_VALUES } from "../constants";

export default function NoteForm({ onClose }) {
  const handleSubmit = async () => {
    try {
      Toastr.success("Note created successfully");
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form className="w-full">
        <Pane.Body className="space-y-6">
          <Input
            label="Title"
            name="title"
            className="flex-grow-0 w-full"
            required
          />
          <Input
            label="Description"
            name="description"
            className="flex-grow-0 w-full"
            required
          />
          <Select
            className="w-full flex-grow-0"
            name="assignedContact"
            label="Assigned Contact"
            required
          />
          <Select
            label="Tags"
            className="w-full flex-grow-0"
            name="tag"
            placeholder="Select Role"
            options={TAGS.map(tag => ({ label: tag, value: tag }))}
            required
          />
        </Pane.Body>
        <Pane.Footer>
          <Button
            type="submit"
            label={"Save Changes"}
            size="large"
            style="primary"
            className="mr-3"
          />
          <Button onClick={onClose} label="Cancel" size="large" style="text" />
        </Pane.Footer>
      </Form>
    </Formik>
  );
}

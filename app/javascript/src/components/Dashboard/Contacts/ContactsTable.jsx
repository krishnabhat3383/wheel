import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown, Table, Pagination } from "neetoui/v2";

const ContactsTable = ({ contacts, setShowDeleteAlert }) => {
  const COLUMN_DATA = [
    {
      title: "Name & role",
      dataIndex: "name",
      key: "name",
      width: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "30%",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "20%",
    },
    {
      render: () => (
        <Dropdown buttonStyle="text" icon={MenuVertical} options>
          <li>Edit</li>
          <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col space-y-2 notes-table-height">
      <Table rowData={contacts} columnData={COLUMN_DATA} />
      <div className="ml-auto">
        <Pagination count={500} pageNo={3} pageSize={100} />
      </div>
    </div>
  );
};

export default ContactsTable;

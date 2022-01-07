import React, { useState } from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown, Table } from "neetoui";

const ContactsList = ({ contacts, setIsDeleteAlertOpen }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

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
          <li onClick={() => setIsDeleteAlertOpen(true)}>Delete</li>
        </Dropdown>
      ),
    },
  ];

  return (
    <Table
      rowData={contacts}
      columnData={COLUMN_DATA}
      currentPageNumber={currentPageNumber}
      defaultPageSize={10}
      handlePageChange={page => setCurrentPageNumber(page)}
    />
  );
};

export default ContactsList;

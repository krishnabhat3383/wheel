import React from "react";

import { Typography, Avatar } from "neetoui";
import * as yup from "yup";

export const CONTACTS = [
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Ronald Richards" }} />
        <Typography style="h6" textTransform="uppercase">
          Ronald Richards
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Jacob Jones" }} />
        <Typography style="h6" textTransform="uppercase">
          Jacob Jones
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Ronald Richards" }} />
        <Typography style="h6" textTransform="uppercase">
          Ronald Richards
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Jacob Jones" }} />
        <Typography style="h6" textTransform="uppercase">
          Jacob Jones
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Ronald Richards" }} />
        <Typography style="h6" textTransform="uppercase">
          Ronald Richards
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Jacob Jones" }} />
        <Typography style="h6" textTransform="uppercase">
          Jacob Jones
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Ronald Richards" }} />
        <Typography style="h6" textTransform="uppercase">
          Ronald Richards
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Jacob Jones" }} />
        <Typography style="h6" textTransform="uppercase">
          Jacob Jones
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Ronald Richards" }} />
        <Typography style="h6" textTransform="uppercase">
          Ronald Richards
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Jacob Jones" }} />
        <Typography style="h6" textTransform="uppercase">
          Jacob Jones
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Ronald Richards" }} />
        <Typography style="h6" textTransform="uppercase">
          Ronald Richards
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Jacob Jones" }} />
        <Typography style="h6" textTransform="uppercase">
          Jacob Jones
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Ronald Richards" }} />
        <Typography style="h6" textTransform="uppercase">
          Ronald Richards
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
  {
    name: (
      <div className="flex space-x-1 items-center">
        <Avatar user={{ name: "Jacob Jones" }} />
        <Typography style="h6" textTransform="uppercase">
          Jacob Jones
        </Typography>
      </div>
    ),
    email: (
      <Typography style="body2" className="text-gray-500">
        albert@borer.com
      </Typography>
    ),
    createdAt: (
      <Typography style="body2" className="text-gray-500">
        Feb, 5, 2021
      </Typography>
    ),
  },
];

export const ROLES = ["Work", "Friend", "Family"];

export const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

export const VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email address is required"),
  role: yup.object().required("Role is required"),
});

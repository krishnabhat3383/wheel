import * as yup from "yup";

export const NOTES = [
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting ',
    tag: "Getting Started",
    created: "2 hours ago",
    assigned: "Oliver Smit",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting ',
    tag: "Getting Started",
    created: "2 hours ago",
    assigned: "Oliver Smit",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting ',
    tag: "Getting Started",
    created: "2 hours ago",
    assigned: "Oliver Smit",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting ',
    tag: "Getting Started",
    created: "2 hours ago",
    assigned: "Oliver Smit",
  },
];

export const TAGS = [
  "Getting Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
];

export const INITIAL_VALUES = {
  title: "",
  description: "",
  assignedContact: "",
  tags: "",
};

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup.object().required("Contact must be assigned"),
  tags: yup.object().required("Tag is required"),
});

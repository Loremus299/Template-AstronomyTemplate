import { defineType } from "sanity";

export const PersonalInformation = defineType({
  name: "personal",
  title: "Personal Information",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Your name" },
    { name: "image", type: "image", title: "Your Photo (square)" },
    { name: "expertise", type: "string", title: "Your main occupation" },
    {
      name: "occupation",
      type: "string",
      title: "Your current occupation status",
    },
    { name: "skills", type: "string", title: "All your skills" },
    { name: "custom", type: "string", title: "Some fun fact about you" },
    {
      name: "contact",
      type: "email",
      title: "your email address to contact you",
    },
  ],
});

export const Blog = defineType({
  name: "Blogs",
  title: "Blogs",
  type: "document",
  fields: [
    {
      type: "string",
      name: "heading",
      title: "Blog title",
    },
    {
      type: "image",
      name: "header",
      title: "Header image (2:1 aspect ratio)",
    },
    {
      type: "string",
      name: "subheading",
      title: "Blog Description",
    },
    {
      type: "markdown",
      name: "Blog",
      title: "Blog Content",
    },
  ],
});

export const schemaTypes = [PersonalInformation, Blog];

export default {
  title: "Profile",
  name: "profile",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Headshot",
      name: "headshot",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    },
    {
      title: "Phone",
      name: "phone",
      type: "string",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Summary",
      name: "summary",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required().max(400),
    },
    {
      title: "Skills",
      name: "skills",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      title: "Tools",
      name: "tools",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      title: "Interests",
      name: "interests",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};

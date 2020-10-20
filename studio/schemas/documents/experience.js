import { MdWork } from "react-icons/md";

export default {
  title: "Experience",
  name: "experience",
  type: "document",
  icon: MdWork,
  fields: [
    {
      title: "Job title",
      name: "jobTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Organisation",
      name: "organisation",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Start date",
      name: "startDate",
      type: "date",
      options: {
        dateFormat: "MMM-YYYY",
      },
    },
    {
      title: "End date",
      name: "endDate",
      type: "date",
      options: {
        dateFormat: "MMM-YYYY",
      },
    },
    {
      title: "Current place of work",
      name: "current",
      type: "boolean",
    },
    {
      title: "Full-time?",
      name: "fulltime",
      type: "boolean",
    },
    {
      title: "Summary",
      name: "summary",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.max(400),
    },
    {
      title: "Responsibilities",
      name: "responsibilities",
      type: "array",
      of: [
        {
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required().max(300),
        },
      ],
    },
  ],
  initialValue: {
    current: false,
    fulltime: true,
  },
  preview: {
    select: {
      title: "jobTitle",
      subtitle: "organisation",
    },
  },
  orderings: [
    {
      title: "Most recent",
      name: "mostRecent",
      by: [
        {
          field: "startDate",
          direction: "desc",
        },
      ],
    },
  ],
};

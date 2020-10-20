import { FaGraduationCap } from "react-icons/fa";

export default {
  title: "Education",
  name: "education",
  type: "document",
  icon: FaGraduationCap,
  fields: [
    {
      title: "Institution",
      name: "institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
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
  ],
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

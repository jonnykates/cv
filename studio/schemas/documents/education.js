
export default {
  title: "Education",
  name: "education",
  type: "document",
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
};

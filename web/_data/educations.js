const client = require("../utils/sanityClient");
const groq = require("groq");

module.exports = async function () {
  const educations = await client.fetch(
    groq`*[_type == "education"] | order(startDate desc) {
      description,
      endDate,
      institution,
      location,
      startDate
    }`
  );

  return educations;
};

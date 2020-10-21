const client = require("../utils/sanityClient");
const groq = require("groq");

module.exports = async function () {
  const experiences = await client.fetch(
    groq`*[_type == "experience"] | order(startDate desc) {
      current,
      endDate,
      fulltime,
      jobTitle,
      location,
      organisation,
      responsibilities,
      startDate,
      summary
    }`
  );

  return experiences;
};

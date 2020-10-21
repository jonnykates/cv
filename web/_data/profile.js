const client = require("../utils/sanityClient");
const groq = require("groq");

module.exports = async function () {
  const profile = await client.fetch(
    groq`*[_type == "profile" && name == "Jonny Kates"] {
      email,
      headshot,
      interests,
      links,
      location,
      name,
      phone,
      skills,
      summary,
      tools
    }[0]`
  );

  return profile;
};

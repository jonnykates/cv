const sanityClient = require("@sanity/client");

const config = {
  projectId: "5qvy6xwv",
  dataset: "production",
  useCdn: true,
};

module.exports = sanityClient(config);

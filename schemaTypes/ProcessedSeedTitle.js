
export default {
  name: "whyProcessedSeed",
  title: "HomePage_Why Processed Seed",
  type: "document",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString', // multilingual title
      description: 'The main heading for the card in all languages.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seedPoints",
      title: "Seed Points",
      type: "array",
      of: [{ type: "seedPoint" }],
    },
  ],
};

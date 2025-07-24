export default {
  name: 'cardFourContent',
  title: 'HomePage_Card Four Content',
  type: 'document',

  fields: [
    {
      name: 'mainImage',
      title: 'Card Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The main image displayed on the card.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'localeString', // multilingual title
      description: 'The main heading for the card in all languages.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText', // multilingual description
      description: 'The descriptive text for the card in all languages.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonTextKey',
      title: 'Button Text Translation Key',
      type: 'string',
      description: 'The key used by your Next.js i18n system for the button text (e.g., "sendInquiry").',
      validation: (Rule) => Rule.required(),
      initialValue: 'knowShipraSeeds',
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'Untitled Card Two Content',
        subtitle: 'Inquiry Card Component',
        media: media,
      };
    },
  },
};

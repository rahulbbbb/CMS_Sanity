// schemas/cardOneContent.js (UPDATED)

export default {
  name: 'cardOneContent',
  title: 'HomePage_Card One Content',
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
      type: 'localeString', // <--- NOW uses the new localeString type
      description: 'The main heading for the card in all languages.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText', // <--- NOW uses the new localeText type
      description: 'The descriptive text for the card in all languages.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonTextKey',
      title: 'Button Text Translation Key',
      type: 'string',
      description: 'The key used by your Next.js i18n system for the button text (e.g., "registerNow").',
      validation: (Rule) => Rule.required(),
      initialValue: 'registerNow',
    },
  ],

  preview: {
    select: {
      title: 'title.en', // Show English title in the list preview
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'Untitled Card One Content',
        subtitle: 'Main Card Component',
        media: media,
      };
    },
  },
};
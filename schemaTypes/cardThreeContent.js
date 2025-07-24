export default {
  name: 'cardThreeContent',
  title: 'HomePage_Card Three Content',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      description: 'Localized heading for the card.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText',
      description: 'Localized description paragraph.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonTextKey',
      title: 'Button Text Translation Key',
      type: 'string',
      description: 'Key used for the CTA button (e.g., "viewProducts").',
      validation: (Rule) => Rule.required(),
      initialValue: 'viewProducts',
    },
    {
      name: 'crops',
      title: 'Crops',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'name',
              title: 'Crop Name',
              type: 'localeString',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'url',
              validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https'],
                allowRelative: true,
              }),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).max(10),
    },
  ],

  preview: {
    select: {
      title: 'title.en',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled Card Three Content',
        subtitle: 'Crop Category Card',
      };
    },
  },
};

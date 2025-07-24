export default {
  name: 'whyChooseUs',
  title: 'HomePage_Why Choose Us Section',
  type: 'document',
  fields: [
    {
      name: 'SectionTitle',
      title: 'Section Title',
      type: 'localeString',
      description: 'Main heading for this section in multiple languages',
    },
    {
      name: 'features',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'localeString',
              description: 'Feature title in multiple languages',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'localeText',
              description: 'Feature description in multiple languages',
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description:
                'Use Lucide icon name like "Award", "Gem", "Sparkles", etc. Ensure it matches the icon import in the frontend.',
            },
            {
              name: 'accentColorClass',
              title: 'Accent Color Class',
              type: 'string',
              description: 'e.g., bg-agri-green-medium, bg-agri-orange-harvest',
            },
            {
              name: 'iconColorClass',
              title: 'Icon Color Class',
              type: 'string',
              description: 'e.g., text-white, text-agri-text-dark',
            },
          ],
        },
      ],
    },
  ],
};

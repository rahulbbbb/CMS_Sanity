// schemas/footer.ts

export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'footerSections',
      title: 'Footer Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
            },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Text',
                      type: 'string',
                    },
                    {
                      name: 'href',
                      title: 'Link (URL or Mail)',
                      type: 'url',
                    },
                    {
                      name: 'type',
                      title: 'Type',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Address', value: 'address' },
                          { title: 'Email', value: 'email' },
                          { title: 'Link', value: 'link' },
                        ],
                        layout: 'radio',
                      },
                    },
                    {
                      name: 'icon',
                      title: 'Icon Name (Lucide)',
                      type: 'string',
                      description: 'e.g. MapPin, Mail, ShieldCheck, LockKeyhole',
                    },
                    {
                      name: 'isExternal',
                      title: 'Open in New Tab?',
                      type: 'boolean',
                      initialValue: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© [year] Shipra Seeds. All rights reserved.',
    },
  ],
};

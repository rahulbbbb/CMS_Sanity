// schemas/localeText.js (for longer text fields)
export default {
  name: 'localeText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'text',
    },
    {
      name: 'hi',
      title: 'Hindi',
      type: 'text',
    },
    {
      name: 'pa',
      title: 'Punjabi',
      type: 'text',
    },
  ],
};
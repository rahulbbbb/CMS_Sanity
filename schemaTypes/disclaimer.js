export default {
  name: 'disclaimerSection',
  type: 'document',
  title: 'Disclaimer Section',
  fields: [
    ...Array.from({ length: 63 }, (_, i) => ({
      name: `item${i + 1}`,
      type: 'localeString',
      title: `Item ${i + 1}`,
    })),
  ],
};

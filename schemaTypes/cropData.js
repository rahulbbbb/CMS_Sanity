export const cropVariety = {
  name: 'cropVariety',
  title: 'Crop Variety',
  type: 'document',
  fields: [
    { name: 'name', title: 'Variety Name', type: 'localeString', validation: Rule => Rule.required() },
    { name: 'maturity', title: 'Maturity', type: 'localeString' },
    { name: 'yield', title: 'Yield', type: 'localeString' },
    { name: 'specialTrait', title: 'Special Trait', type: 'localeString' },
    { name: 'aboutVariety', title: 'About Variety', type: 'localeString' },
    { name: 'whyItCreated', title: 'Why It Was Created', type: 'localeString' },
    { name: 'image', title: 'Main Image', type: 'image' },
    {
      name: 'weightImages',
      title: 'Weight Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'weight', title: 'Weight', type: 'localeString' },
            { name: 'image', title: 'Image', type: 'image' }
          ]
        }
      ]
    }
  ]
};

// Optional - if you want cropCategory too:
export const cropCategory = {
  name: 'cropCategory',
  title: 'Crop Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'localeString',
      validation: Rule => Rule.required()
    },
    {
      name: 'varieties',
      title: 'Varieties',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'cropVariety' }] }]
    }
  ]
};

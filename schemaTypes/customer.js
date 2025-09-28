export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
    { name: 'phone', title: 'Phone (E.164)', type: 'string', description: '+9198...' , validation: Rule => Rule.required() }
  ]
}

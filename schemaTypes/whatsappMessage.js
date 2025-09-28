export default {
  name: 'whatsappMessage',
  title: 'WhatsApp Message (send)',
  type: 'document',
  fields: [
    {
      name: 'recipients',
      title: 'Recipients',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'customer' }] }],
      description: 'Select one or more customers'
    },
    {
      name: 'template',
      title: 'Template',
      type: 'reference',
      to: [{ type: 'whatsappTemplate' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'extraVars',
      title: 'Extra vars (comma separated)',
      type: 'string',
      description: 'Optional: extra template params applied for all recipients after {{1}} which will be recipient.name'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: [{title:'Pending',value:'pending'},{title:'Sent',value:'sent'},{title:'Failed',value:'failed'}] },
      readOnly: true,
      initialValue: 'pending'
    }
  ]
}

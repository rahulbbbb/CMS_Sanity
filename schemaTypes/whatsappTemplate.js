export default {
  name: 'whatsappTemplate',
  title: 'WhatsApp Template (meta)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Friendly title', type: 'string' }, // shown to client
    { name: 'templateName', title: 'Meta template name', type: 'string', description: 'Exact name in Meta (eg order_update)' },
    { name: 'languageCode', title: 'Language code', type: 'string', initialValue: 'en_US' }
  ]
}

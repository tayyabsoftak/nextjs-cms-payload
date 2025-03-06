import type { Block } from 'payload'
export const ContactPageBlock: Block = {
  slug: 'contactpage',
  interfaceName: 'ContactPageBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'contactdesc',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'visitaddress',
      type: 'text',
      label: 'Campus Address',
    },
    {
      name: 'phoneno',
      type: 'text',
      label: 'Campus Phone No',
    },
    {
      name: 'contactemail',
      type: 'text',
      label: 'Contact Email',
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: false,
    },
    {
      name: 'websitelink',
      type: 'text',
      label: 'Website Link',
    },
  ],
}

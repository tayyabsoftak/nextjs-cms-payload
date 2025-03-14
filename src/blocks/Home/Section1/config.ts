import type { Block } from 'payload'

export const HomeSection1Block: Block = {
  slug: 'homesection1',
  interfaceName: 'HomeSection1Block',
  labels: {
    singular: 'Home section1',
    plural: 'homes section1',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      label: 'Columns',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
      ],
    },
  ],
}

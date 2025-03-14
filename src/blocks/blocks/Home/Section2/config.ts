import type { Block } from 'payload'

export const HomeSection2Block: Block = {
  slug: 'homesection2',
  interfaceName: 'HomeSection2Block',
  labels: {
    singular: 'Home Section 2',
    plural: 'Home Sections 2',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'badge',
          type: 'text',
          label: 'Badge',
        },
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
          name: 'image1',
          type: 'upload',
          relationTo: 'media',
          label: 'Image 1',
        },
        {
          name: 'image2',
          type: 'upload',
          relationTo: 'media',
          label: 'Image 2',
        },
      ],
    },
  ],
}

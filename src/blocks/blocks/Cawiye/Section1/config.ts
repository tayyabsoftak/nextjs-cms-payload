import type { Block } from 'payload'
export const CawiyeSection1Block: Block = {
  slug: 'cawiye_section1',
  interfaceName: 'CawiyeSection1Block',
  labels: {
    singular: 'cawiye section1 Block',
    plural: 'cawiye Section1 Blocks',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
      ],
    },
  ],
}

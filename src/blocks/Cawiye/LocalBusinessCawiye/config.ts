import type { Block } from 'payload'
export const LocalBusinessCawiyeBlock: Block = {
  slug: 'local_business_cawiye',
  interfaceName: 'LocalBusinessCawiyeBlock',
  labels: {
    singular: 'Local Business Cawiye Block',
    plural: 'Local Business Cawiye Blocks',
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
      name: 'cards',
      type: 'array',
      label: 'Cards',
      maxRows: 3,
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      fields: [
        {
          name: 'card_title',
          type: 'text',
          label: 'Card Title',
        },
        {
          name: 'card_description',
          type: 'textarea',
          label: 'Card Description',
        },
      ],
    },
  ],
}

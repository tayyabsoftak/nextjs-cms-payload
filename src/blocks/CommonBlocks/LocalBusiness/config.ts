import type { Block } from 'payload'

export const LocalBusinessBlock: Block = {
  slug: 'local_business',
  interfaceName: 'LocalBusinessBlock',
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
      maxRows: 4,
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
  labels: {
    singular: 'Local Business Block',
    plural: 'Local BusinessBlocks',
  },
}

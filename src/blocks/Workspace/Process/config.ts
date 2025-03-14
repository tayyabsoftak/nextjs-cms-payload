import type { Block } from 'payload'
export const ProcessBlock: Block = {
  slug: 'process',
  interfaceName: 'ProcessBlock',
  labels: {
    singular: 'Workspace Page Process Block',
    plural: 'Workspace Page Process Blocks',
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
      name: 'cards',
      type: 'array',
      label: 'Cards',
      maxRows: 3,
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      admin: {
        initCollapsed: true,
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

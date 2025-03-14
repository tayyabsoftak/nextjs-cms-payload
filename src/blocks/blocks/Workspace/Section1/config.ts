import type { Block } from 'payload'
export const WorkspaceSection1Block: Block = {
  slug: 'workspace_section1',
  interfaceName: 'WorkspaceSection1Block',
  labels: {
    singular: 'Workspace Section1 Block',
    plural: 'Workspace Section1 Blocks',
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
      fields: [
        {
          name: 'card_title',
          type: 'text',
          label: 'Card Title',
        },
        {
          name: 'points',
          type: 'array',
          label: 'points',
          labels: {
            singular: 'points',
            plural: 'points',
          },
          fields: [
            {
              name: 'point',
              type: 'text',
              label: 'Point',
            },
          ],
        },
        {
          name: 'card_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Image',
        },
      ],
    },
  ],
}

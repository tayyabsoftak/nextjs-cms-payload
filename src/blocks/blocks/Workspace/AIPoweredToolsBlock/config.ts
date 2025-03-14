import type { Block } from 'payload'
export const WorkspaceSection2Block: Block = {
  slug: 'workspace_section2',
  interfaceName: 'WorkspaceSection2Block',
  labels: {
    singular: 'Workspace page Powered Tools Block',
    plural: 'Workspace page Powered Tools Blocks',
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
      ],
    },
  ],
}

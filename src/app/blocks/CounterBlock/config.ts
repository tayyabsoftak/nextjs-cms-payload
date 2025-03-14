import type { Block } from 'payload'

export const Counters: Block = {
  slug: 'counter',
  interfaceName: 'CountersBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      label: 'Columns',
      minRows: 4,
      maxRows: 4,
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Number',
        },
        {
          name: 'content',
          type: 'text',
          label: 'Content',
        },
      ],
    },
  ],
  labels: {
    plural: 'Counters',
    singular: 'Counter',
  },
}

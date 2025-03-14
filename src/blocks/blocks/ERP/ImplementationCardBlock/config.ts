import { Block } from 'payload'

const ImplementationProcessBlock: Block = {
  slug: 'implementation_processblock',
  interfaceName: 'ImplementationBlock',
  fields: [
    {
      name: 'listItems',
      type: 'array',
      label: 'List Items',
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Items List',
          maxRows: 6,
          fields: [
            {
              name: 'item',
              type: 'text',
              label: 'Item',
            },
          ],
        },
      ],
    },
  ],
  labels: {
    singular: 'ERP Page Process Block',
    plural: 'ERP Page Process Block',
  },
}

export default ImplementationProcessBlock

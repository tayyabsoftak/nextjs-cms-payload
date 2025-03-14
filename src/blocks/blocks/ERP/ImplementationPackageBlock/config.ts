import { Block } from 'payload'

const ImplementationPackageBlock: Block = {
  slug: 'implementation_packageblock',
  interfaceName: 'ImplementationPackageBlock',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Title',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'card',
      type: 'array',
      label: 'Add card',
      maxRows: 3,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },
        {
          name: 'carditems',
          type: 'array',
          label: 'Add card',
          maxRows: 3,
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
            },
            {
              name: 'subdesc',
              type: 'text',
              label: 'Description',
            },
            {
              name: 'items',
              type: 'array',
              label: 'Items List',
              maxRows: 5,
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
    },
  ],
  labels: {
    singular: 'ERP Page Package Block',
    plural: 'ERP Page Package Block',
  },
}

export default ImplementationPackageBlock

import { Block } from 'payload'

const CoreModuleBlock: Block = {
  slug: 'core_moduleblock',
  interfaceName: 'CoreModuleBlock',
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
      name: 'carditems',
      type: 'array',
      label: 'Add card',
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
          maxRows: 5,
          fields: [
            {
              name: 'item',
              type: 'text',
              label: 'Item',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Upload Image',
        },
      ],
    },
  ],
  labels: {
    singular: 'ERP Page Core Module Block',
    plural: 'ERP Page Core Modules Block',
  },
}

export default CoreModuleBlock

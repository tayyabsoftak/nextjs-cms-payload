import { Block } from 'payload'

const ImplementationGuaranteesBlock: Block = {
  slug: 'implementation_guaranteesblock',
  interfaceName: 'GuaranteesBlock',
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
          name: 'description',
          type: 'text',
          label: 'Description',
        },
      ],
    },
  ],
  labels: {
    singular: 'ERP Page Gurantee Block',
    plural: 'ERP Page Gurantees Block',
  },
}

export default ImplementationGuaranteesBlock

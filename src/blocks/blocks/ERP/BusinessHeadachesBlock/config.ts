import { Block } from 'payload'

const BusinessHeadachesBlock: Block = {
  slug: 'business_headaches',
  interfaceName: 'BusinessHeadachesBlock',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'beforeTitle',
      type: 'text',
      label: 'Before ERP Implementation Title',
    },
    {
      name: 'beforeList',
      type: 'array',
      label: 'Before ERP Implementation List',
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
      name: 'afterTitle',
      type: 'text',
      label: 'After ERP Implementation Title',
    },
    {
      name: 'afterList',
      type: 'array',
      label: 'After ERP Implementation List',
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
  labels: {
    singular: 'Business Headache ERP Page',
    plural: 'Business Headache ERP Page',
  },
}

export default BusinessHeadachesBlock

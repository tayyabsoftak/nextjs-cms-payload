import type { Block } from 'payload'
export const CawiyeProcessBlock: Block = {
  slug: 'cawiye_process',
  interfaceName: 'CawiyeProcessBlock',
  labels: {
    singular: 'cawiye Process Block',
    plural: 'cawiye Process Blocks',
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
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'plans',
      type: 'array',
      label: 'Plans',
      maxRows: 3,
      labels: {
        singular: 'Plan',
        plural: 'Plans',
      },
      fields: [
        {
          name: 'step',
          type: 'text',
          label: 'Step',
        },
        {
          name: 'Choose_plan',
          type: 'textarea',
          label: 'Choose Plan',
        },
      ],
    },
  ],
}

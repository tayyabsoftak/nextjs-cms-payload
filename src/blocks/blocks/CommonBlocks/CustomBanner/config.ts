import type { Block } from 'payload'

export const CustomBannerBlock: Block = {
  slug: 'custom_banner',
  interfaceName: 'CustomBannerBlock',

  fields: [
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
  ],
  labels: {
    singular: 'Custom Banner Block',
    plural: 'Custom Banner Block',
  },
}

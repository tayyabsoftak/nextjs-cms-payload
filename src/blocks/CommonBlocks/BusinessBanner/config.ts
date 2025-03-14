import type { Block } from 'payload'

export const BusinessBannerBlock: Block = {
  slug: 'business_banner',
  interfaceName: 'BusinessBannerBlock',

  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'points',
      type: 'array',
      label: 'points',
      maxRows: 5,
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Upload Image',
    },
  ],
  labels: {
    singular: 'Business Banner Block',
    plural: 'Business Banner Block',
  },
}

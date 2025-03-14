import type { Block } from 'payload'
export const PricingSystemBlock: Block = {
  slug: 'pricing_system',
  interfaceName: 'PricingSystemBlock',
  labels: {
    singular: 'Pricing System Block',
    plural: 'Pricing System Block',
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
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price',
        },
        {
          name: 'price_caption',
          type: 'text',
          label: 'Price Caption',
        },
        {
          name: 'feature',
          type: 'text',
          label: 'Feature',
        },
        {
          name: 'description',
          type: 'text',
          label: 'description',
        },
        {
          name: 'points',
          type: 'array',
          label: 'points',
          labels: {
            singular: 'point',
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

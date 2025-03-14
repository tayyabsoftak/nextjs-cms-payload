import type { Block } from 'payload'
export const AboutSection2Block: Block = {
  slug: 'about_section2',
  interfaceName: 'AboutSection2Block',
  labels: {
    singular: 'About Section2 Block',
    plural: 'About Section2 Blocks',
  },
  fields: [
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
          name: 'card_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Image',
        },
        {
          name: 'card_title',
          type: 'text',
          label: 'Card Title',
        },
        {
          name: 'points',
          type: 'array',
          label: 'points',
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
      ],
    },
  ],
}

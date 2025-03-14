import type { Block } from 'payload'
export const AboutSection3Block: Block = {
  slug: 'about_section3',
  interfaceName: 'AboutSection3Block',
  labels: {
    singular: 'About Section3 Block',
    plural: 'About Section3 Blocks',
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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'designation',
          type: 'text',
          label: 'Designation',
        },
        {
          name: 'experience',
          type: 'text',
          label: 'Experience',
        },
      ],
    },
  ],
}

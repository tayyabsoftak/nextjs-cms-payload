import type { Block } from 'payload'
export const AboutSection1Block: Block = {
  slug: 'aboutsection1',
  interfaceName: 'AboutSection1Block',
  labels: {
    singular: 'About section1',
    plural: 'About section1',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
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
    },
  ],
}

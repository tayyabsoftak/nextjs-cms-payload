import type { Block } from 'payload'
export const CawiyeSection2Block: Block = {
  slug: 'cawiye_section2',
  interfaceName: 'CawiyeSection2Block',
  labels: {
    singular: 'Cawiye Section2 Block ',
    plural: 'Cawiye Section2 Block ',
  },
  fields: [
    {
      name: 'left_card',
      type: 'array',
      label: 'Cards_left',
      labels: {
        singular: 'Card left',
        plural: 'Cards left',
      },
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
          name: 'description1',
          type: 'textarea',
          label: 'description1',
        },
        {
          name: 'socials',
          type: 'array',
          label: 'socials',
          labels: {
            singular: 'social',
            plural: 'socials',
          },
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'icon',
            },
            {
              name: 'name',
              type: 'text',
              label: 'name',
            },
          ],
        },
        {
          name: 'description2',
          type: 'textarea',
          label: 'description2',
        },
      ],
    },
    {
      name: 'right_card',
      type: 'array',
      label: 'Cards_right',
      labels: {
        singular: 'Card right',
        plural: 'Cards right',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description1',
          type: 'textarea',
          label: 'description 1',
        },
        {
          name: 'description2',
          type: 'textarea',
          label: 'description 2',
        },
      ],
    },
  ],
}

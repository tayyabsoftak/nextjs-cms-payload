import { Block } from 'payload'

export const CornerCardsBlock: Block = {
  slug: 'cornercardsblock',
  interfaceName: 'CornerCardsBlock',
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      maxRows: 7,
      fields: [
        {
          name: 'desc',
          type: 'text',
          label: 'Description',
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          // required: true,
        },
        {
          name: 'linkText',
          type: 'text',
          label: 'Link Text',
          // required: true,
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Link URL',
          // required: true,
        },
      ],
    },
  ],
}

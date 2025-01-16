import type { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faqblock',
  interfaceName: 'FaqBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQ',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Faq Question',
          required: true,
        },
        {
          name: 'answere',
          type: 'text',
          label: 'Faq Answere',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'cities',
      type: 'array',
      label: 'Add Citiy Name and image',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'cityname',
          type: 'text',
          label: 'City Name',
          required: true,
        },
      ],
    },
  ],
}

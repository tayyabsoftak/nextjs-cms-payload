import type { Block } from 'payload'
export const FAQsBlock: Block = {
  slug: 'faqs',
  interfaceName: 'FAQsBlock',
  labels: {
    singular: 'FAQs Block',
    plural: 'FAQs Blocks',
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
      label: 'Slider Cards',
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
        },
      ],
    },
  ],
}

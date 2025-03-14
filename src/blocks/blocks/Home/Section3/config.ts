import type { Block, Field } from 'payload'

const CardFields: Field[] = [
  {
    name: 'card_image',
    type: 'upload',
    relationTo: 'media', // Ensure 'media' collection exists for image uploads
    label: 'Card Image',
  },
  {
    name: 'card_title',
    type: 'text',
    label: 'Card Title',
  },
  {
    name: 'card_description',
    type: 'textarea',
    label: 'Card Description',
  },
]

// Define the grid block with columns (items in the grid)
export const HomeSection3Block: Block = {
  slug: 'homesection3',
  interfaceName: 'HomeSection3Block',
  labels: {
    singular: 'Home section3',
    plural: 'homes section3',
  },
  fields: [
    // ✅ Common fields (badge, title, caption)
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
    // ✅ Cards array (Allows multiple cards with "Add Card" button)
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      admin: {
        initCollapsed: true, // Cards section remains collapsed initially
      },
      fields: CardFields, // Fields for each card
    },
    {
      name: 'enableLink',
      type: 'checkbox',
      label: 'Enable Link',
      admin: {
        description: 'Check this to enable the link field.',
      },
    },
  ],
}

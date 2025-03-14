import type { Block, Field } from 'payload'
import { link } from '@/fields/link' // Link field for optional links

// Fields for individual cards
const CardFields: Field[] = [
  {
    name: 'card_image',
    type: 'upload',
    relationTo: 'media', // Ensure 'media' collection exists for image uploads
    label: 'Card Image',
  },
  {
    name: 'card_title_name',
    type: 'text',
    label: 'Card Title Name',
  },
  {
    name: 'card_job_name',
    type: 'text',
    label: 'Card Job Name',
  },
  {
    name: 'card_description',
    type: 'textarea',
    label: 'Card Description',
  },
  {
    name: 'card_caption',
    type: 'text',
    label: 'Card Caption',
  },
  {
    name: 'enableLink',
    type: 'checkbox',
    label: 'Enable Link',
    admin: {
      description: 'Check this to enable the link field.',
    },
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink), // Show link only if enableLink is true
      },
    },
  }),
]

// Main block structure
export const RealStoriesBlock: Block = {
  slug: 'real_stories',
  interfaceName: 'RealStoriesBlock',
  labels: {
    singular: 'Real Stories Block',
    plural: 'Real Stories Blocks',
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
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
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
  ],
}

import type { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faqblock',
  interfaceName: 'FaqBlock',
  fields: [
    {
      name: 'accordion', // Array of Titles
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'title', // Title field for each FAQ section
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
              name: 'answere', // Answers with address, phone, and email
              type: 'array',
              label: 'Faq Answer',
              required: true,
              minRows: 1,
              maxRows: 1,
              fields: [
                {
                  name: 'address',
                  type: 'text',
                  label: 'Address',
                  required: true,
                },
                {
                  name: 'phone',
                  type: 'text',
                  label: 'Phone No',
                  required: true,
                },
                {
                  name: 'email',
                  type: 'text',
                  label: 'Email',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'image', // Map Image for the FAQ block
      type: 'upload',
      label: 'Map Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'cities', // Array of cities with images and names
      type: 'array',
      label: 'Add city image and name',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'image', // Image of the city
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'cityname', // City Name
          type: 'text',
          label: 'City Name',
          required: true,
        },
      ],
    },
  ],
}

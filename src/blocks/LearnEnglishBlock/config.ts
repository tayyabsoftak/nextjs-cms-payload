import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
export const LearnEnglishBlock: Block = {
  slug: 'learnEnglish',
  interfaceName: 'LearnEnglishBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          label: 'Background Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      options: [
        { label: 'White', value: 'bg-white' },
        { label: 'Gray', value: 'bg-gray-200' },
        { label: 'Black', value: 'bg-black text-white' },
        { label: 'Light Green', value: 'bg-[#D5E8DE]' },
        { label: 'Light Gray', value: 'bg-[#F0F0F0]' },
        { label: 'Dark Blue', value: 'bg-[#072C49] text-white' },
      ],
    },
  ],
  labels: {
    singular: 'Learning English Block',
    plural: 'Learning English Blocks',
  },
}

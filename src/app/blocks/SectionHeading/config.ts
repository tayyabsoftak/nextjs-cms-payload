import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Sections: Block = {
  slug: 'section',
  interfaceName: 'SectionsHeading',
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
    plural: 'Sections',
    singular: 'Section',
  },
}

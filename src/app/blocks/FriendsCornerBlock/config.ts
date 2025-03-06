import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
export const FriendsCornerBlock: Block = {
  slug: 'friendscorner',
  interfaceName: 'FriendsCornerBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'subtitle', // i want here h4 text how
      type: 'text',
      label: 'SubHeading',
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
      name: 'images',
      type: 'array',
      label: 'Video Card',
      required: true,
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
        },
      ],
    },
    {
      name: 'reviews',
      type: 'array',
      label: 'Reviews',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Reviewr Name',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
        },
        {
          name: 'organization',
          type: 'text',
          label: 'Organization or University Name',
          required: true,
        },
      ],
    },
  ],
  labels: {
    singular: 'Friends Corner',
    plural: 'Friends Corners',
  },
}

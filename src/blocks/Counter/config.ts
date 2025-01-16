import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'

export const Counters: Block = {
  slug: 'counter',
  interfaceName: 'CountersBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      label: 'Columns',
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
        },
        {
          name: 'content',
          type: 'text',
          label: 'Content',
        },
      ],
    },
  ],
  labels: {
    plural: 'Counters',
    singular: 'Counter',
  },
}

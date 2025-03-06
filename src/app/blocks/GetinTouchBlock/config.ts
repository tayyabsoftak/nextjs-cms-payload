import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
export const GetinTouchBlock: Block = {
  slug: 'getintouch',
  interfaceName: 'GetinTouchBlock',
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'desc',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'officetiming',
      type: 'array',
      maxRows: 1,
      label: 'Office Day & Time',
      fields: [
        { name: 'startDay', type: 'text', label: 'Start Day', required: true },
        { name: 'endDay', type: 'text', label: 'End Day', required: true },
        { name: 'startTime', type: 'text', label: 'Start Time', required: true },
        { name: 'endTime', type: 'text', label: 'End Time', required: true },
      ],
    },
    {
      name: 'contactInfo',
      type: 'array',
      label: 'Contact Information',
      maxRows: 2,
      fields: [{ name: 'phone', type: 'text', label: 'Phone Number', required: true }],
    },
    {
      name: 'subDescription',
      type: 'text',
      label: 'Sub Heading',
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
        { label: 'Light Green', value: 'bg-[#D5E8DE]' },
        { label: 'Light Gray', value: 'bg-[#F0F0F0]' },
      ],
    },
  ],
}

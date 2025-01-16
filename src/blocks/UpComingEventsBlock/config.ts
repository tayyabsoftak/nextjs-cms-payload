import type { Block } from 'payload'

export const UpComingEventsBlock: Block = {
  slug: 'upcomingevents',
  interfaceName: 'UpComingEventsBlock',
  fields: [
    {
      name: 'months',
      type: 'array',
      label: 'Months',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      name: 'year',
      type: 'text',
      label: 'Year',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Event Cards',
      labels: {
        singular: 'Event Card',
        plural: 'Event Cards',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'para1',
          type: 'text',
          label: 'Main Title',
        },
        {
          name: 'para2',
          type: 'textarea',
          label: 'Sub Title',
        },
        {
          name: 'date',
          type: 'text',
          label: 'Date',
        },
        {
          name: 'time',
          type: 'text',
          label: 'Time',
        },
        {
          name: 'peoples',
          type: 'text',
          label: 'People Count',
        },
        {
          name: 'events',
          type: 'text',
          label: 'Event Details',
        },
        {
          name: 'public',
          type: 'text',
          label: 'Public Information',
        },
      ],
    },
    {
      name: 'link',
      type: 'text',
      label: 'Youtube Video Link',
      required: false,
    },
  ],
  labels: {
    singular: 'Upcoming Event Block',
    plural: 'Upcoming Event Blocks',
  },
}

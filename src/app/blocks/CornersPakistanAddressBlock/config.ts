import { Block } from 'payload'

export const CornersPakistanAddresses: Block = {
  slug: 'cornerspakistanaddress',
  interfaceName: 'CornersPakistanAddresses',
  fields: [
    {
      name: 'places',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'placeName',
          type: 'text',
          label: 'Enter Place Name',
          required: true,
        },
        {
          name: 'addressInfo',
          type: 'array',
          label: 'Add Place Details',
          minRows: 1,
          maxRows: 5,
          required: true,
          fields: [
            {
              name: 'campusName',
              type: 'text',
              label: 'Campus Title',
              required: true,
            },
            {
              name: 'fullAddress',
              type: 'text',
              label: 'Complete Address',
              required: true,
            },
            {
              name: 'contactNumber',
              type: 'text',
              label: 'Contact Number',
              required: true,
            },
            {
              name: 'emailAddress',
              type: 'text',
              label: 'Contact Email',
              required: true,
            },
            {
              name: 'mapaddress',
              type: 'text',
              label: 'Copy only src link from Embed a map',
            },
          ],
        },
      ],
    },
  ],
}

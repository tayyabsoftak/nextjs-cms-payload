import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'columnTitle',
          type: 'text',
          label: 'Column Title',
          required: true,
        },
        {
          name: 'navItems',
          type: 'array',
          label: 'Links',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 10,
          admin: {
            initCollapsed: true,
          },
        },
      ],
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}

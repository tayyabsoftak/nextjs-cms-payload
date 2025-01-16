import type { Block } from 'payload'
import { linkGroup } from '../../fields/linkGroup'

export const CornerCardsBlock: Block = {
  slug: 'cornercardsblock',
  interfaceName: 'CornerCardsBlock',
  fields: [
    {
      name: 'desc',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        minRows: 1,
        maxRows: 7,
      },
    }),
  ],
}

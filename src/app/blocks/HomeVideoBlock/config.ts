import { Block } from 'payload'

export const HomeVideoBlock: Block = {
  slug: 'homevideoblock',
  interfaceName: 'HomeVideoBlock',
  fields: [
    {
      name: 'video',
      type: 'text',
      label: 'Enter Video link',
    },
  ],
}

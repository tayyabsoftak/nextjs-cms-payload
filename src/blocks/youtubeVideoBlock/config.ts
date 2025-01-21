import { Block } from 'payload'

export const YoutubeVideoBlock: Block = {
  slug: 'youtubevideo',
  interfaceName: 'YoutubeVideoBlock',
  fields: [
    {
      name: 'link',
      type: 'text',
      label: 'Youtube Video Link',
      required: false,
    },
  ],
}

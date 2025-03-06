import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { CallToAction } from '@/app/blocks/CallToAction/config'
import { Content } from '@/app/blocks/Content/config'
import { MediaBlock } from '@/app/blocks/MediaBlock/config'
import { Archive } from '@/app/blocks/ArchiveBlock/config'
import { FormBlock } from '@/app/blocks/Form/config'
import { Counters } from '@/app/blocks/CounterBlock/config'
import { Sections } from '@/app/blocks/SectionHeading/config'
import { UpComingEventsBlock } from '@/app/blocks/UpComingEventsBlock/config'
import { FriendsCornerBlock } from '@/app/blocks/FriendsCornerBlock/config'
import { FaqBlock } from '@/app/blocks/FaqBlock/config'
import { GetinTouchBlock } from '@/app/blocks/GetinTouchBlock/config'
import { CornerCardsBlock } from '@/app/blocks/CustomHtml/config'
import { HomeVideoBlock } from '@/app/blocks/HomeVideoBlock/config'
import { SixPillarsBlock } from '@/app/blocks/SixPillarsBlock/config'
import { CornersPakistanAddresses } from '@/app/blocks/CornersPakistanAddressBlock/config'
import { ContactPageBlock } from '@/app/blocks/ContactPageBlock/config'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                Counters,
                Sections,
                CornerCardsBlock,
                HomeVideoBlock,
                UpComingEventsBlock,
                SixPillarsBlock,
                FriendsCornerBlock,
                FaqBlock,
                GetinTouchBlock,
                CornersPakistanAddresses,
                ContactPageBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    beforeDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}

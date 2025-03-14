import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { CountersBlock } from './CounterBlock/Component'
import { ArchiveBlock } from './blocks/ArchiveBlock/Component'
import { ContentBlock } from './blocks/Content/Component'
import { CallToActionBlock } from './blocks/CallToAction/Component'
import { FormBlock } from './blocks/Form/Component'
import { MediaBlock } from './blocks/MediaBlock/Component'
import { SectionsHeading } from '@/app/blocks/SectionHeading/Component'
import HomeVideoBlock from './HomeVideoBlock/component'
import { CornerCardsBlock } from './CustomHtml/Component'
import { UpComingEventsBlock } from '@/app/blocks/UpComingEventsBlock/Component'
import { SixPillarsBlock } from './SixPillarsBlock/Component'
import { FriendsCornerBlock } from './FriendsCornerBlock/Component'
import { FaqBlock } from './FaqBlock/Component'
import { GetinTouchBlock } from '@/app/blocks/GetinTouchBlock/Component'
import CornersPakistanAddresses from './CornersPakistanAddressBlock/Component'
import ContactPageBlock from './ContactPageBlock/component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  counter: CountersBlock,
  section: SectionsHeading,
  homevideoblock: HomeVideoBlock,
  cornercardsblock: CornerCardsBlock,
  upcomingevents: UpComingEventsBlock,
  sixpillarsblock: SixPillarsBlock,
  friendscorner: FriendsCornerBlock,
  faqblock: FaqBlock,
  getintouch: GetinTouchBlock,
  cornerspakistanaddress: CornersPakistanAddresses,
  contactpage: ContactPageBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="" key={index}>
                  <Block {...(block as any)} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}

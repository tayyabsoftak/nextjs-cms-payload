import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { CountersBlock } from './CounterBlock/Component'
import { SectionsHeading } from './SectionHeading/Component'
import { CornerCardsBlock } from './CustomHtml/Component'
import { UpComingEventsBlock } from './UpComingEventsBlock/Component'
import { SixPillarsBlock } from './SixPillarsBlock/Component'
import { FriendsCornerBlock } from './FriendsCornerBlock/Component'
import { FaqBlock } from './FaqBlock/Component'
import { GetinTouchBlock } from './GetinTouchBlock/Component'
import CornersPakistanAddresses from './CornersPakistanAddressBlock/Component'
import ContactPageBlock from './ContactPageBlock/component'
import HomeVideoBlock from './HomeVideoBlock/component'
import { ArchiveBlock } from './ArchiveBlock/Component'
import { ContentBlock } from './Content/Component'
import { CallToActionBlock } from './CallToAction/Component'
import { FormBlock } from './Form/Component'
import { MediaBlock } from './MediaBlock/Component'

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

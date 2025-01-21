import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { CountersBlock } from './Counter/Component'
import { SectionsHeading } from './SectionHeading/Component'
import { CornerCardsBlock } from './CustomHtml/Component'
import { UpComingEventsBlock } from './UpComingEventsBlock/Component'
import { LearnEnglishBlock } from './LearnEnglishBlock/Component'
import { FriendsCornerBlock } from './FriendsCornerBlock/Component'
import { FaqBlock } from './FaqBlock/Component'
import { GetinTouchBlock } from './GetinTouchBlock/Component'
import YoutubeVideoBlock from './youtubeVideoBlock/component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  counter: CountersBlock,
  section: SectionsHeading,
  youtubevideo: YoutubeVideoBlock,
  cornercardsblock: CornerCardsBlock,
  upcomingevents: UpComingEventsBlock,
  learnEnglish: LearnEnglishBlock,
  friendscorner: FriendsCornerBlock,
  faqblock: FaqBlock,
  getintouch: GetinTouchBlock,
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

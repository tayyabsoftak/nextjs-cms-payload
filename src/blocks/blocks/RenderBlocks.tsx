import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HomeSection1 } from './Home/Section1/Component'
import { HomeSection2 } from './Home/Section2/Component'
import { HomeSection3 } from './Home/Section3/Component'
import { RealStories } from './CommonBlocks/RealStories/Component'
import { LocalBusiness } from './CommonBlocks/LocalBusiness/Component'
import { CustomBanner } from './CommonBlocks/CustomBanner/Component'
import { WorkspaceSection1 } from './Workspace/Section1/Component'
import { WorkspaceSection2 } from './Workspace/AIPoweredToolsBlock/Component'
import { PricingSystem } from './CommonBlocks/PricingSystem/Component'
import { Process } from './Workspace/Process/Component'
import { FAQs } from './CommonBlocks/FAQs/Component'
import { AboutSection1 } from './About/Section1/Component'
import { AboutSection2 } from './About/Section2/Component'
import { AboutSection3 } from './About/Section3/Component'
import { CawiyeSection1 } from './Cawiye/Section1/Component'
import { CawiyeSection2 } from './Cawiye/Section2/Component'
import { LocalBusinessCawiye } from './Cawiye/LocalBusinessCawiye/Component'
import { Slider } from './CommonBlocks/Slider/Component'
import BusinessHeadachesBlock from './ERP/BusinessHeadachesBlock/Component'
import ImplementationProcessBlock from './ERP/ImplementationCardBlock/Component'
import CoreModuleBlock from './ERP/CoreModulesBlock/Component'
import ImplementationPackageBlock from './ERP/ImplementationPackageBlock/Component'
import ImplementationGuaranteesBlock from './ERP/ImplementationGuaranteesBlock/Component'
import { BusinessBannerBlock } from './CommonBlocks/BusinessBanner/Component'
import { CawiyeProcess } from './Cawiye/CawiyeProcessBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  homesection1: HomeSection1,
  homesection2: HomeSection2,
  homesection3: HomeSection3,
  real_stories: RealStories,
  local_business: LocalBusiness,
  business_banner: BusinessBannerBlock,
  custom_banner: CustomBanner,
  workspace_section1: WorkspaceSection1,
  workspace_section2: WorkspaceSection2,
  pricing_system: PricingSystem,
  process: Process,
  faqs: FAQs,
  aboutsection1: AboutSection1,
  about_section2: AboutSection2,
  about_section3: AboutSection3,
  cawiye_section1: CawiyeSection1,
  cawiye_section2: CawiyeSection2,
  local_business_cawiye: LocalBusinessCawiye,
  slider: Slider,
  business_headaches: BusinessHeadachesBlock,
  implementation_processblock: ImplementationProcessBlock,
  core_moduleblock: CoreModuleBlock,
  implementation_packageblock: ImplementationPackageBlock,
  implementation_guaranteesblock: ImplementationGuaranteesBlock,
  cawiye_process: CawiyeProcess,
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

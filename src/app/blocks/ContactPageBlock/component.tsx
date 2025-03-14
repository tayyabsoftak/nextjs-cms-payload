import React from 'react'
import { ContactPageBlock as ContactPageBlockProps } from '@/payload-types'
import { FormBlock } from '../Form/Component'
import { FaLinkedin, FaXTwitter, FaSquareFacebook, FaGlobe, FaPhone } from 'react-icons/fa6'
import { TbBrandInstagramFilled } from 'react-icons/tb'

const socialFooterLinks = [
  {
    to: 'https://instagram.com',
    icon: <FaSquareFacebook size={26} />,
    label: 'Facebook',
  },
  {
    to: 'https://instagram.com',
    icon: <TbBrandInstagramFilled size={28} />,
    label: 'Instagram',
  },
  {
    to: 'https://facebook.com',
    icon: <FaLinkedin size={24} />,
    label: 'Facebook',
  },
  {
    to: 'https://twitter.com',
    icon: <FaXTwitter size={24} />,
    label: 'Twitter',
  },
]

const ContactPageBlock: React.FC<ContactPageBlockProps> = ({
  title,
  contactdesc,
  visitaddress,
  phoneno,
  contactemail,
  websitelink,
  form,
}) => {
  const transformedForm: any | null = typeof form === 'object' && form !== null ? form : null

  return (
    <div className="container">
      <div className="sm:p-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 my-5 md:my-0">
          {title && <p className="text-start text-[2rem] md:text-[3rem] font-bold">{title}</p>}
          {contactdesc && <p className=" mt-5">{contactdesc}</p>}
          <div className="mt-5 flex-col md:flex-row space-y-2">
            {visitaddress && (
              <p>
                <strong>Address: </strong>
                {visitaddress}
              </p>
            )}
            {phoneno && (
              <p>
                <strong>Phone: </strong>
                {phoneno}
              </p>
            )}
            {contactemail && (
              <p>
                <strong>Email: </strong>
                {contactemail}
              </p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-7 md:mb-0">
          <FormBlock enableIntro={false} form={transformedForm} />
        </div>
      </div>
      <div className="flex flex-col space-y-4 mb-10">
        <div className="flex flex-row gap-4 cursor-pointer">
          <FaGlobe
            size={24}
            className="transition-transform transform hover:scale-110 hover:opacity-80"
          />
          <p>{websitelink}</p>
        </div>
        <div className="flex flex-row gap-4 cursor-pointer">
          <FaPhone
            size={24}
            className="transition-transform transform hover:scale-110 hover:opacity-80"
          />
          <p>{websitelink}</p>
        </div>
        <div className="flex md:justify-start items-center gap-4">
          {socialFooterLinks.map((link, index) => (
            <a
              key={index}
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 hover:opacity-80"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactPageBlock

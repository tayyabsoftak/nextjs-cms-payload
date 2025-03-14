'use client'
import { useGlobalContext } from '@/context'
import { CornersPakistanAddresses as CornersPakistanAddressProps } from '@/payload-types'

const tabs = [
  { id: 'place_1', label: 'Islamabad' },
  { id: 'place_2', label: 'Lahore' },
  { id: 'place_3', label: 'Karachi' },
  { id: 'place_4', label: 'Peshawar' },
]

const CornersPakistanAddresses: React.FC<CornersPakistanAddressProps> = ({ places }) => {
  const { activeTab, setActiveTab } = useGlobalContext()

  const handleTabClick = (tabId: string) => setActiveTab(tabId)

  const getCityIndex = (tabId: string) => {
    switch (tabId) {
      case 'place_1':
        return 0 // Islamabad
      case 'place_2':
        return 1 // Lahore
      case 'place_3':
        return 2 // Karachi
      case 'place_4':
        return 3 // Peshawar
      default:
        return 0
    }
  }

  const currentCityIndex = getCityIndex(activeTab)

  const currentCity = places ? places[currentCityIndex] : null
  const currentCityAddressInfo = currentCity ? currentCity.addressInfo : []

  return (
    <div>
      <div className="bg-[#EBFFF5] px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row">
          <ul className="flex flex-col sm:flex-row w-full justify-center sm:justify-start transition-all duration-300">
            {tabs.map((tab) => (
              <li key={tab.id} className="sm:mx-2 mb-4 sm:mb-0">
                <a
                  href="javascript:void(0)"
                  className={`flex items-center mt-4 py-2 px-6 text-gray-800 hover:text-green-700 font-medium whitespace-nowrap ${
                    activeTab === tab.id ? 'text-green-700' : 'text-gray-700'
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                  role="tab"
                >
                  {tab.label}
                </a>
                {activeTab === tab.id && (
                  <div className="h-[2px] bg-green-700 w-full mx-auto mt-8" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="px-4 sm:px-6 md:px-8">
        {currentCityAddressInfo && currentCityAddressInfo.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">{currentCity?.placeName}</h2>
            {currentCityAddressInfo.map((address, index) => (
              <div key={address.id || index} className="mb-4">
                <h3 className="font-semibold">{address.campusName}</h3>
                <p>
                  <strong>Address: </strong>
                  {address.fullAddress}
                </p>
                <p>
                  <strong>Phone:</strong> {address.contactNumber}
                </p>
                <p>
                  <strong>Email:</strong> {address.emailAddress}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No addresses available for this city.</p>
        )}
      </div> */}
      <div className="px-4 sm:px-6 md:px-8">
        {currentCityAddressInfo && currentCityAddressInfo.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">{currentCity?.placeName}</h2>
            {currentCityAddressInfo.map((address, index) => (
              <div
                key={address.id || index}
                className="mb-8 flex flex-col md:flex-row items-start justify-between gap-6"
              >
                {/* Left side: Address info */}
                <div className="flex-1">
                  <h3 className="font-semibold">{address.campusName}</h3>
                  <p>
                    <strong>Address: </strong>
                    {address.fullAddress}
                  </p>
                  <p>
                    <strong>Phone:</strong> {address.contactNumber}
                  </p>
                  <p>
                    <strong>Email:</strong> {address.emailAddress}
                  </p>
                </div>

                {/* Right side: Google Maps iframe */}
                <div className="mt-4 md:mt-0 w-full md:w-[45%]">
                  <iframe
                    src={address.mapaddress ?? ''}
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No addresses available for this city.</p>
        )}
      </div>
    </div>
  )
}

export default CornersPakistanAddresses

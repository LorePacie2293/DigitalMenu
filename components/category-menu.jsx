import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

const CategoryMenu = ({openCategoryCall, currentCategory}) => {

const solutions = [
  {
    name: 'bevande analcoliche',
    icon: 'https://firebasestorage.googleapis.com/v0/b/cicerietria-fd084.appspot.com/o/bottle.png?alt=media&token=7fcda19f-14de-4033-a1cf-c5091752b754',
  },
  {
    name: 'Vini',
    icon: 'https://firebasestorage.googleapis.com/v0/b/cicerietria-fd084.appspot.com/o/wine.png?alt=media&token=91c0b6bf-e03d-4682-b004-525573507517',
  },
  {
    name: 'Birre',
    icon: 'https://firebasestorage.googleapis.com/v0/b/cicerietria-fd084.appspot.com/o/beer.png?alt=media&token=2892cbf8-bb6d-4cd8-89d1-c9e79f13b8cf',
  },
  {
    name: 'Amari e liquori',
    icon: 'https://firebasestorage.googleapis.com/v0/b/cicerietria-fd084.appspot.com/o/liquor.png?alt=media&token=6acdb089-271a-4ac9-b5b5-14efed624aa0',
  },
  {
    name: 'plates',
    icon: 'https://firebasestorage.googleapis.com/v0/b/cicerietria-fd084.appspot.com/o/spaghetti.png?alt=media&token=bd4c1c0b-116b-46f4-a51e-336cd01a3d6d',
  },
]
  return (
    <div className="w-full max-w-sm ">
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
              ${open ? '' : 'text-opacity-90'}
              group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-black hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span>{currentCategory}</span>
            <ChevronDownIcon
              className={`${open ? '' : 'text-opacity-70'}
                ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 -top-48 sm:-top-52 z-50 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-gray-50 p-7 grid-cols-2">
                  {solutions.map((item) => {

                    return(
                      <>
                        {(item.name != currentCategory) && <a
                          key={item.name}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          onClick={() => openCategoryCall(item.name)}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">

                           <img src={item.icon} alt={item.id} />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </a>}
                      </>)
                    })}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  </div>
  )
}

export default CategoryMenu;
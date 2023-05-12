import { Disclosure} from '@headlessui/react'
import { useEffect } from 'react';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const piattiInit = [
  { name: 'Tutti', current: true },
  { name: 'Antipasti', current: false },
  { name: 'Primi', current: false },
  { name: 'Secondi', current: false },
  { name: 'Dessert', current: false },
]

const Bevande_analcolicheInit = [
  { name: 'Tutti', current: true },
  { name: 'Acqua', current: false },
  { name: 'Bevande gassate', current: false },
]

const viniInit = [
  { name: 'Tutti', current: true },
  { name: 'Rossi', current: false },
  { name: 'Rosati', current: false },
  { name: 'Bianchi', current: false },
  { name: 'Frizzanti', current: false },
]

export default function Filterbar({setFilter, currCategory}) {

  const [currentFilter, setCurrentFilter] = useState("Tutti");
  const [currentCategory, setCurrentCategory] = useState(piattiInit);

  const setActiveFilter = (clickedFilter) => {
    setFilter(clickedFilter)
    setCurrentFilter(clickedFilter)
  }

  useEffect(() => {
 
    if(currCategory === 'plates')
      setCurrentCategory(piattiInit)
    else if(currCategory === 'bevande analcoliche')
      setCurrentCategory(Bevande_analcolicheInit)
    else if(currCategory === 'Vini')
      setCurrentCategory(viniInit)
    
  }, [currCategory])

  return (
    <>
        <Disclosure as="nav" className="bg-white fixed w-full top-0">
        {() => (
            <div className="max-w-9xl flex justify-center">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center justify-around">
                  <div>
                    <img
                      className="hidden h-16 w-auto lg:block "
                      src="https://firebasestorage.googleapis.com/v0/b/cicerietria-fd084.appspot.com/o/13139039_225557174502522_1398673767940557029_n.jpg?alt=media&token=3c7ef11e-ccfb-47a6-b99c-967a598a0e4a"
                      alt="Your Company"
                    />
                  </div>
                  <div className="ml-6 sm:block ">
                    <div className='-space-x-3 sm:space-x-7 lg:space-x-10'>
                      {currentCategory.map((item) => (
                        <a 
                          key={item.name}
                          className={classNames(
                            item.current ? 'bg-gray-700 text-white' : 'text-black-300',
                            'rounded-md px-3 py-2 text-sm font-medium mx-auto'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          onClick={(event) => {
                            currentCategory.map(category => {
                              category.current = false;
                            })
                            item.current = true;
                            setActiveFilter(item.name)
                          }}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
      </Disclosure>
      


    </>             
  )
}
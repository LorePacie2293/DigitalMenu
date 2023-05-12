import { Fragment } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import useDetermineBreakPoint from '../../hooks/useDetermineBreakPoint';
import useFirebaseGetSubcollectionByName from '../../hooks/useFirebaseGetSubcollectionByName';

const PlateDetailsDialog = ({dialogStatus, close, setDialog, currentPlate}) => {

    const breakpoint = useDetermineBreakPoint();
    const docsIngredient = useFirebaseGetSubcollectionByName('plates', `${(currentPlate) ? currentPlate.namePlate : '#'}`, 'ingredienti');
    
    return(

    <Transition.Root show={dialogStatus} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={setDialog}>
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center text-center md:items-center md:px-2 lg:px-4">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                >
                    <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-3xl md:px-4 lg:max-w-4xl xl:max-w-5xl">
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <button
                                type="button"
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                onClick={() => close(false)}
                            >
                                <span className="sr-only">Close</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                                {(currentPlate && breakpoint === 'mobilePortrait') && <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{currentPlate.namePlate}</h2>}

                                <div className=" rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-4 sm:w-96 md:w-80 lg:w-96">
                                    {currentPlate && <img src={currentPlate.url} alt={'product.imageAlt'} className="object-cover object-center h-96 sm:h-96 w-full"/>}
                                </div>
                                <div className="sm:col-span-8 lg:col-span-7 sm:ml-40 md:ml-32 ">
                                    {(currentPlate && breakpoint !== 'mobilePortrait') && <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{currentPlate.namePlate}</h2>}

                                    <section aria-labelledby="information-heading" className="mt-2 border-t border-gray-200 pt-4">
                                        {currentPlate && <p className="text-1xl text-gray-900 ">{currentPlate.description}</p>}
                                        <div className="pt-4 text-center">
                                            <dt className="sm:absolute sm:bottom-18 sm:right-32 font-medium text-gray-900">Prezzo</dt>
                                            {currentPlate && <p className="text-1xl text-gray-900 sm:absolute sm:bottom-18 sm:right-16 ">{currentPlate.price},00</p>}
                                        </div>
                                    </section>

                                    <div className="border-t border-gray-200 pt-4 mt-8">
                                        <dt className="font-medium text-gray-900">Ingredienti</dt>
                                        <ul className="grid grid-cols-4 md:grid-cols-4 ">
                                            {docsIngredient.map((ingr) => {
                                                            
                                                return(
                                                <li key={ingr.id} className='col-span-2'>
                                                    <dd className="mt-4 text-sm text-gray-500">{ingr.id}</dd>
                                                </li>  
                                                )
                                            })}
                                        </ul>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </div>
        </div>
    </Dialog>
</Transition.Root> )          
}

export default PlateDetailsDialog;
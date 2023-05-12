import useFirebaseFirestoneGetCollection from '../hooks/useFirebaseFirestoneGetCollection';
import { useState } from 'react';
import PlateDetailsDialog from './dialog-components/plate-details-dialog';
import Filterbar from './filter-bar';
import FooterNav from '../components/footer-nav';
import { motion } from "framer-motion";

export default function MenuCard() {

    const [currentCategory, setCurrentCategory] = useState('plates');
    const [open, setOpen] = useState(false)
    const [currentPlate, setCurrentPlate] = useState();
    const [filterState, setFilterState] = useState('Tutti');

    const {docs} = useFirebaseFirestoneGetCollection(currentCategory);

    function closeModal() {
        setOpen(false)
    }
    
    function openModal(plate) {
      
        setCurrentPlate(plate)
        setOpen(true)
    }

    function setFilter(filter){
        setFilterState(filter);
    }

    function openCategoryMenu(category){
        setCurrentCategory(category);
        setFilterState('Tutti');
    }

    return (
        <>
            <Filterbar setFilter={setFilter} currCategory={currentCategory}/>

             {/*----------------- PIATTI ------------------------*/}
            <div className="bg-white min-h-screen overflow-y-hidden">
                {((filterState === 'Tutti' || filterState === 'Antipasti') && currentCategory === 'plates') && <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className='text-4xl text-center'>Antipasti</h2>
                    <motion.div className="container grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8" 
                    
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2.0 }}
                  >
                        {docs.filter((doc) => {
                            return doc.category === 'Antipasti';
                        }).map((product) => (
                         
                        <div key={product.id} onClick={(event) => {
                            openModal(product);
                        }} 
                       >
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.url}
                                alt={product.imageAlt}
                                className="h-80 w-full object-cover object-center group-hover:opacity-75"
                            />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.namePlate}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price},00</p>
                        </div>
                        ))}
                    </motion.div>
                </div>}
                {((filterState === 'Tutti' || filterState === 'Primi') && currentCategory === 'plates') && <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className='text-4xl text-center'>Primi piatti</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
                        {docs.filter((doc) => {
                            return doc.category === 'Primi';
                        }).map((product) => (
                        <a key={product.id} onClick={(event) => {
                            openModal(product);
                        }}>
                            <div className="aspect-w-1 aspect-h-1  overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.url}
                                    alt={product.imageAlt}
                                    className="h-80 w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.id}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price},00</p>
                        </a>
                        ))}
                    </div>
                </div>}
                {((filterState === 'Tutti' || filterState === 'Secondi') && currentCategory === 'plates') && <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                    <h2 className='text-4xl text-center'>Secondi piatti</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
                        {docs.filter((doc) => {
                            return doc.category === 'Secondi';
                        }).map((product) => (
                        <a key={product.id} onClick={(event) => {
                            openModal(product);
                        }}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.url}
                                alt={product.imageAlt}
                                onClick={openModal}
                                className="h-80 w-full object-cover object-center group-hover:opacity-75"
                            />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.namePlate}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price},00</p>
                        </a>
                        ))}
                    </div>
                </div>}
                {((filterState === 'Tutti' || filterState === 'Dessert') && currentCategory === 'plates') && <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className='text-4xl text-center'>Dessert</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
                        {docs.filter((doc) => {
                            return doc.category === 'Dessert';
                        }).map((product) => (
                        <a key={product.id} onClick={(event) => {
                            openModal(product);
                        }}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.url}
                                alt={product.imageAlt}
                                onClick={openModal}
                                className="h-80 w-full object-cover object-center group-hover:opacity-75"
                            />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.namePlate}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price},00</p>
                        </a>
                        ))}
                    </div>
                </div>}

                {/*BEVANDE ANALCOLICHE*/}
                {((filterState === 'Tutti' || filterState === 'Acqua') && currentCategory === 'bevande analcoliche') && <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className='text-4xl text-center'>Acqua</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
                        {docs.filter((doc) =>{
                            return doc.category === 'Acqua';
                        }).map((product) => (
                        <a key={product.id} onClick={(event) => {
                            openModal(product);
                        }}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.url}
                                alt={product.imageAlt}
                                className="h-80 w-full object-cover object-center group-hover:opacity-75"
                            />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.namePlate}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price},00</p>
                        </a>
                        ))}
                    </div>
                </div>}
                {((filterState === 'Tutti' || filterState === 'Bevande gassate') && currentCategory === 'bevande analcoliche') && <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className='text-4xl text-center'>Bevande gassate</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
                        {docs.filter((doc) => {
                            return doc.category === 'Bevande gassate';
                        }).map((product) => (
                        <a key={product.id} onClick={(event) => {
                            openModal(product);
                        }}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.url}
                                alt={product.imageAlt}
                                className="h-80 w-full object-cover object-center group-hover:opacity-75"
                            />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.namePlate}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price},00</p>
                        </a>
                        ))}
                    </div>
                </div>}

                {/*VINI*/}
                {((filterState === 'Tutti' || filterState === 'Rossi') && currentCategory === 'Vini') && <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className='text-4xl text-center'>Vini rossi</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
                        {docs.filter((doc) => {
                            return doc.category === 'Vini';
                        }).map((product) => (
                        <a key={product.id} onClick={(event) => {
                            openModal(product);
                        }}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.url}
                                alt={product.imageAlt}
                                className="h-80 w-full object-cover object-center group-hover:opacity-75"
                            />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.namePlate}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price},00</p>
                        </a>
                        ))}
                    </div>
                </div>}
                {((filterState === 'Tutti' || filterState === 'Bianchi') && currentCategory === 'Vini') && <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className='text-4xl text-center'>Vini bianchi</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
                        {docs.filter((doc) => {
                            return doc.category === 'Vini';
                        }).map((product) => (
                        <a key={product.id} onClick={(event) => {
                            openModal(product);
                        }}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.url}
                                alt={product.imageAlt}
                                className="h-80 w-full object-cover object-center group-hover:opacity-75"
                            />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.namePlate}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price},00</p>
                        </a>
                        ))}
                    </div>
                </div>}
                {((filterState === 'Tutti' || filterState === 'Rosati') && currentCategory === 'Vini') && <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className='text-4xl text-center'>Vini rosati</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
                        {docs.filter((doc) => {
                            return doc.category === 'Vini';
                        }).map((product) => (
                        <a key={product.id} onClick={(event) => {
                            openModal(product);
                        }}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.url}
                                alt={product.imageAlt}
                                className="h-80 w-full object-cover object-center group-hover:opacity-75"
                            />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.namePlate}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price},00</p>
                        </a>
                        ))}
                    </div>
                </div>}
                {((filterState === 'Tutti' || filterState === 'Frizzanti') && currentCategory === 'Vini') && <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className='text-4xl text-center'>Vini frizzanti</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
                        {docs.filter((doc) => {
                            return doc.category === 'Vini';
                        }).map((product) => (
                        <a key={product.id} onClick={(event) => {
                            openModal(product);
                        }}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.url}
                                alt={product.imageAlt}
                                className="h-80 w-full object-cover object-center group-hover:opacity-75"
                            />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.namePlate}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price},00</p>
                        </a>
                        ))}
                    </div>
                </div>}
            </div>
            <FooterNav openCategoryCall={openCategoryMenu} currentCategory={currentCategory}/>
            <PlateDetailsDialog dialogStatus={open} close={closeModal} setDialog={setOpen} currentPlate={currentPlate}/> 
        </>
    )
  }
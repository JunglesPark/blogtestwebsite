import React, { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'

//img
import logoSrc from "../assets/SonivyLogo/sonivy-long-logo.png"


const Navbar = () => {
    const [langauge, setLanguage] = useState("en")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigation = [
        {name: 'About Sonivy', links:[
            {name: 'About Us', href:'/about'},
            {name: 'Latest News', href:'/news'},
        ]},
        {name: 'Services', links:[
            {name: 'Cloud', href:'/services/cloud'},
            {name: 'Middleware', href:'/services/middleware'},
        ]},
        {name: 'Contact Us', href:'/contactus'},
    ]

  return (
    <header className='bg-white'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
            {/* Logo */}
            <a href="/" className='-m-1.5 p-1.5'>
                <img className='h-8 w-auto' src={logoSrc} alt="logo" />
            </a>

            {/* Mobile menu button */}
            <div className='flex lg:hidden'>
                <button type="button" className="-m-2.5 inline-flex items-center justify-center border-0 rounded-none p-2.5 text-gray-700 hover:text-[#239CCF]"
                    onClick={()=> setMobileMenuOpen(true)}>
                    <span className='sr-only'>Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            {/* Menu on LG Screen */}
            <div className='hidden lg:flex items-end lg:gap-x-12'>
                {navigation.map((item, idx) => (
                    <Fragment key={idx}>
                        {item.links ?
                            <Menu as="div" className="relataive inline-block text-left" key={item.name}>
                                <div>
                                    <Menu.Button className='inline-flex w-full justify-center rounded-none bg-white text-gray-900 hover:text-gray-500 border-0'>
                                        {item.name} <ChevronDownIcon className='ml-2 mt-1 h-4 w-4 text-[#239CCF]'/>
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={React.Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute mt-2 w-56 z-10 origin-top-right divide-y divide-gray-100 rounded-sm border bg-white shadow-lg bg-opacity-90">
                                        <div className="px-1 py-1">
                                                {item.links.map((menuItem) =>{
                                                    return(
                                                        <Menu.Item key={menuItem.name}>
                                                            {({active})=>(
                                                                <a className={`${active ? 'bg-[#239CCF] text-white' : 'text-gray-900'} group flex w-full items-center px-2 py-2 rounded-sm`} href={menuItem.href}>
                                                                    {menuItem.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    )
                                                })}

                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            :
                            <a key={item.name} href={item.href} className='text-gray-900 hover:text-gray-500 flex'>
                                {item.name}
                            </a>
                        }
                    </Fragment>
                ))}

                {/* Language  */}
                <div className='flex'>
                    <button className='border-2 border-[#035C87] px-5 border-r-0 rounded-none bg-white hover:bg-gray-200'>
                        <span className='text-[#239CCF]'>English</span>
                    </button>
                    <button className='border-2 border-[#035C87] px-5 rounded-none bg-white hover:bg-gray-200'>
                        <span className='text-[#239CCF]'>中文</span>
                    </button>
                </div>
        
            </div>

            {/* Mobile Menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={()=> setMobileMenuOpen(false)}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className='-m-1.5 p-1.5'>
                            <img className='h-8 w-auto' src={logoSrc} alt="logo" />
                        </a>
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 border-0 hover:text-[#239CCF] rounded-none"
                            onClick={()=> setMobileMenuOpen(false)}>
                                <span className='sr-only'>Close main menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y- diveide-gray-500/10'>
                            <div className="space-y-2 py-6">
                                {navigation.map((item, idx) =>{
                                    return(
                                        <Fragment key={idx}>
                                        {item.href ? 
                                            <>
                                                <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    {item.name}
                                                </a>
                                            </>
                                            :
                                            <>
                                                <div key={item.name} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    {item.name}
                                                </div>
                                                {item.links ?
                                                    <>
                                                        {item.links.map((menuItem, idx) =>{
                                                            return(
                                                                <a key={menuItem.name + idx} href={menuItem.href} className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                                    {menuItem.name}
                                                                </a>
                                                            )
                                                        })}
                                                    </>
                                                    :
                                                    null                                            
                                                }
                                            </>
                                        }
                                        </Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
                
            </Dialog>

        </nav>
    </header>
  )
}

export default Navbar
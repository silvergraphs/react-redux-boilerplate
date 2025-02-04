import { Popover, Transition } from '@headlessui/react';
import AleiaLogo from '../../assets/aleia_logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';

const navigation = [
    { name: 'About us', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Contacts', href: '#' },
];

export const NavBar = () => (
    <div className="relative bg-white">
        <div className="mx-auto">
            <div className="">
                <svg
                    className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <Popover>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8 md:flex md:justify-between">
                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="#">
                                        <img
                                            alt="Aleia Logo"
                                            className="h-8 w-auto sm:h-7"
                                            src={AleiaLogo}
                                        />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                                            <span className="sr-only">
                                                Open main menu
                                            </span>
                                            <Bars3Icon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:ml-10 md:pr-4 md:pt-3 md:space-x-9">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="font-medium hover:text-gray-500 font-open hover:transition-all transition ease-in-out duration-200"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </nav>
                        <a
                            href={''}
                            className="font-medium hover:text-gray-500 pt-3 hidden md:block font-open"
                        >
                            En
                        </a>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden height:100%"
                        >
                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src={AleiaLogo}
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                                            <span className="sr-only">
                                                Close main menu
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </div>
    </div>
);

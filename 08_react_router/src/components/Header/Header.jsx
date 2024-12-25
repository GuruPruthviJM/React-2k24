import React from 'react'
import {Link, NavLink} from "react-router"
// Link--a
// NavLink--
export function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



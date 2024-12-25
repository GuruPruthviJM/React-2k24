import React from 'react'
import { Link } from 'react-router';
export function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}


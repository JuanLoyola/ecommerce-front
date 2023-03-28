import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className='w-full h-[4rem] flex justify-center items-center bg-white shadow'>

                    {/* mobile */}
                    <nav className='w-full md:hidden'>
                        <ul className='w-full flex justify-between items-center'>
                            <li>Logo</li>
                            <li>

                            </li>
                        </ul>
                    </nav>

                    {/* desktop */}
                    <nav className='hidden w-full lg:max-w-7xl py-5 gap-x-24 md:flex justify-center items-center'>
                        {/* <img src="" alt="" /> */}
                        <p>logo</p>

                        <ul className='w-full max-w-xl flex justify-evenly items-center font-semibold'>
                            <li><a href="#" className='hover:text-red-600'>Soporte</a></li>
                            <li><a href="#" className='hover:text-red-600'>Capacitación</a></li>
                            <li><a href="#" className='hover:text-red-600'>News</a></li>
                            <li className='dropdown hover:text-red-600'>
                                <p className='inline-flex justify-center items-center gap-x-1'>
                                    Nosotros
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </p>
                                <ul className='bg-white  p-4  shadow pt-3 gap-y-5 dropdown-options'>
                                    <li>
                                        <a href="#" className='hover:text-red-500'>Contacto</a>
                                    </li>
                                    <li>
                                        <a href="#" className='hover:text-red-500'>Corporativo</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}


import { cn } from '@/lib/utils.js'
import React from 'react'
import { useMenuStore } from '@/store/zustand/menu'
import useListener from '@/hooks/useListener'

import { NavLink } from 'react-router-dom'

/*
eğer toggle menüsü kalın gelirse
h-0.5 -> translate-y-[5px]
h-1 -> translate-y-[6px]
 */
function Navbar() {
    const isOpen = useMenuStore((store) => store.isOpen)
    const toggleMenu = useMenuStore((store) => store.toggle)
    const t = useListener()
    console.log(t)

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <div
            className={cn(
                'sticky left-0 right-0 top-0 mx-auto flex w-full items-center justify-end gap-x-2 p-4 sm:w-full md:w-full md:justify-center lg:flex lg:w-full',
                isOpen ? 'sticky right-0 top-0 z-[300]' : 'backdrop-blur-xxl right-0 top-0 z-[400] bg-transparent '
            )}
        >
            <button
                className='z-[300] flex size-12 flex-col items-center justify-center gap-y-2 md:hidden'
                onClick={toggleMenu}
            >
                <span
                    className={cn(
                        'h-1 w-2/3 transform bg-white transition-all duration-300',
                        isOpen && 'translate-y-[6px] rotate-45'
                    )}
                />
                <span
                    className={cn(
                        'h-1 w-2/3 transform bg-white transition-all duration-300',
                        isOpen && '-translate-y-[6px] -rotate-45'
                    )}
                />
            </button>

            <div className='hidden w-full md:flex md:h-14 md:items-center md:justify-center'>
                <ul
                    className={cn(
                        'w-full gap-x-4 *:px-5 *:py-3 *:text-white *:transition-colors md:flex md:w-1/2 md:justify-between *:md:text-2xl *:md:font-bold',
                        isOpen ? 'flex' : 'hidden'
                    )}
                >
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'bg-[#b68d40] px-5 py-3' : ' hover:bg-[#d6ad60]')}
                    >
                        Anasayfa
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => (isActive ? 'bg-[#b68d40] px-5 py-3' : ' hover:bg-[#d6ad60]')}
                    >
                        Hakkımda
                    </NavLink>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) => (isActive ? 'bg-[#b68d40] px-5 py-3' : ' hover:bg-[#d6ad60]')}
                    >
                        Projeler
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

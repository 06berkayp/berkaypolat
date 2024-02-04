import { cn } from '@/lib/utils.js'
import React from 'react'
import { useMenuStore } from '@/store/zustand/menu'
import useListener from '@/hooks/useListener'

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
                'container sticky left-0 right-0 top-0 mx-auto flex w-[90%] items-center justify-between gap-x-2 p-4 sm:w-[75%] md:w-[65%] lg:flex lg:w-[90%]',
                isOpen ? 'bg-black/60 backdrop-blur-xl' : 'z-[100] bg-transparent backdrop-blur-xl'
            )}
        >
            <h1 className='text-2xl font-bold text-white'>Berkay</h1>
            <button
                className='flex size-12 flex-col items-center justify-center gap-y-2 md:hidden'
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
            <div className='hidden md:flex'>
                <ul className={cn('gap-x-4 md:flex', isOpen ? 'flex' : 'hidden')}>
                    <li className='text-white'>Home</li>
                    <li className='text-white'>About</li>
                    <li className='text-white'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

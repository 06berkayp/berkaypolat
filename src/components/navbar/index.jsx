import React from 'react'
import classNames from 'classnames'

/*
eğer toggle menüsü kalın gelirse
h-0.5 -> translate-y-[5px]
h-1 -> translate-y-[6px]
 */
function Navbar() {
    const [menu, setMenu] = React.useState(false)

    const handleMenu = () => setMenu(!menu)

    return (
        <div className=' flex items-center justify-end gap-x-2 p-4'>
            <button
                className='flex size-12 flex-col items-center justify-center gap-y-2 md:hidden'
                onClick={handleMenu}
            >
                <span
                    className={classNames(
                        'h-1 w-2/3 transform bg-white transition-all duration-300',
                        menu && 'translate-y-[6px] rotate-45'
                    )}
                />
                <span
                    className={classNames(
                        'h-1 w-2/3 transform bg-white transition-all duration-300',
                        menu && '-translate-y-[6px] -rotate-45'
                    )}
                />
            </button>
            <div className='hidden md:flex'>
                <ul className={classNames('gap-x-4 md:flex', menu ? 'flex' : 'hidden')}>
                    <li className='text-white'>Home</li>
                    <li className='text-white'>About</li>
                    <li className='text-white'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

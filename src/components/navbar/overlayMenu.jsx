import { NavLink } from 'react-router-dom'
import menus from '@/lib/menu'
import { cn } from '@/lib/utils.js'
import { useMenuStore } from '@/store/zustand/menu.js'

export default function OverlayMenu() {
    const closeMenu = useMenuStore((state) => state.close)
    const isOpen = useMenuStore((state) => state.isOpen)

    return isOpen ? (
        <div className='fixed bottom-0 left-0 right-0 top-[80px] z-[100] flex items-center justify-center bg-black/60 p-8 backdrop-blur-xl'>
            <ul className='flex w-full flex-col gap-y-4'>
                {menus.map((menu, index) => (
                    <li key={index}>
                        <NavLink
                            to={menu.to}
                            className={({ isActive }) =>
                                cn(
                                    'text-white transition-all duration-300',
                                    isActive ? 'text-5xl font-bold text-yellow-400' : 'text-3xl'
                                )
                            }
                            onClick={closeMenu}
                        >
                            {menu.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    ) : null
}

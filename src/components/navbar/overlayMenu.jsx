import { NavLink } from 'react-router-dom'
import menus from '@/lib/menu'
import { cn } from '@/lib/utils.js'
import { useMenuStore } from '@/store/zustand/menu.js'
import { AnimatePresence, motion } from 'framer-motion'

export default function OverlayMenu() {
    const closeMenu = useMenuStore((state) => state.close)
    const isOpen = useMenuStore((state) => state.isOpen)
    const menuVars = {
        initial: {
            scaleX: 0,
        },
        animate: {
            scaleX: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            scaleX: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    }

    const mobileLinkVars = {
        initial: {
            x: '200vw',
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            x: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1],
            },
        },
    }

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={menuVars}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className='fixed inset-0 bottom-0 left-0 right-0 z-[100] flex h-full origin-right items-center justify-center bg-black/70 p-8 backdrop-blur-xl'
                >
                    <motion.ul
                        variants={containerVars}
                        initial='initial'
                        animate='open'
                        exit='initial'
                        className='flex w-full flex-col items-center gap-y-4'
                    >
                        {menus.map((menu, index) => (
                            <motion.li variants={mobileLinkVars} key={index}>
                                <NavLink
                                    to={menu.to}
                                    className={({ isActive }) =>
                                        cn(
                                            'text-white transition-all duration-300',
                                            isActive ? 'text-5xl font-bold text-[#d6ad60]' : 'text-3xl'
                                        )
                                    }
                                    onClick={closeMenu}
                                >
                                    {menu.name}
                                </NavLink>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
    null
}

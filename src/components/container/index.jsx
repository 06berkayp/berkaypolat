import PropTypes from 'prop-types'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Container = React.forwardRef(({ children, as, className, ...props }, ref) => {
    const openingVars = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.6,
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
        },
    }

    const Component = motion(as) ?? motion.div

    return (
        <Component
            variants={openingVars}
            initial='initial'
            animate='animate'
            exit='exit'
            ref={ref}
            className={cn(
                'mx-auto h-[calc(100dvh-80px)] w-[90%] p-4 sm:w-[75%] md:w-[65%] lg:flex lg:w-[90%] lg:flex-row-reverse lg:justify-center lg:gap-12 xl:w-[90%] xl:gap-24',
                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
})

Container.displayName = 'Container'

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    as: PropTypes.elementType,
}

export default Container

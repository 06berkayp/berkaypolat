import PropTypes from 'prop-types'
import { cn } from '@/lib/utils'

export default function Container({ children, as: Component = 'div', className, ...props }) {
    return (
        <Component
            {...props}
            className={cn(
                'mx-auto h-[calc(100dvh-80px)] w-[90%] p-4 sm:w-[75%] md:w-[65%] lg:flex lg:w-[90%] lg:flex-row-reverse lg:justify-center lg:gap-12 xl:w-[90%] xl:gap-24',
                className
            )}
        >
            {children}
        </Component>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    as: PropTypes.elementType,
}

import PropTypes from 'prop-types'
import { cn } from '@/lib/utils.js'

export default function Container({ children, as, className, ...props }) {
    const Component = as || 'div'
    return (
        <Component
            {...props}
            className={cn(
                'm-auto mb-5 mt-8 h-full w-[90%] sm:w-[75%] md:w-[65%] lg:flex lg:w-[90%] lg:flex-row-reverse lg:justify-center lg:gap-20 xl:mt-[50px]',
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

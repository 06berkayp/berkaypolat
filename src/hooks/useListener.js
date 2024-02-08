import React from 'react'

export default function useListener() {
    const width = window.innerWidth

    React.useEffect(() => {
        const handleResize = () => {
            console.log('resized to: ', window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width])

    return width
}

import React from 'react'
import Container from '@/components/container'

export default function Projects() {
    React.useEffect(() => {
        console.log('Projects page mounted')

        return () => {
            console.log('Projects page unmounted')
        }
    }, [])
    return <Container as='main'>Projects</Container>
}

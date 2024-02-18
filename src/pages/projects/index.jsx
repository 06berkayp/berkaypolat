import React from 'react'
import Container from '@/components/container'

export default function Projects() {
    React.useEffect(() => {
        console.log('Projects page mounted')

        return () => {
            console.log('Projects page unmounted')
        }
    }, [])
    return (
        <Container className='flex items-center justify-center' as='main'>
            <div className='text-4xl text-white'>BURADA HENÜZ BİR ŞEY YOK!</div>
        </Container>
    )
}

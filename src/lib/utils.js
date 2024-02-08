import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

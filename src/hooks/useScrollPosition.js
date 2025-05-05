import { useEffect, useState } from 'react';

//get current scroll position
export const useWindowScrollPositions = () => {

    const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

    useEffect(() => {
        function updatePosition() {
            setPosition({ scrollX: window.scrollX, scrollY: Math.round(window.scrollY) })
        }

        window.addEventListener('scroll', updatePosition)
        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
}

// get max scroll Y value
export const getMaxScroll = () => {

    const [maxScroll, setMaxScroll] = useState({ scrollMaxY: 0 })

    useEffect(() => {
        function updateMaxScroll() {
            setMaxScroll({ scrollMaxY: document.documentElement.scrollHeight - document.documentElement.clientHeight })
        }
        updateMaxScroll()
    })


    return maxScroll
}
import { useSelector } from 'react-redux'

export const useMenu = () => useSelector((state) => state.menu.menu)

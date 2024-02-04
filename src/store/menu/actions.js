import state from '@/store'
import { _setMenu, _toggleMenu } from '@/store/menu/index.js'

export const toggleMenu = () => state.dispatch(_toggleMenu())
export const setMenu = (payload) => state.dispatch(_setMenu(payload))

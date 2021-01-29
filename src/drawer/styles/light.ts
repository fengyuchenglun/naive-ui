import { commonLight } from '../../_styles/new-common'
import type { ThemeCommonVars } from '../../_styles/new-common'
import { scrollbarLight } from '../../scrollbar/styles'
import { createTheme } from '../../_mixins'

const self = (vars: ThemeCommonVars) => {
  const { modalColor, textColor2Overlay, boxShadow3, lineHeight } = vars
  return {
    color: modalColor,
    textColor: textColor2Overlay,
    boxShadow: boxShadow3,
    lineHeight
  }
}

export type DrawerThemeVars = ReturnType<typeof self>

const drawerLight = createTheme({
  name: 'Drawer',
  common: commonLight,
  peers: {
    Scrollbar: scrollbarLight
  },
  self
})

export default drawerLight
export type DrawerTheme = typeof drawerLight
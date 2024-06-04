import { ThemeConfig } from 'antd'
const theme: ThemeConfig = {
  token: {
    colorPrimary: 'none',
    borderRadiusLG: 3,
    colorFillSecondary: 'none',
    colorFillTertiary: 'none',
    fontFamily: 'Noto Sans',
    controlHeightLG: 52,
    colorTextPlaceholder: '#161629'
  },
  components: {
    Typography: {
      titleMarginBottom: '0px',
      titleMarginTop: '0px'
    },
    Input: {
      hoverBorderColor: 'unset'
    },
    Form: {
      itemMarginBottom: 12
    },
    Button: {
      defaultBg: '#DD5313',
      defaultHoverBg: '#DD5313',
      colorText: '#ffffff',
      defaultShadow: 'none',
      primaryShadow: 'none',
      borderColorDisabled: 'none'
    }
  }
}

export default theme

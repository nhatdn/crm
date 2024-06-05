import { ThemeConfig } from 'antd'
const theme: ThemeConfig = {
  token: {
    colorPrimary: 'none',
    borderRadiusLG: 3,
    colorFillSecondary: 'none',
    colorFillTertiary: 'none',
    fontFamily: 'Noto Sans',
    controlHeightLG: 52,
    controlHeight: 40,
    colorTextPlaceholder: '#161629',
    colorBgContainer: '#17202E'
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
    },
    Layout: {
      headerBg: '#17202E',
      headerColor: '#ffffff',
      headerHeight: 72,
      siderBg: '#17202E',
      headerPadding: '0 13px',
      colorText: '#ffffff'
    },
    Table: {
      bodySortBg: '#17202E',
      expandIconBg: '#17202E',
      rowHoverBg: '#243145',
      headerBg: '#17202E',
      headerColor: '#8B8B8B',
      borderColor: '#454D58'
    }
  }
}

export default theme

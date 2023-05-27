const backgroundDefault = '#141621';
const backgroundPaper = 'linear-gradient(99.79deg, rgba(8, 11, 30, 0.79) 8.17%, rgba(52, 20, 33, 0.9) 94.54%)';
const surfaceOne = '#141621';
const surfaceTwo = '#562a3b';
const fontOne = '#FFFFFF';
const fontTwo = '#FFFFFF99';
const fontThree = '#818181';
const icon = '#9F9F9F';
const primaryColor = '#14A693';
const primaryColorLight = '#15bfa9';
const borderDefault = '7px solid #421f32';

/** Custom theme overrides for mars mode */
export const marsThemeOverride = {
  mixins: {
    tableCell: {
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      '& .MuiTypography-root.MuiTypography-body1': {
        color: fontOne,
      },
    },
  },
  props: {
    MuiSvgIcon: {
      htmlColor: icon,
    },
  },
  palette: {
    type: 'dark',
    general: {
      icon,
    },
    primary: {
      main: primaryColor,
      light: primaryColorLight,
      contrastText: '#000000',
    },
    background: {
      image: 'url("/images/bg.svg")',
      default: backgroundDefault,
      paper: backgroundPaper,
    },
    divider: 'rgba(255, 255, 255, 0.1)',
    text: {
      primary: '#FFFFFF',
      secondary: '#AAAAAB',
    },
    custom: {
      general: {
        background: backgroundDefault,
        surfaceOne,
        surfaceTwo,
      },
      fonts: {
        fontOne,
        fontTwo,
        fontThree,
        fontFour: '#999999',
        highlight: primaryColor,
      },
      results: {
        pass: '#008169',
        fail: '#F60239',
      },
      tags: {
        zero: '#F9F9F9',
        one: '#F9F9F9',
        two: '#F9F9F9',
        three: '#F9F9F9',
        four: '#F9F9F9',
        five: '#F9F9F9',
        six: '#F9F9F9',
        seven: '#F9F9F9',
        eight: '#F9F9F9',
        nine: '#F9F9F9',
        ten: '#F9F9F9',
        eleven: '#F9F9F9',
        twelve: '#F9F9F9',
        thirteen: '#F9F9F9',
        fourteen: '#F9F9F9',
        fifteen: '#F9F9F9',
        sixteen: '#F9F9F9',
        seventeen: '#F9F9F9',
        eighteen: '#F9F9F9',
        nineteen: '#F9F9F9',
        twenty: '#F9F9F9',
      },
      condition: {
        zero: '#6D6D6C',
        one: '#FFFFFF',
        two: '#2068A6',
        three: '#eb9e49',
      },
      tokenomics: {
        one: '#14a693',
        two: '#524bb1',
        three: '#f96363',
        four: '#6D6D6C',
        five: '#6962cc',
        six: '#eb9e49',
      },
      charts: {
        zero: '#6D6D6C',
        one: '#14a693',
        two: '#f96363',
        three: '#eb9e49',
        four: '#6962cc',
        five: '#524bb1',
      },
    },
  },
  overrides: {
    MuiDrawer: {
      paperAnchorDockedLeft: {
        boxSizing: 'content-box',
        borderRight: borderDefault,
        borderBottom: borderDefault,
      },
      paper: {
        height: 'unset',
        borderRadius: '0 0 16px 0',
        overflow: 'hidden',
        background:
          'linear-gradient(99.79deg, rgba(8, 11, 30, 0.79) 8.17%, rgba(52, 20, 33, 0.9) 94.54%)',
        transition: 'all .2s cubic-bezier(0.4, 0, 1, 1) 0ms',

        '&.open': {
          background:
            'linear-gradient(132.82deg, rgba(11, 14, 32, 1) 5.03%, rgba(52, 20, 33, 1) 73.08%)',
          transition: 'all .2s cubic-bezier(0.4, 0, 1, 1) 0ms',
        },

        '& .MuiList-padding': {
          padding: 0,
        },
      },
    },
    MuiDialog: {
      paper: {
        background: backgroundPaper,
        border: borderDefault,
        borderRadius: '16px',
      },
    },
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '& .MuiTableCell-root': {
          color: fontOne,
        },
      },
    },
    MuiTableRow: {
      root: {
        '&.MuiTableRow-head': {
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiTableCell: {
      root: {
        fontSize: '13.33px',
        fontWeight: 400,

        '& .MuiTypography-root': {
          fontSize: '13.33px',
        },

        '&.MuiTableCell-head': {
          fontWeight: 700,
          lineHeight: '16px',
          height: '34px',
          fontSize: '11.85px',
          color: 'rgba(255, 255, 255, 0.4)',
        },
      },
    },
    MuiList: {
      root: {
        background: 'transparent',
      },
    },
    MuiListItem: {
      root: {
        background: 'transparent',
      },
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: fontThree,
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: fontOne,
        },
        '& .MuiTabs-indicator': {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiTypography: {
      root: {
        '&.button': {
          color: primaryColor,
        },
      },
      h1: {
        fontSize: '30.42px',
        fontWeight: 400,
        lineHeight: '40px',
        letterSpacing: 'unset',
      },
      h2: {
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '5px',
        fontSize: '21.36px',
        lineHeight: '32px',
        width: '100%',
      },
      h4: {
        fontSize: '13.33px',
        lineHeight: '20px',
        letterSpacing: 'unset',
        '&.label': {
          fontSize: '13.33px',
          lineHeight: '20px',
          fontWeight: 600,
        },
      },
      caption: {
        fontSize: '13.33px',
        fontWeight: 700,
      },
      body1: {
        fontSize: '13.33px',
        '& a': {
          color: `${primaryColor} !important`,
          '& *': {
            color: `${primaryColor} !important`,
          },
        },
      },
      body2: {
        fontSize: '15px',
        lineHeight: '20px',
        '&.label': {
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontSize: '13.33px',
          lineHeight: '20px',
          fontWeight: 600,
          opacity: '0.3',
        },
      },
    },
    MuiPopover: {
      paper: {
        padding: '8px, 16px',
        boxShadow:
          '0 3px 4px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '12px',
        background:
          'linear-gradient(77.47deg, rgba(20, 24, 57, 0.9) 11.58%, rgba(34, 16, 57, 0.9) 93.89%)',
        color: fontOne,
      },
    },
  },
};

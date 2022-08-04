const backgroundDefault = '#141621';
const surfaceOne = '#141621';
const surfaceTwo = '#562a3b';
const fontOne = '#FFFFFF';
const fontTwo = '#FFFFFF99';
const fontThree = '#818181';
const icon = '#9F9F9F';
const oddRow = '#0000001A';
const primaryColor = '#14A693';

/** Custom theme overrides for mars mode */
export const marsThemeOverride = {
  mixins: {
    tableCell: {
      background: 'transparent',
      '&.odd': {
        background: oddRow,
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
      contrastText: '#000000',
    },
    background: {
      image: 'url("/images/bg.svg")',
      default: backgroundDefault,
      paper: 'linear-gradient(132.82deg, rgba(11, 14, 32, 0.64) 5.03%, rgba(52, 20, 33, 0.9) 73.08%)',
    },
    divider: '#3D3D43',
    text: {
      primary: '#E6E6E6',
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
      primaryData: {
        one: 'linear-gradient(132.82deg, rgba(11, 14, 32, 0.64) 5.03%, rgba(52, 20, 33, 0.9) 73.08%)',
        two: 'linear-gradient(132.82deg, rgba(11, 14, 32, 0.64) 5.03%, rgba(52, 20, 33, 0.9) 73.08%)',
        three: 'linear-gradient(132.82deg, rgba(11, 14, 32, 0.64) 5.03%, rgba(52, 20, 33, 0.9) 73.08%)',
        four: 'linear-gradient(132.82deg, rgba(11, 14, 32, 0.64) 5.03%, rgba(52, 20, 33, 0.9) 73.08%)',
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
        three: '#FF6E3A',
      },
      tokenomics: {
        one: '#9BA2FF',
        two: '#DF928E',
        three: '#726DA8',
      },
      charts: {
        zero: '#6D6D6C',
        one: '#FFDF01',
        two: '#F60239',
        three: '#A40122',
        four: '#009FFA',
        five: '#FF92FD',
      },
    },
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: oddRow,
          },
        },
        '& .MuiTableCell-root': {
          color: fontTwo,
        },
      },
    },
    MuiList: {
      root: {
        background: backgroundDefault,
      },
    },
    MuiListItem: {
      root: {
        background: backgroundDefault,
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
          backgroundColor: fontOne,
        },
      },
    },
    MuiTypography: {
      root: {
        button: {
          color: primaryColor,
        },
      },
    },
  },
};

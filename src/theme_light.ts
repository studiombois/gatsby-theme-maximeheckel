const white = '#FFFFFF';
const black = '#2B2D3E';
const gray = '#F8F8F9';

const theme = {
  backgroundColor: white,
  borderColor: '#f5f5f9',
  boxShadow: '0 0px 12px -6px rgba(0, 24, 40, 0.25)',
  colors: {
    blue: '#196FD8',
    gray,
    pink: '#FED5D7',
    prism: {
      token: `#fff`,
      // tslint:disable-next-line:object-literal-sort-keys
      languageJavascript: `#e8696b`,
      javascript: `#e8696b`,
      background: `#292c34`,
      comment: `#5e6a76`,
      string: `#a8e2a8`,
      var: `#b3bac5`,
      number: `#e4854d`,
      constant: `#b3bac5`,
      plain: `#fff`,
      doctype: `#e8696b`,
      tag: `#e8696b`,
      keyword: `#d49fd4`,
      boolean: `#ff5874`,
      function: `#5F8DC3`,
      parameter: `#F9965D`,
      className: `#ffcf74`,
      attrName: `#bf87ba`,
      attrValue: `#a8e2a8`,
      interpolation: `#fff`,
      punctuation: `#5FA8AA`,
      ['maybe-class-name']: `#fff`,
      property: `#80cbc4`,
      propertyAccess: `#fff`,
      namespace: `#b2ccd6`,
      highlight: `rgba(255,255,255,0.07)`,
      highlightBorder: '#196FD8',
      dom: `#5F8DC3`,
      operator: `#5FA8AA`,
    },
    white,
  },
  fontColor: black,
  overlayBackground: 'rgba(236, 236, 236, 0.8)',
  transitionTime: 0.5,
};

export type Theme = typeof theme;
export default theme;

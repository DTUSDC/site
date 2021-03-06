module.exports = {
  siteTitle: 'DTUSDC',
  siteDescription:
    'DTUSDC is Delhi Technological University\'s Self-Driving Car Team.',
  siteKeywords:
    'DTU, DTUSDC, self-driving car, india self driving car, software engineer, artificial intelligence, javascript',
  siteUrl: 'https://dtusdc.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'DTUSDC',
  location: 'New Delhi, IN',
  email: 'contact@dtusdc.com',
  github: 'https://github.com/dtusdc',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/dtusdc',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/companies/dtusdc',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dtusdc',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Technologies',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#29aae6',
  navyColor: '#29aae6',
  darkNavyColor: '#29aae6',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

const {
  currentYear,
  formattedDeadline,
  abbreviatedFormattedDeadline,
} = require('./dates');
module.exports = {
  name: 'Caplan Foundation for Early Childhood',
  url: 'https://earlychildhoodfoundation.org',
  contact: {
    name: 'Amanda Liedtka, CPA',
    address: 'P.O. Box 746',
    city: 'Lock Haven',
    state: 'PA',
    zip: '17745',
    email: 'info@earlychildhoodfoundation.org',
    phone: '+1 570 660 7876',
  },
  tagline:
    'The Caplan Foundation for Early Childhood provides grants for innovative, creative projects and programs that will significantly enhance the development, health, safety, education or quality of life of children from infancy through seven years of age.',
  imgDir: '/assets/images/',
  currentYear,
  navigation: [
    { label: 'Program Guidelines', url: '#program-guidelines' },
    { label: 'Funding Limitations', url: '#funding-limitations' },
    { label: 'Application Process', url: '#application-process' },
    { label: 'Grant Recipients', url: '#grant-recipients' },
    { label: 'About Us', url: '#about-us' },
  ],
  footerNavigation: [{ label: '', url: '' }],
  nextDeadline: formattedDeadline,
  nextAbbreviatedDeadline: abbreviatedFormattedDeadline,
};

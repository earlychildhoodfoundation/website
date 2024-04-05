const currentYear = new Date().getFullYear();

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
    phone: '570 484 5155',
  },
  tagline:
    'The Caplan Foundation for Early Childhood provides grants for innovative, creative projects and programs that will significantly enhance the development, health, safety, education or quality of life of children from infancy through seven years of age.',
  imgDir: '/assets/images/',
  currentYear,
  navigation: [{ label: '', url: '' }],
  footerNavigation: [{ label: '', url: '' }],
};

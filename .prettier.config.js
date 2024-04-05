module.exports = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-jinja-template'],
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  arrowParens: 'always',
  printWidth: 80,
  bracketSpacing: true,
  overrides: [
    {
      files: ['*.njk'],
      options: {
        parser: 'jinja-template',
      },
    },
  ],
};

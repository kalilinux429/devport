module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  
    
    'react/jsx-indent': 'off', // Disable indentation warnings for JSX
    'key-spacing': 'off', // Disable key-spacing warning
    'comma-spacing': 'off', // Disable comma-spacing warning
    'jsx-quotes': 'off', // Disable jsx-quotes warning
    'react/jsx-tag-spacing': 'off', // Disable JSX tag spacing warning
    'no-trailing-spaces': 'off',
  },
};

module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y'],
    rules: {
      'no-console': 'off', // Разрешить использование console.log
      'no-unused-vars': 'off', // Разрешить неиспользуемые переменные
      'react/prop-types': 'off', // Отключить проверку propTypes в React
      'react/react-in-jsx-scope': 'off', // Отключить требование импорта React при использовании JSX
      'jsx-a11y/anchor-is-valid': 'off', // Разрешить использование несоответствующих href в якорных ссылках
    },
  };
  
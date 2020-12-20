module.exports = {
  extends: [
    "./index",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier/react",
  ],

  plugins: ["react", "react-hooks", "jsx-a11y"],

  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": 0,
        "no-unused-vars": "off",
        "quotes": [2, "double", { "avoidEscape": true }],
        "semi": ["error", "never"],
    },
}
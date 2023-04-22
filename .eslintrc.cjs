module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "react-app",
    "airbnb",
    "prettier", //여기서도 꼭 마지막에 추가
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};

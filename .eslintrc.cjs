module.export = {
  // ESLint 규칙 확장 설정 (기본 규칙, 리액트 및 타입스크립트 규칙 확장)
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier" // Prettier 규칙 적용 (충돌시 Prettier 우선)
  ],
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }], // 들여쓰기 2칸만 허용
    "no-var": "error", // var 키워드 사용 금지
    "require-await": "error", // async 함수 내부에 await 키워드가 없으면 오류 발생
    "eqeqeq": "warn" // ==, != 대신에 ===, !== 사용
  },
  "parser": "@typescript-eslint/parser",

  // node 추가 (tailwind)
  "env": {
    "node": true
  },

  // 파서 옵션 설정
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true // JSX 문법 파싱 가능 여부
    },
    "ecmaVersion": "latest", // 사용할 ECMAScript 버전
    "sourceType": "module" // 모듈 형식 사용
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"]
}

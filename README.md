# 원티드 프리온보딩 12th 4주차 개인 과제

원티드 프리온보딩 12th 4주차에 진행된 개인 과제입니다.

본 과제는 mock data를 이용해 시계열 차트를 구현하는 것이 목표입니다.

## 🧑🏻‍💻 프로젝트 정보

### 실행 방법

- 배포 링크: [Time Series Chart (https://devseop-timeseries-chart.netlify.app/)](https://devseop-timeseries-chart.netlify.app/)
- 링크가 실행되지 않는 경우 아래 명령어를 차례대로 입력하여 실행해주세요.

```
git clone https://github.com/devseop/po-fe-12th-w4
npm install && npm start
```

### 프로젝트 구조

```markdown
📦 src
┣ 📂 api
┃ ┗ api.ts
┣ 📂 components
┃ ┣ ChartHeader.tsx
┃ ┣ FilterButtons.tsx
┃ ┗ TimeSeriesChart.tsx
┣ 📂 constants
┃ ┗ constants.ts
┣ 📂 hooks
┃ ┣ useData.tsx
┃ ┗ useFilter.tsx
┣ 📂 styles
┃ ┗ globalStyles.ts
┣ 📂 types
┃ ┗ types.ts
┣ 📂 utils
┃ ┣ convertChartData.ts
┃ ┣ customedChartOption.ts
┃ ┣ filteredChartStyle.ts
┃ ┣ getUniqueIds.ts
┃ ┗ registerChartJS.ts
┣ App.tsx
┣ main.tsx
┗ vite-env.d.ts
```

### 사용 라이브러리

```javascript
"dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "chart.js": "^4.4.0",
    "react": "^18.2.0",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0"
  },

"devDependencies": {
    "babel-eslint": "^10.1.0",
    "eslint": "^8.45.0",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "prettier": "^3.0.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  },

```

## 📝 구현 내용

### ✅ Assignment 1

시계열 차트 만들기

- 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
- 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
- Area 그래프의 기준값은 `value_area` 값을 이용해주세요
- Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
- 차트의 Y축에 대략적인 수치를 표현해주세요

### ✅ Assignment 2

호버 기능 구현

- 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요

### ✅ Assignment 3

필터링 기능 구현

- 필터링 기능을 구현해주세요, 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현해주세요
- 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
- 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
- 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요

## 🫱🏻‍🫲🏿 Commit Convention

커밋 컨벤션과 브랜치 전략은 1주차 팀 과제 진행시 결정된 팀 컨벤션을 따랐습니다.

e.g. FEAT: 로그인 유효성 검증 기능 구현

| 태그      | 설명 (한국어로만 작성하기)                                     |
| --------- | -------------------------------------------------------------- |
| FEAT:     | 새로운 기능 추가 (변수명 변경 포함)                            |
| FIX:      | 버그 해결                                                      |
| DESIGN:   | CSS 등 사용자 UI 디자인 변경                                   |
| STYLE:    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우          |
| REFACTOR: | 프로덕션 코드 리팩토링                                         |
| COMMENT:  | 필요한 주석 추가 및 변경                                       |
| DOCS:     | 문서를 수정한 경우                                             |
| CHORE:    | 빌드 테스크 업데이트, 패키지 매니저 설정(프로덕션 코드 변경 X) |
| RENAME:   | 파일 혹은 폴더명을 수정하거나 옮기는 작업                      |
| REMOVE:   | 파일을 삭제하는 작업만 수행한 경우                             |
| INIT:     | 초기 커밋을 진행한 경우                                        |

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

![chart_1](https://github.com/devseop/po-fe-12th-w4/assets/102455161/89e0e4da-ea44-44d8-ac29-26f7873548a3)
![chart_2](https://github.com/devseop/po-fe-12th-w4/assets/102455161/f5c59927-5fc7-4f05-a493-65a69913f56b)

### ✅ Assignment 1

시계열 차트 만들기
```markdown
- 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
- 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
- Area 그래프의 기준값은 `value_area` 값을 이용해주세요
- Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
- 차트의 Y축에 대략적인 수치를 표현해주세요
```

<details>
  <summary>코드 보기</summary>
    - 데이터 호출
    https://github.com/devseop/po-fe-12th-w4/blob/165c9b04636e3d5f06786ffd90e40a355d1765e4/src/hooks/useData.tsx#L86-L101
    - 데이터를 {x(시간), y(값)}의 형태로 재분류
    https://github.com/devseop/po-fe-12th-w4/blob/165c9b04636e3d5f06786ffd90e40a355d1765e4/src/utils/convertChartData.ts#L51-L62
</details>

### ✅ Assignment 2

호버 기능 구현
```markdown
- 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요
```

> `Chart.js`에서는 기본적으로 마우스 호버시 타이틀(시간), 값(value)을 볼 수 있습니다.  <br /> 세부옵션인 `tooltip`의 `afterTitle` 옵션을 이용하여 타이틀 바로 다음에 `id`가 제공되도록 했고,  <br /> 인자로 전달 받은 tooltipItems를 구조분해하여 원하는 값인 `id`를 반환하도록 했습니다. <br /> 타입은 `Chart.js`의 `TooltipItem` 타입을 확장하여 사용했습니다.

<details>
  <summary>코드 보기</summary>
    - 타입 선언
    https://github.com/devseop/po-fe-12th-w4/blob/165c9b04636e3d5f06786ffd90e40a355d1765e4/src/utils/customedChartOption.ts#L5-L7
    - id 반환
    https://github.com/devseop/po-fe-12th-w4/blob/165c9b04636e3d5f06786ffd90e40a355d1765e4/src/utils/customedChartOption.ts#L36-L43
</details>

### ✅ Assignment 3

필터링 기능 구현
```markdown
- 필터링 기능을 구현해주세요, 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현해주세요
- 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
- 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
- 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요
```

> - `useFilter.ts`는 URL 쿼리 매개변수를 사용하여 데이터를 필터링하고 URL을 업데이트합니다.  
> - `filteredChartStyle.ts`는 데이터와 필터링된 ID를 사용하여 차트 스타일을 계산하고 반환합니다.
> - `useData.ts`에서는 데이더와 필터링 기능을 위한 다양한 상태를 관리하고 이를 이용한 이벤트 처리 및 데이터 호출을 담당합니다.
>     - `highlightedById`함수는 필터링된 ID에 따라 차트 스타일을 변경합니다. 현재 차트 데이터와 참조된 차트 인스턴스를 기반으로 스타일을 업데이트합니다.
>     - `getIdFromChartElement`함수는 차트에서 클릭된 요소로부터 해당 ID를 추출합니다.
>     - `clickBlankCanvasHandler`는 빈 캔버스 영역을 클릭할 때 실행되는 이벤트 핸들러입니다. 빈 캔버스 영역을 클릭시 선택된 값에 대한 스타일이 초기화됩니다.

<details>
  <summary>코드 보기</summary>
    - useFilter.ts
    https://github.com/devseop/po-fe-12th-w4/blob/165c9b04636e3d5f06786ffd90e40a355d1765e4/src/hooks/useFilter.tsx#L3-L19
    - filteredChartStyle.ts
    https://github.com/devseop/po-fe-12th-w4/blob/165c9b04636e3d5f06786ffd90e40a355d1765e4/src/utils/filteredChartStyle.ts#L4-L28
    - highlightedById
    https://github.com/devseop/po-fe-12th-w4/blob/165c9b04636e3d5f06786ffd90e40a355d1765e4/src/hooks/useData.tsx#L24-L52
    - getIdFromChartElement
    https://github.com/devseop/po-fe-12th-w4/blob/165c9b04636e3d5f06786ffd90e40a355d1765e4/src/hooks/useData.tsx#L55-L61
    - clickBlankCanvasHandler
    https://github.com/devseop/po-fe-12th-w4/blob/165c9b04636e3d5f06786ffd90e40a355d1765e4/src/hooks/useData.tsx#L63-L73
</details>

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

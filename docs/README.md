## 기능 그룹 (MVC)

- Domains: Models & Controllers
  - [x] 이벤트 혜택 정보 `class`
    - [x] 예상 방문 날짜 `필드`
    - [x] 주문 목록 `필드`
    - [x] 예상 방문 날짜 `예외처리 메소드`
      - [x] 1이상 31이하 숫자가 아닌 경우
    - [x] 주문 목록`예외처리 메소드`
      - [x] 메뉴 형식이 올바르지 않은 경우
      - [x] 메뉴판에 없는 메뉴 이름을 입력하는 경우
      - [x] 메뉴 개수가 1이상의 자연수가 아닌 경우
      - [x] 중복 메뉴를 입력한 경우
      - [x] 메뉴에 음료 주문만 있을 경우
      - [x] 총 메뉴 개수가 20개를 초과하는 경우
    - [x] 이벤트 적용 `예외처리 메소드`
      - [x] 총 주문 금액이 10000원 미만인 경우
    - [x] 총 주문 금액 연산 `메소드`
    - [x] 샴페인 증정 여부 연산 `메소드`
    - [x] 디데이 할인 혜택 금액 연산 `메소드`
    - [x] 평일/주말 할인 혜택 금액 연산 `메소드`
    - [x] 특별 할인 혜택 금액 연산 `메소드`
    - [x] 증정 이벤트 혜택 금액 연산 `메소드`
    - [x] 총 할인 혜택 금액 연산 `메소드`
    - [x] 할인 후 예상 결제 금액 연산 `메소드`
    - [x] 12월 이벤트 배지 연산 `메소드`


- Views
  - [x] 입력창 및 메세지 출력 `class`
    - [x] 예상 방문 날짜 입력
    - [x] 주문 메뉴 및 개수 입력
  - [x] 출력창 및 메세지 출력 `class`
    - [x] 이벤트 플래너 인사 문구 출력
    - [x] 혜택 미리보기 문구 출력
    - [x] 내역 출력: 주문 메뉴
    - [x] 내역 출력: 할인 전 총주문 금액
    - [x] 내역 출력: 증정 메뉴
    - [x] 내역 출력: 혜택 내역
    - [x] 내역 출력: 총혜택 금액
    - [x] 내역 출력: 할인 후 예상 결제 금액
    - [x] 내역 출력: 12월 이벤트 배지

<br/>

## 테스트 목록
- 예상 방문 날짜
  - [x] 1이상 31이하 숫자가 아닌 경우


- 주문 메뉴 및 개수
  - [x] 메뉴 형식이 올바르지 않은 경우
  - [x] 메뉴판에 없는 메뉴 이름을 입력하는 경우
  - [x] 메뉴 개수가 1이상의 자연수가 아닌 경우
  - [x] 중복 메뉴를 입력한 경우
  - [x] 메뉴에 음료 주문만 있을 경우
  - [x] 총 메뉴 개수가 20개를 초과하는 경우


- 이벤트 적용 및 혜택
  - [x] 총 주문 금액 연산 결과 비교
  - [x] 이벤트 적용 여부 연산 결과 비교
  - [x] 샴페인 증정 여부 연산 결과 비교
  - [x] 디데이 할인 혜택 금액 연산 결과 비교
  - [x] 평일/주말 할인 혜택 금액 연산 결과 비교
  - [x] 특별 할인 혜택 금액 연산 결과 비교
  - [x] 증정 이벤트 혜택 금액 연산 결과 비교
  - [x] 총 할인 혜택 금액 연산 결과 비교
  - [x] 할인 후 예상 결제 금액 연산 결과 비교
  - [x] 12월 이벤트 배지 연산 결과 비교

<br/>

## 코드 스타일 및 브랜치 전략

- 코드 스타일

  - <details>
        <summary>eslint(airbnb style) 사용</summary>

        `npm init @eslint/config` 로 eslint를 설치한다.

        `npx install-peerdeps --dev eslint-config-airbnb` 로 airbnb eslint 설정 패키지를 설치한다.

        .eslintrc.cjs 파일을 생성하여 코드 스타일을 정의한다.

        test 코드를 위해 `jest : true` 를 기입한다.

    </details>

  - <details>
        <summary>prettier 사용</summary>

        `npm i -D prettier eslint-config-prettier` 로 prettier와 eslint-config-prettier를 설치한다.

        > `eslint-config-prettier`: prettier와 겹치는 eslint 룰을 비활성화한다.

        .eslintrc.cjs의 `extends : [...]` 에 `prettier` 를 추가한다.

        .prettierrc.cjs 파일을 생성한 후 prettier 규칙을 추가한다.

    </details>

  - <details>
        <summary>JSDoc 작성</summary>

        클래스, 함수, 변수의 문서화 및 타입을 명확히 하기 위해 JSDoc을 작성한다.

        ```js
        /**
         * 두 숫자의 합을 연산하는 함수
         * @param {number} a
         * @param {number} b
         * @returns {number}
         */
        function sum(a, b) {
          return a + b;
        }
        ```

    </details>

  
- 브랜치 전략
  - Git Flow 전략을 기본으로 사용하되 아래의 사항을 지킨다.
  - 최종 브랜치는 'main' 이다.
  - 주 작업 브랜치는 'develop'이다.
  - 필요시 MVC를 기준으로, 기능 그룹 'feature/{feature}' 브랜치를 생성하여 작업한다.
  - 특정 기능 그룹이 완성되면 'develop' 브랜치에 병합한다.
  - 애플리케이션이 완성되면 'develop' 브랜치를 최종 브랜치에 병합한다.
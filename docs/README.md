## 기능 그룹 (MVC)

* Models
    - [ ] 사용자 정보 `class`
        - [ ] 구입 금액 (필드)
        - [ ] 로또 개수 (필드)
        - [ ] 소유한 로또 번호 목록 (필드)
        - [ ] 로또 구입금액 `예외처리`
    - [ ] 로또 정보 (보너스 번호 포함) `class`
        - [ ] 로또 객체: Lotto 클래스 (필드)
          - [ ] 당첨 번호 목록 (필드)
          - [ ] 로또 당첨 번호 `예외처리`
        - [ ] 보너스 번호 (필드)
        - [ ] 보너스 번호 `예외처리`


* Views
    - [ ] 입력창 및 메세지 출력 `class`
        - [ ] 구입금액 입력
        - [ ] 당첨번호 입력
        - [ ] 보너스번호 입력
    - [ ] 출력창 및 메세지 출력 `class`
        - [ ] 로또 개수 & 번호 목록 출력
        - [ ] 당첨 통계 출력: 제목, 내역, 결과(수익률)


* Controllers
    - [ ] 로또 게임 처리/연산 `class`
        - [ ] 사용자가 소유할 로또 번호 목록 생성
        - [ ] 당첨 내역 연산
        - [ ] 당첨 결과(수익률) 연산

<br/>

## 예외 처리
* 로또 구입 금액
  - [ ] 숫자가 아닐 경우
  - [ ] 0원 이하일 경우
  - [ ] 1000원 단위가 아닐 경우


* 로또 당첨 번호
  - [ ] 숫자가 아닐 경우
  - [ ] 1~45 사이의 숫자가 아닐 경우
  - [ ] 소수점이 있을 경우
  - [ ] 중복된 숫자가 있을 경우
  - [ ] 6개가 아닐 경우


* 보너스 번호
  - [ ] 숫자가 아닐 경우
  - [ ] 1~45 사이의 숫자가 아닐 경우
  - [ ] 소수점이 있을 경우
  - [ ] 당첨 번호와 중복될 경우

<br/>

## 테스트 목록
<div style="font-style: Italic; color: grey;">구현하면서 추가 예정</div>

<br/>

## 코드 스타일 및 브랜치 전략
* 코드 스타일
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


* 브랜치 전략
    - Git Flow 전략을 기본으로 사용하되 아래의 사항을 지킨다.
    - 최종 브랜치는 'jinmidnight01' 이다.
    - 주 작업 브랜치는 'develop'이다.
    - 필요시 기능 그룹 'feature/{feature}' 브랜치를 생성하여 작업한다. 
    - 특정 기능 그룹이 완성되면 'develop' 브랜치에 병합한다.
    - 애플리케이션이 완성되면 'develop' 브랜치를 최종 브랜치에 병합한다.
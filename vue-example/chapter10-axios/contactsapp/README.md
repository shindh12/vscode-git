# Vue.js 를 이용한 연락처 애플리케이션

axios + dynamic component + event bus

구성
 - App.vue 
   . ContactList.vue
   . UpdateContact.vue
     - ContactForm.vue
   . AddContact.vue
     - ContactForm.vue
   . UpdatePhoto.vue
 - EventBus.js

특징
 - 싱글 파일 컴포넌트 : 동적 컴포넌트 적용
 - 최상위 부모인 App.vue 에서 모든 데이터 관리
 - props 를 통한 하위 컴포넌트에 데이터 전달
 - eventbus를 이용한 상위 컴포넌트로 이벤트 emit 및 수신을 위한 on
 - 데이터 비동기 처리 (axios) 
 - Cross Origin 문제 해결을 위한 라우팅 처리 => /api 


환경설정
 - yarn add -D babel-cli@6.2.4 
 - yarn add babel-preset-env 
 - yarn add babel-preset-stage-2
 - yarn add axios
 - yarn add vuejs-paginate bootstrap@3.3.x
 - yarn add es6-promise
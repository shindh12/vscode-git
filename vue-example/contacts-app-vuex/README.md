# Vue.js 를 이용한 연락처 애플리케이션

axios + dynamic component + vuex

구성
 - App.vue 
   - ContactList.vue
   - ContactForm.vue
   - UpdatePhoto.vue

특징
 - 싱글 파일 컴포넌트 : 동적 컴포넌트 적용
 - eventbus 방식에서 vuex로 상태관리 변경 
 - 데이터 비동기 처리 (axios) 
 - Cross Origin 문제 해결을 위한 라우팅 처리 => /api 


환경설정
 - yarn add -D babel-cli@6.2.4 
 - yarn add babel-preset-env 
 - yarn add babel-preset-stage-2
 - yarn add axios
 - yarn add vuejs-paginate bootstrap@3.3.x
 - yarn add es6-promise
 - yarn add vuex
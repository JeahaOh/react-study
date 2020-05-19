# react-study

React Studies

## todolist

React로 간단한 todo list를 만들어 보자.

## board

React, Express, MongoDB를 이용해서 간단한 게시판을 만들어 보자.

### STACK

#### Client

React, react-bootstrap, react-routor-dom, axios, jQuery, jQuery.cookie, CKEditor4-react

#### Server

Node.js, express, express-session, cors, mongoose

#### DB

mongoose

### 기능

회원 가입, 로그인 로그아웃, 게시글 쓰기 수정 삭제

### Table (Collection)

- Users
  - userNo (PK)
  - email
  - name
  - password
  - createdAt
- Post
  - postNo (PK)
  - writer (FK)
  - title
  - content
  - createAt

## Git Clone Comment

3개월 전 업로드 된 졸라 좋은 예제 BUT, 너무 어렵다.  
babel과 webpack을 썼다.  
redux-logger가 action과 state 로그를 찍어준다..

## Integration

```
npm install
npm ci
npm start
```

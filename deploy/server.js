const express = require('express');
const path = require('path');
const app = express();

//  static file
app.use(express.static(path.join(__dirname, 'build')));

/**
 * API 서버를 작성하고 싶을 경우 이곳에 작성.
 */

/** 
 * url 처리
 * '/'는 루트지만
 * '*'은 모든 경로에 대해서.
*/
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(9000);

import express from 'express';
const app = express();

app.get('/sky/:id', (req, res, next) => { // 만약 경로를 저렇게 작성하면
  console.log(req.params); // /sky/jh 로 접속한다면 { id: 'jh'} 출력
  console.log(req.query); // /sky/jh/?keywords=abc 로 접속한다면 { query: 'abc'} 쿼리에 대한 정보 출력

  res.send(); // respond 를 이용해 데이터 전달
  res.setHeader('key', 'value'); // 헤더 전달
  res.status(201).send('created');

  
});

app.listen(8080);


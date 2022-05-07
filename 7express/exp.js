import express from 'express';
const app = express();

app.get('/sky/:id', (req, res, next) => { // 만약 경로를 저렇게 작성하면
  console.log(req.params); // /sky/jh 로 접속한다면 { id: 'jh'} 출력
  console.log(req.query); // /sky/jh/?keywords=abc 로 접속한다면 { query: 'abc'} 쿼리에 대한 정보 출력

  res.send(); // respond 를 이용해 데이터 전달
  res.setHeader('key', 'value'); // 헤더 전달
  res.status(201).send('created');

  
});

app.post('/', (req, res, next) => { // 1 post 는 사용자가 무언가를 만들기 원하기 때문에 
  app.use(express.json()); // 3 use 메소드를 사용해 json으로 바꿔야한다.
  console.log(req.body); // 2 req 에서 body를 읽어와야 한다. 그런데 undefined로 표시되므로
  
})

app.listen(8080);


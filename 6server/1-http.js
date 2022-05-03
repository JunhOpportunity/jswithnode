const http = require('http');
 
const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
 
  const url = req.url;
  res.setHeader('Content-Type', 'text/html'); //??
  if (url === '/') {
    // res.write('welcome!'); // 서버에서 반응
    fs.createReadStream('./html/index.html').pipe(res); // html 폴더에 있는 index.html 파일을 스트림 해줌.
  } else if (url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res); // html 폴더에 있는 course.html 파일을 스트림 해줌.
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res); // html 폴더에 있는 not-found.html 파일을 스트림 해줌.
  }
});
 
server.listen(8080);

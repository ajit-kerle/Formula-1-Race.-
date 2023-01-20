const http=require('http')

const fs=require('fs')


http.createServer(function(request,respoonse){
    fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    })
}).listen(8000)





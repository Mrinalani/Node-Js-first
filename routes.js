const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
  
    if (url === '/') {
        fs.readFile('message.txt', { encoding: 'utf-8' }, (err, data) => {
          if (err) {
            console.log(err);
          }
    
          res.write('<html>');
          res.write('<head><title>Enter Message</title></head>');
          res.write('<body>');
          res.write('<h2>Message:</h2>');
          res.write(`<p>${data}</p>`);
          res.write('<form action="/message" method="POST">');
          res.write('<input type="text" name="message">');
          res.write('<button type="submit">Send</button>');
          res.write('</form>');
          res.write('</body>');
          res.write('</html>');
          return res.end();
        });
      } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        });
        req.on('end', () => {
          const parsebody = Buffer.concat(body).toString();
          const message = parsebody.split('=')[1];
          fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      } else {
        fs.readFile('message.txt', { encoding: 'utf-8' }, (err, data) => {
          if (err) {
            console.log(err);
          }
    
          res.setHeader('Content-Type', 'text/html');
          res.write('<html>');
          res.write('<head><title>My First Page</title></head>');
          res.write('<body><h1>' + data + '</h1></body>');
          res.write('</html>');
          return res.end();
        });
      }
}

module.exports = requestHandler

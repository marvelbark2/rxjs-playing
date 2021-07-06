var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',            // required, the root of the server file tree
  port: 1337,               // required, the port to listen
  name: 'rxjs server',   // optional, will set "X-Powered-by" HTTP header
  host: 'localhost',       // optional, defaults to any interface
  cors: '*',                // optional, defaults to undefined
  templates: {
    index: 'index.html',      // optional, defaults to 'index.html'
  }
});

server.start(function () {
  console.log(`Server listening at http://${server.host}:${server.port}`);
});
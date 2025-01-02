const fs = require("fs")
const http = require('http');
const port = 3000;

const server = http.createServer();
server.on("request",request_handler);
function request_handler(req, res) {
  console.log(`New request from ${req.socket.remoteAddress} for ${req.url}`);
  let type = getType(req.url);
  // This array doesn't include all of the pictures.
  let urlArray = ["/group.jpg","/greatbeis.jpg","/beispic.jpeg","/class.jpg","/masmidim.jpg","/dish.jpg","/october7pic.JPG","/microscope.jpg","/mishmar.jpg","/ravasher.jpg","/masmidim.jpg","/job.png","/free-opened-book-icon-3163-thumb.png","/teacher-kids.png","/academics.html","/ravsoloveichik.jpeg","/ravbamberger.jpeg","/ravsun.jpeg","/ravsacks.jpeg","/beis.js","/goodpic.jpg","/academicstyle.css","/meirfried.png","/lcm-logo.png","/code.jpg","/ripple.js","/testimonials.js","/shtickle.js","/beis.html","/beisstyle.css","/websitestyle.css","/website.js","/website.html"];
  if(req.url === "/"){
    res.writeHead(200,"OK",{'Content-Type':'text/html'});
    const html_stream = fs.createReadStream("website.html");
    html_stream.pipe(res);
  } else if (urlArray.includes(req.url)) {
    res.writeHead(200,{'Content-Type':`${type}`});
    let u = req.url.slice(1);
    const stream = fs.createReadStream(u);
    stream.pipe(res);
  } else {
    res.writeHead(404,{'Content-Type':'text/html'});
    res.write("<h1>Couldn't find " + req.url + "</h1>");
    res.end();
  }
}
function getType(theUrl) {
  let dot = theUrl.indexOf(".");
  let type = theUrl.slice(dot + 1);
  let betterType = 'text/' + type;
  if (type === "jpg" || type === "png" || type == "jpeg" || type === "JPG") {
    betterType = 'image/' + type;
  }
  return betterType;
}
server.on("listening",listen_handler)
function listen_handler() {
  console.log(`Now listening on Port ${port}`);
}
server.listen(port);
process.on('SIGINT', () => { console.log('Received SIGINT. Shutting down...'); server.close(); })

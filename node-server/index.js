const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  //  ***** plain/formatted message *****
  //   response.end("<h1>Hello from node server</h1>");

  // ***** json response *****
  //   const responseData = { message: "helo json, sent via node" };
  //   response.writeHead(200, { "Content-Type": "application/json" });
  //   response.end(JSON.stringify(responseData));


  // ***** serving static html files *****
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.readFileSync("./index.html", (err, data) => {
    if (err) {
      response.writeHead(500);
      response.end("Error serving html file");
    } else {
      response.end(data);
    }
  });
  
});

server.listen(5000, () => {
  console.log("Server started on localhost:5000!");
});

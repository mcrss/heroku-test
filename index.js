const express = require("express");

const server = express();

server.get("/*", (request, response) => {
	response.send("Hello!");
});

server.listen(process.env.PORT || 3000);

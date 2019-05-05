const routesHandling = (req, res) => {
    const url = req.url;
    const method = req.method;
    const users = [];
    if (url === '/') {
        if (method === "GET") {
            res.write("<html>");
            res.write("<head><title>My solution</title> </head>");
            res.write(
                "<body> <h1>Hello word from Node server</h1> <br/> <form action='/' method='POST'><input type='text' name='user' placeholder='Type user name'> <button type='submit'>Submit</button></form> </body>"
            );
            res.write("</html>");
            return res.end();
        } else {
            const body = [];
            req.on("data", (data) => {
                body.push(data);
            });
            req.on("end", () => {
                const pb = Buffer.concat(body).toString();
                console.log(pb.split('=')[1]);
                res.writeHead(302,  {Location: "/users"});
                return res.end();
            })
        }

    }
    if (url === "/users") {
        res.write("<html>");
        res.write("<head><title>My solution</title> </head>");
        res.write(
            "<body> <h1>Users</h1> </br> <ul>"
        );
        for (let i = 0; i < 3; i++ ) {
            res.write(`<li>User${i}</li>`);
        }
        for (let user in users) {
            res.write(`<li>${user}</li>`);
        }
        res.write("</ul> </body>");
        res.write("</html>");
        return res.end();
    }
};

module.exports = routesHandling;
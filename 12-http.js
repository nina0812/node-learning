const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("Welcome to our Home page");
    }
    if(req.url==='/about')
    {
        res.end("Welcome to our About page");
    }
    res.end(`<h1>The page that you want doesn't exist.</h1>
    <a href="/">Home page</a>`)
})
server.listen(5000);
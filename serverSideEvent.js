import http from 'http';
import {handleFiles} from './handleFiles.js';
import {getTemp} from './getTemp.js';

/*const __dirname = import.meta.dirname;

const PORT = 9000;

const server = http.createServer( async (req,res) =>{
    if(!req.url.startsWith('/temp/live'))
    {
        return await handleFiles(req,res, __dirname);
        console.log(req.url);
    }else if('/temp/live' === req.url){

        res.statusCode = '200'
        res.setHeader('content-Type', 'text/event-stream')
        res.setHeader('cache-Control', 'no-cache')
        res.setHeader('Connection', 'keep-alive')

        setInterval(()=>{
            const temperature   = getTemp()
            res.write(
                `data: ${JSON.stringify({event: 'temp-updated', temp: temperature})}\n\n`
            )

        },2000)
       

    console.log(req.url);
    }
    
})
server.listen(PORT, ()=>{
     console.log(`Server is running on http://localhost:${PORT}`);
}   );*/
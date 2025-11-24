import http, { get } from 'node:http';
//import { fileURLToPath } from 'node:url';
import path from 'node:path';
import {serveStatic} from './utils/serveStatic.js';
import  fs from 'node:fs/promises'
import { getContentType } from './utils/getContentType.js';
import { send } from 'node:process';
import {sendResponse} from './utils/sendResponse.js';
import  {getData} from './utils/getData.js';
import { handleGet } from './handlers/routeHandlers.js';
import { handlePost } from './handlers/routeHandlers.js';


const PORT = 8000;

const __dirname =  import.meta.dirname;

const server = http.createServer( async (req, res) => {
 
  if(req.url === '/api') {
    if(req.method === 'GET'){ 
        const data = await handleGet(res);
    }
    else if (req.method === 'POST'){
      handlePost (req, res);  
    
    }  

  
  }
 
  else if(!req.url.startsWith('/api')){
  return await serveStatic(req, res, __dirname);
 }  

});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// const publicDir = path.join(__dirname, 'public');
// const filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);



// const ext = path.extname(filePath);
// const contentType= getContentType(ext);
    
// // try{
// //       const content = await fs.readFile(filePath )

// //       const ext = path.extname(filePath)
// //       sendResponse(res, 200, contentType, content);
// //       //await serveStatic(__dirname, req, res, content);
// //       console.log('ext: ', ext);
// //   } catch(err){

// //     if(err.code === 'ENOENT'){
// //        const content = await fs.readFile(path.join(publicDir, '404.html'));
// //        sendResponse(res, 404, 'text/html', content);
// //     } else {
// //        sendResponse (res, 500, 'text/html', `<html><h1>Server Error: ${err.code}</h1></html>`);
// //     }
// //       console.log('Error reading file: ', err);
// //  }

      
import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONbody } from "../utils/parseJSONbody.js";
import {addNewSighting} from "../utils/addNewSighting.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sightingEvents } from "../utils/sightingEvent.js";   
import { stories } from "../data/stories.js";


//HandleGet
export async function handleGet(res) {
    const data = await getData();
    const content = JSON.stringify(data);
    sendResponse(res, 200, 'application/json', content);
   
}

//HandlePost/

export async function handlePost(req, res) {
    try {
        const parsedBody = await parseJSONbody(req);
        const sanitizebody = sanitizeInput(parsedBody);
        await addNewSighting(sanitizebody);
        sendResponse(res, 201, 'application/json', JSON.stringify({ message: 'Sighting added successfully' }));
        sightingEvents.emit('SigthingAdded', sanitizebody);

    } catch (err) {
        console.error('Error handling POST request:', err);
        sendResponse(res, 500, 'application/json', JSON.stringify(sanitizebody));   
    }
}

export async function loginUser(req, res) {
    try {
        const parsedBody = await parseJSONbody(req);
        
        
        // Here you would normally validate the user credentials
        sendResponse(res, 200, 'application/json', JSON.stringify({ message: 'Login successful' }));
    } catch (err) {
        console.error('Error handling login request:', err);
        sendResponse(res, 500, 'application/json', JSON.stringify({ message: 'Login failed' }));   
    }
}

export async function handleNews(req,res){
     res.statusCode = 200
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Cache-Control', 'no-cache')
        res.setHeader('Connection', 'keep-alive')


    setInterval(() => {
        let randomIndex = Math.floor(Math.random()*stories.length)

          res.write(`data: ${JSON.stringify( {event: 'news-update',story: stories[randomIndex]}

     )}\n\n`) 
    },3000)

   

}

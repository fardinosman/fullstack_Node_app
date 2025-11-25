import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONbody } from "../utils/parseJSONbody.js";
import {addNewSighting} from "../utils/addNewSighting.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sightingEvents } from "../utils/sightingEvent.js";   


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

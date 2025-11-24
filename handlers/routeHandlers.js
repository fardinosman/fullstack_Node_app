import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONbody } from "../utils/parseJSONbody.js";
import {addNewSighting} from "../utils/addNewSighting.js";


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
        await addNewSighting(parsedBody);
        sendResponse(res, 201, 'application/json', JSON.stringify({ message: 'Sighting added successfully' }));
    } catch (err) {
        console.error('Error handling POST request:', err);
        sendResponse(res, 500, 'application/json', JSON.stringify(parsedBody));   
    }
}

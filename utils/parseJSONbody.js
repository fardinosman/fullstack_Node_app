
 
 export async function parseJSONbody(req) {
        let body = '';
        for await (const chunk of req) {
            body += chunk;
        }   
        try {
            const parsedBody = JSON.parse(body);
            return parsedBody;
        } catch (err) {
            console.error('Error parsing JSON body:',  err);
            return null;
        } 
    
}
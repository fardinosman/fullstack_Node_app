export function getContentType(ext) {
    const types = {
        '.json': 'application/json', 
        '.css': 'text/css', 
        '.js': 'text/javascript', 
        '.png': 'image/png', 
        '.jpg': 'image/jpeg', 
        '.jpeg': 'image/jpeg', 
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',  
    }

    return types[ext.toLowerCase()] || 'text/html';

}
import path from 'node:path';
import fs from 'node:fs/promises'
import { getData } from './getData.js';

export async function addNewSighting(sighting) {
    try {
        const sightings = await getData();
        sightings.push(sighting);

        const dataPath = path.join('data', 'data.json');

        await fs.writeFile(dataPath, JSON.stringify(sightings, null, 2), 'utf-8');

    } catch (err) {
        console.error('Error adding new sighting:', err);
        throw err;
    } 
}
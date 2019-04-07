import * as faceapi from 'face-api.js';

export const personTalking = (lipsArray) => {
    let x = 0;
    let y = 0;
    for (const lip of lipsArray){
        x += lip._x;
        y += lip._y;
    }
    let averageX = x/(lipsArray.length);
    let averageY = y/(lipsArray.length);

    let dist = 0;
    for (const lip of lipsArray){
        dist += faceapi.euclideanDistance([averageX, averageY], [lip._x, lip._y]);
    }

    return dist
};

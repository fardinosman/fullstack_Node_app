let degressC = 10;

export function getTemp(min =-30, max=50){ 
    const change = Math.random() < 0.5 ? -1 : 1;
    degressC += change

    degressC = Math.max(min, Math.min(max, degressC));

    return degressC;
}
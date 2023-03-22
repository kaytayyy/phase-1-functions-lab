// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) { 
    return blocks - 42

    }
    else if (blocks < 42) {
        return 42 - blocks
    }

    console.log()
}

function distanceFromHqInFeet(distance) {
    const n = 
    distanceFromHqInBlocks(distance);
    return n * 264   
}

function distanceTravelledInFeet(start, destination) {
    const i = 
    destination - start
    return Math.abs(i) * 264
}
function calculatesFarePrice(start, destination) {
    const a = 
    distanceTravelledInFeet(start, destination)
    return a <= 400 ? 0
        : a <= 2000 ? (a - 400) * 0.02
        : a <= 2500 ? 25
        : 'cannot travel that far' ;
}

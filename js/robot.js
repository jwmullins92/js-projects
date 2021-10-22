const trackRobot = (...args) => {
    let x = 0;
    let y = 0;
    let north = true;
    let east = true;
    for (let i = 0; i < args.length; i++) {
        if (i % 2 === 0) {
            north ? x += args[i] : x -= args[i];
            north = !north
        } else {
            east ? y += args[i] : y -= args[i];
            east = !east
        }
    }
    return [x, y];
}

console.log(trackRobot(10, 40, 15, 20, 10, 5));
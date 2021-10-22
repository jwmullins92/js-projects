const isTriangle = (sides) => {
    if (sides.length !== 3) {
        return false;
    }
    const a = sides[0];
    const b = sides[1];
    const c = sides[2];
    return a + b > c &&
        a + c > b &&
        b + c > a ?
        true : false;
}

const calculateAreaOfTriangle = (sides) => {
    if (sides.length !== 3) {
        return false;
    }
    const a = sides[0];
    const b = sides[1];
    const c = sides[2];
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area;
}

const doesTriangleFit = (t1, t2) => {
    if (isTriangle(t1) && isTriangle(t2)) {
        return calculateAreaOfTriangle(t1) <= calculateAreaOfTriangle(t2) ? true : false;
    }
    return false;
}

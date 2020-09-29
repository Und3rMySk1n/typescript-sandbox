type Point = {
    x: number,
    y: number,
}

type Circle = {
    center: Point,
    radius: number,
}

type Square = {
    topLeft: Point,
    bottomRight: Point,
}

/** User Defined Type Guard */
function isCircle(figure: any): figure is Circle {
    return figure.center !== undefined && figure.radius !== undefined;
}

/** User Defined Type Guard */
function isSquare(figure: any): figure is Square {
    return figure.topLeft !== undefined && figure.bottomRight !== undefined;
}

export {
    Circle,
    Square,
    isCircle,
    isSquare,
}
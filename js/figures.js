/** User Defined Type Guard */
function isCircle(figure) {
    return figure.center !== undefined && figure.radius !== undefined;
}
/** User Defined Type Guard */
function isSquare(figure) {
    return figure.topLeft !== undefined && figure.bottomRight !== undefined;
}
export { isCircle, isSquare, };

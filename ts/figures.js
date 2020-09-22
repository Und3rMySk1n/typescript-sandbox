"use strict";
exports.__esModule = true;
exports.isSquare = exports.isCircle = void 0;
/** User Defined Type Guard */
function isCircle(figure) {
    return figure.center !== undefined && figure.radius !== undefined;
}
exports.isCircle = isCircle;
/** User Defined Type Guard */
function isSquare(figure) {
    return figure.topLeft !== undefined && figure.bottomRight !== undefined;
}
exports.isSquare = isSquare;

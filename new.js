define("math-functions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multiply = void 0;
    function multiply(a, b) {
        return a * b;
    }
    exports.multiply = multiply;
});
define("person", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("figures", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("index", ["require", "exports", "math-functions", "moment", "figures"], function (require, exports, math_functions_1, moment, figures_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('multiplication', math_functions_1.multiply(10, 27));
    var date = new Date();
    console.log(moment(date).format('L'));
    var test = true;
    var user = null;
    user = {
        name: 'Aleksey',
        age: 34,
    };
    function buildName(firstName, lastName) {
        if (lastName === void 0) { lastName = "Smith"; }
        return firstName + " " + lastName;
    }
    function getArea(figure) {
        if (figures_1.isCircle(figure)) {
            return Math.PI * Math.pow(figure.radius, 2);
        }
        else {
            var length_1 = figure.bottomRight.x - figure.topLeft.x;
            return Math.pow(length_1, 2);
        }
    }
    var circle = {
        center: {
            x: 1,
            y: 2,
        },
        radius: 10,
    };
    var circleArea = getArea(circle);
    console.log('circle area', circleArea);
});

"use strict";
var l09_vectorclass;
(function (l09_vectorclass) {
    class Vector {
        constructor() {
            this.x = 0;
            this.y = 0;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    let v1 = new Vector();
    v1.set(4, 6);
    v1.scale(2);
    console.log(v1);
})(l09_vectorclass || (l09_vectorclass = {}));
//# sourceMappingURL=l09_übung.js.map
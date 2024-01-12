(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dslog = {}));
})(this, (function (exports) { 'use strict';

    const dslog = {
        info: (message) => {
            console.log(`%cInfo: ${message}`, "color: #56b97f");
        },
        method: (message) => {
            console.log(`%cMethod: ${message}`, "color: #56b97f");
        },
        obj: (object) => {
            console.log("Object:", object);
        },
        error: (message) => {
            console.log(`%cError: ${message}`, "color: red");
        },
    };

    exports.dslog = dslog;

}));

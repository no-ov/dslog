'use strict';

const getTtime = () => {
    return new Date().toLocaleTimeString();
};
const showLog = () => {
    const flag = localStorage.getItem("dslog");
    return flag === "true";
};
const dslog = {
    info: (message) => {
        if (!showLog())
            return;
        console.log(`%c [ ${getTtime()} ] [ INFO ] ${message}`, "color: #56b97f");
    },
    method: (message) => {
        if (!showLog())
            return;
        console.log(`%c [ ${getTtime()} ] [ METH ] ${message} `, "color: #c0a4d8");
    },
    obj: (object) => {
        if (!showLog())
            return;
        const deepCopyObj = JSON.parse(JSON.stringify(object));
        console.log(`%c [ ${getTtime()} ] [ OBJE ] `, "color: yellow", deepCopyObj);
    },
    error: (message) => {
        if (!showLog())
            return;
        console.log(`%c [ ${getTtime()} ] [ ERRO ] ${message} `, "color: red");
    },
};

exports.dslog = dslog;

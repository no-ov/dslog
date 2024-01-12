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

export { dslog };

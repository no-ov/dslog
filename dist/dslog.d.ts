declare const dslog: {
    info: (message: any) => void;
    method: (message: any) => void;
    obj: (object: object) => void;
    error: (message: any) => void;
};

export { dslog };

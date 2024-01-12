declare const dslog: {
    info: (message: string) => void;
    method: (message: string) => void;
    obj: (object: object) => void;
    error: (message: string) => void;
};

export { dslog };

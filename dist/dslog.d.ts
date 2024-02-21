declare const dslog: {
    info: (...args: any[]) => void;
    method: (...args: any[]) => void;
    obj: (...args: any[]) => void;
    error: (...args: any[]) => void;
};

export { dslog };

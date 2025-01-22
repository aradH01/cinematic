export const isObject = (obj: unknown): obj is object => {
    let type = typeof obj;
    return type === 'object' && !!obj && !Array.isArray(obj);
};

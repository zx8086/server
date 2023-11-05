// utils.ts
export function setCommonHeaders( set: any ) {
    set.status = 200;
    set.headers['x-powered-by'] = 'Elysia';
    set.headers['content-type'] = 'application/json';
};

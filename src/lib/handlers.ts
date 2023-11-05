export const cbHealthCheck = ( set: any ) => {
    set.headers['content-type'] = 'application/json';
    return {
        body: JSON.stringify({
            message: 'Hello World!',
        }),

    };
};
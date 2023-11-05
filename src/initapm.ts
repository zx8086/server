// initapm.ts
import apm from 'elastic-apm-node';

export const myApm = apm.start({
    serviceName: 'FullStack-Demo',
    secretToken: '',
    serverUrl: 'https://apm.siobytes.com',
    environment: process.env.NODE_ENV || 'development',
    logLevel: 'trace',
    cloudProvider: 'none',
    opentelemetryBridgeEnabled: true,
    useElasticTraceparentHeader: true,
    contextManager: 'asynclocalstorage',
    // contextManager: 'async_hooks',
    contextPropagationOnly: true,
    errorOnAbortedRequests: true,
})
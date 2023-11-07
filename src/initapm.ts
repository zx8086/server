// initapm.ts
import apm from 'elastic-apm-node';

export const myApm = apm.start({
    serviceName: 'ElysiaJS-Backend',
    secretToken: '',
    serverUrl: 'https://apm.siobytes.com',
    environment: process.env.NODE_ENV || 'development',
    logLevel: 'trace',
    cloudProvider: 'none',
    opentelemetryBridgeEnabled: true,
    useElasticTraceparentHeader: true,
    contextManager: 'asynclocalstorage',
    contextPropagationOnly: false,
    errorOnAbortedRequests: true,
    captureBody: 'all',
    abortedErrorThreshold: '30s',
    captureErrorLogStackTraces: 'always',
    usePathAsTransactionName: true,
    centralConfig: true,
    // disableInstrumentations: ['graphql', 'redis', '@opentelemetry/api', '@opentelemetry/sdk-metrics'],
});
import apm from 'elastic-apm-node';

export default apm.start({
  serviceName: Bun.env.ELASTIC_APM_SERVICE_NAME!!,
  secretToken: Bun.env.ELASTIC_APM_SECRET_TOKEN!!,
  serverUrl: Bun.env.ELASTIC_APM_SERVER_URL!!,
  environment: Bun.env.ELASTIC_APM_ENVIRONMENT!!,
  captureBody: Bun.env.ELASTIC_APM_CAPTURE_BODY!! as any,
//   contextPropagationOnly: Bun.env.ELASTIC_APM_CONTEXT_PROPAGATION!! as any,
  logLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'error'
});

// instrumentation.ts

import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-proto';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const sdk = new opentelemetry.NodeSDK({
  resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: Bun.env.SERVICE_NAME,
        [SemanticResourceAttributes.SERVICE_NAMESPACE]: Bun.env.SERVICE_NAMESPACE,
        [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: Bun.env.DEPLOYMENT_ENVIRONMENT
  }),
//   consoleExporter,
  traceExporter: new OTLPTraceExporter({
    // url: 'https://otel-http-traces.siobytes.com',
    url: 'https://otel-http-traces.siobytes.com',

    headers: {},
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: 'https://otel-http-metrics.siobytes.com',
      headers: {},
    }),
  }),
  instrumentations: [getNodeAutoInstrumentations()]
})

sdk.start();

process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.log('Error terminating tracing', error))
    .finally(() => process.exit(0));
});

// instrumentation.ts

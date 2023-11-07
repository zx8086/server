import { Elysia } from "elysia";
import { format } from 'date-fns';
import { swagger } from '@elysiajs/swagger';

import { cbHealthCheck } from "./handlers"
import { cbPing } from "./cbHealthCheck";

export const controllers = new Elysia()
.use(swagger({
    documentation: {
      info: {
        title: 'My Full Stack Demo API V2 Documentation',
        version: '1.0.0',
      },
      tags: [
        { name: 'Application', description: 'General endpoints' },
        { name: 'Core Data', description: 'Core Data endpoints' },
        { name: 'Operations', description: 'Operations & Manipulation endpoints' },
        { name: 'Support', description: 'Support endpoints' }
      ],
    },
    path: '/v2/swagger'
  }))
.decorate('getDate', () => format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
.get("/", () => "Hello Elysia", {
    detail: {
        tags: ['Application'],
        summary: 'Welcome endpoint',
        description: 'Returns a welcome message.',
    }
})
.get("/health", cbHealthCheck, {
    detail: {
        tags: ['Support'],
        summary: 'Check Couchbase health',
        description: 'Returns a Health Check Status.',
    }
})
// .get("/ping", cbPing, {
//     detail: {
//         tags: ['Support'],
//         summary: 'Ping Couchbase',
//         description: 'Returns a Ping Status.',
//     }
// })
;
    // .state('version', { major: 1, minor: 0, patch: 0 })

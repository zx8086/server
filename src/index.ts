import { myApm} from "./initapm";

import { Elysia } from 'elysia'
import { yoga } from '@elysiajs/graphql-yoga'
import { cors } from '@elysiajs/cors'
import { useSofa } from '@graphql-yoga/plugin-sofa'
import { useResponseCache } from '@graphql-yoga/plugin-response-cache'
import typeDefs from '/Users/SOwusu/Documents/my-fullstack-app/server/src/schema/typeDefs';
import resolvers from '/Users/SOwusu/Documents/my-fullstack-app/server/src/schema/resolvers';

import { setCommonHeaders } from "./lib/utils";
import { controllers } from "./lib/controllers";

const app = new Elysia()
  .use(cors(
    {
      origin: true,
      credentials: false,
      // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      // allowedHeaders: ['Content-Type', 'Authorization'],
      // exposedHeaders: ['Content-Type', 'Authorization'],
      maxAge: 86400,
      preflight: true,
      // optionsSuccessStatus: 204,
    
    }
  ))
  .use(
    yoga({
      logging: 'debug',
      typeDefs: typeDefs,
      resolvers: resolvers,
      // healthCheckEndpoint: '/health',
      batching: {
        limit: 2
      },
      plugins: [
        useResponseCache({
          // global cache
          session: () => null
        }),
      ],
      // healthCheckEndpoint: '/health',
      // plugins: [
      //   useResponseCache({
      //     // global cache
      //     session: () => null
      //   }),
      //   useSofa({
      //     basePath: '/rest',
      //     swaggerUI: {
      //       endpoint: '/swagger'
      //     },
      //     title: 'Example API',
      //     version: '1.0.0'
      //   }),
      //   useReadinessCheck({
      //     endpoint: '/ready', // default
      //     check: async () => {
      //       try {
      //         await checkDbAvailable()
      //         // if true, respond with 200 OK
      //         return false
      //       } catch (err) {
      //         // log the error on the server for debugging purposes
      //         console.error(err)
      //         // if false, respond with 503 Service Unavailable and no bdy
      //         return false
      //       }
      //     }
      //   })
      // ],
    })
)
.listen(8080, () => {
        console.log('Server is running on http://localhost:8080');
    });
    // .use(controllers)
  // .onRequest(({ request }) => {
  //   const url = new URL(request.url)
  //   // console.log(`📩 <-- ${request.method} ${url.pathname}`)
  //   // myApm.setTransactionName(`${request.method} ${url.pathname}`);
  //   myApm.startTransaction();
  //   // myApm.startTransaction(`${request.method} ${url.pathname}`, 'request');
  //   // myApm.setTransactionName(`${request.method} ${url.pathname}`);
  //   // apm.logger.info(`APM 📩 <-- ${request.method} ${url.pathname}`);
  // })
  // // .onResponse(()=> {
  // //     // const url = new URL(ctx.request.url);  // <-- Define the `url` variable within this function
  // //     // console.log(`${typeof ctx.set.status === 'number' ? emojiStatus.get(ctx.set.status) ?? "" : ""} --> ${ctx.request.method} ${ctx.request.path} ${ctx.set.status}`)
  // //   })
  // .onAfterHandle(() => {
  //   myApm.endTransaction();
  //   // myApm.flush();
  // })
  // // .use(setCommonHeaders)
  // .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

import { myApm} from "./initapm";

import { Elysia } from "elysia";
import { apollo, gql } from '@elysiajs/apollo'

import { setCommonHeaders } from "./lib/utils";
import { controllers } from "./lib/controllers";

const app = new Elysia()
  .use(
    apollo({
        typeDefs: gql`
            type Book {
                title: String
                author: String
            }

            type Query {
                books: [Book]
            }
        `,
        resolvers: {
            Query: {
                books: () => {
                    return [
                        {
                            title: 'Elysia',
                            author: 'saltyAom'
                        }
                    ]
                }
            }
        }
    })
  )
  .listen(8080);
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

import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();


app.use(async (ctx) => {
    console.log("A" + Deno.cwd() + "Z");
    //.request.url.pathname);
    await send(ctx, ctx.request.url.pathname, {
        root: `${Deno.cwd()}/public`,
        index: "index.html"
    });
});

app.use((ctx) => {
    ctx.response.body = "Hello, World!";
});


await app.listen({port: 8080});

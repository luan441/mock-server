import getUsersPaginated from "./src/handler/get-users-paginated";

const server = Bun.serve({
  port: 3000,
  routes: {
    "/api/x/retweetby": {
      GET: getUsersPaginated,
    },
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

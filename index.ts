import getPosts from "./src/handler/get-posts";
import getUsers from "./src/handler/get-users";
import getUsersXPaginated from "./src/handler/get-users-x-paginated";

const server = Bun.serve({
  port: 3000,
  routes: {
    "/api/x/retweetby": {
      GET: getUsersXPaginated,
    },
    "/api/users": {
      GET: getUsers,
    },
    "/api/posts": {
      GET: getPosts,
    },
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

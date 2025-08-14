import { faker } from "@faker-js/faker";
import type { User } from "../types/user";

const MAX_PAGES = 2;
const RATE_LIMIT = 2500;
let requestCount = 0;
const windowSize = 1 * 60 * 1000; // 1 minute in milliseconds
let windowStart = Date.now();
let windowEnd = windowStart + windowSize;

const getUsersPaginated = (): Response => {
  const now = Date.now();
  if (now > windowEnd) {
    windowStart = now;
    windowEnd = windowStart + windowSize;
    requestCount = 0;
  }

  if (requestCount >= RATE_LIMIT) {
    return new Response("Rate limit exceeded", { status: 429 });
  }
  requestCount++;

  const users: User[] = [];
  for (let i = 0; i < 100; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    users.push({
      id: faker.number.int(),
      name: faker.person.fullName({ firstName, lastName }),
      username: faker.internet.username({ firstName, lastName }),
    });
  }

  const hasher = new Bun.CryptoHasher("sha1");
  hasher.update(Math.random().toString());

  const nextToken = requestCount < MAX_PAGES ? hasher.digest("hex") : undefined;
  return Response.json({
    data: users,
    meta: {
      result_count: 0,
      next_token: nextToken,
    },
  });
};

export default getUsersPaginated;

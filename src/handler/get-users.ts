import type { User } from "../types/user";
import userGenerate from "../generator/user-generator";

const getUsers = (req: Request): Response => {
  const url = new URL(req.url);
  const amountString = url.searchParams.get('amount') ?? '100';
  const amount = Number.parseInt(amountString);

  const users: User[] = [];
  for (let i = 0; i < amount; i++) {
    users.push(userGenerate());
  }

  return Response.json({
    data: users,
    meta: {
      result_count: amount,
    },
  });
};

export default getUsers;

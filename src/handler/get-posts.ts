import postGenerate from "../generator/post-generator";
import type { Post } from "../types/post";

const getPosts = (req: Request): Response => {
  const url = new URL(req.url);
  const amountString = url.searchParams.get('amount') ?? '100';
  const amount = Number.parseInt(amountString);

  const posts: Post[] = [];
  for (let i = 0; i < amount; i++) {
    posts.push(postGenerate());
  }

  return Response.json({
    data: posts,
    meta: {
      result_count: amount,
    },
  });
};

export default getPosts;

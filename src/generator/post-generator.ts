import { faker } from "@faker-js/faker";
import type { Post } from "../types/post";

const postGenerate = (): Post => {
  return {
    id: faker.number.int(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph({min: 1, max: 3 }),
  };
};

export default postGenerate;

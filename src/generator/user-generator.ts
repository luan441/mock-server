import { faker } from "@faker-js/faker";
import type { User } from "../types/user";

const userGenerate = (): User => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.number.int(),
    name: faker.person.fullName({ firstName, lastName }),
    username: faker.internet.username({ firstName, lastName }),
  };
};

export default userGenerate;

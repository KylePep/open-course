import { db } from "../src/db.js";

async function main() {
  console.log("SEED START");
await db.course.create({
  data: {
    title: "Test Course",
    description: "Seed data example",

    user: {
      create: {
        email: "test@example.com",
      },
    },

    steps: {
      create: [
        {
          title: "Step 1",
          order: 1,
        },
        {
          title: "Step 2",
          order: 2,
        },
      ],
    },
  },
});


}

main()
  .then(() => console.log("Seed complete"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
import { db } from "../src/db.js";

async function main() {
  await db.course.create({
    data:{
      title: "Test Course",
      description: "Seed data example",
      steps: {
        create: [
          {title: "Step 1", order: 1},
          {title: "Step 2", order: 2}
        ]
      }
    }
  });
}

main().finally(()=> process.exit(0));
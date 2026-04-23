import { Course } from "@open-course/shared";
import { db } from "../db.js";

export async function getCourses(): Promise<Course[]>{
  return db.course.findMany();
}
import { db } from "../db.js";

export async function getCourses(){
  return db.course.findMany();
}
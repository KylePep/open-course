import { Request, Response } from "express";
import * as courseService from '../services/course.service.js'

export async function getCourses(req: Request, res: Response){
  const courses = await courseService.getCourses();
  res.json(courses);
}
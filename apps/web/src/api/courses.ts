import type { Course } from "@open-course/shared";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export async function getCourses(): Promise<Course[]> {
  const res = await fetch(`${API_BASE}/courses`);

  if (!res.ok) {
    throw new Error(`Failed to fetch courses: ${res.status}`);
  }

  return res.json();
}

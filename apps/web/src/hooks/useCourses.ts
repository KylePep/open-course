import { useEffect, useState } from "react";
import type { Course } from "@open-course/shared";
import { getCourses } from "../api/courses";

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    getCourses()
      .then((data) => {
        if (mounted) setCourses(data);
      })
      .catch((err) => {
        if (mounted) setError(err.message ?? "Unknown error");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { courses, loading, error };
}

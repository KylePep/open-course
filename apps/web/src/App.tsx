import { useCourses } from "./hooks/useCourses";

export default function App() {
  const { courses, loading, error } = useCourses();

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Courses</h1>

      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <h3>{course.title}</h3>
              {course.description && <p>{course.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

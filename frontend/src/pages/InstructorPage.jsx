import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructorData, updateInstructorBio } from "../features/instructorThunks";
import InstructorProfile from "../components/Instructor/InstructorProfile";
import InstructorStats from "../components/Instructor/InstructorStats";
import CourseCard from "../components/Instructor/CourseCard";

const InstructorPage = () => {
  const dispatch = useDispatch();
  const { instructor, courses, loading, error } = useSelector((state) => state.instructor);

  useEffect(() => {
    dispatch(fetchInstructorData());
  }, [dispatch]);

  const handleEditProfile = (updatedProfile) => {
    dispatch(updateInstructorBio(updatedProfile));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Instructor Dashboard</h1>

      {instructor && (
        <>
          <InstructorProfile instructor={instructor} onEdit={handleEditProfile} />
          <InstructorStats stats={instructor.stats} />
        </>
      )}

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">My Courses</h2>
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p>No courses found.</p>
        )}
      </section>
    </div>
  );
};

export default InstructorPage;

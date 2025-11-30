import React, { useState, useMemo } from "react";

const CertificateDashboard = () => {
  // Mock sample data for issued certificates
  const [certificates] = useState([
    {
      id: 1,
      learner: "John Doe",
      course: "React Fundamentals",
      organization: "Tech Academy",
      issuedDate: "2025-10-01",
    },
    {
      id: 2,
      learner: "Ava Smith",
      course: "Node.js Essentials",
      organization: "CodeBase",
      issuedDate: "2025-09-25",
    },
    {
      id: 3,
      learner: "Liam Johnson",
      course: "React Fundamentals",
      organization: "Tech Academy",
      issuedDate: "2025-10-02",
    },
    {
      id: 4,
      learner: "Emma Wilson",
      course: "Python for Beginners",
      organization: "DataLearn",
      issuedDate: "2025-09-15",
    },
    {
      id: 5,
      learner: "Sophia Brown",
      course: "React Fundamentals",
      organization: "Tech Academy",
      issuedDate: "2025-10-03",
    },
  ]);

  const [search, setSearch] = useState("");

  // Filter certificates by learner name
  const filtered = useMemo(
    () =>
      certificates.filter((c) =>
        c.learner.toLowerCase().includes(search.toLowerCase())
      ),
    [search, certificates]
  );

  // Compute statistics
  const statsByOrg = useMemo(() => {
    const orgMap = {};
    certificates.forEach((c) => {
      orgMap[c.organization] = (orgMap[c.organization] || 0) + 1;
    });
    return orgMap;
  }, [certificates]);

  const statsByCourse = useMemo(() => {
    const courseMap = {};
    certificates.forEach((c) => {
      courseMap[c.course] = (courseMap[c.course] || 0) + 1;
    });
    return courseMap;
  }, [certificates]);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Admin Certificate Dashboard
      </h1>

      {/* Search Box */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by learner name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:ring-2 focus:ring-purple-500 text-gray-800 bg-gray-100"
        />
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Stats by Organization */}
        <div className="bg-gray-50 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Certificates by Organization
          </h2>
          {Object.keys(statsByOrg).map((org) => (
            <div
              key={org}
              className="flex justify-between border-b border-gray-200 py-2"
            >
              <span className="text-gray-700">{org}</span>
              <span className="font-medium text-gray-900">
                {statsByOrg[org]}
              </span>
            </div>
          ))}
        </div>

        {/* Stats by Course */}
        <div className="bg-gray-50 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Certificates by Course
          </h2>
          {Object.keys(statsByCourse).map((course) => (
            <div
              key={course}
              className="flex justify-between border-b border-gray-200 py-2"
            >
              <span className="text-gray-700">{course}</span>
              <span className="font-medium text-gray-900">
                {statsByCourse[course]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Table */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Issued Certificates
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-purple-100 text-gray-800">
              <th className="p-3 border-b border-gray-200">Learner</th>
              <th className="p-3 border-b border-gray-200">Course</th>
              <th className="p-3 border-b border-gray-200">Organization</th>
              <th className="p-3 border-b border-gray-200">Issued Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((cert) => (
                <tr
                  key={cert.id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="p-3 border-b border-gray-200 text-gray-800">
                    {cert.learner}
                  </td>
                  <td className="p-3 border-b border-gray-200 text-gray-800">
                    {cert.course}
                  </td>
                  <td className="p-3 border-b border-gray-200 text-gray-800">
                    {cert.organization}
                  </td>
                  <td className="p-3 border-b border-gray-200 text-gray-600">
                    {cert.issuedDate}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-gray-500 italic"
                >
                  No certificates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CertificateDashboard;
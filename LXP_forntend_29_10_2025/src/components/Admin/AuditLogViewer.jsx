import React, { useEffect, useState } from "react";
import { FaSearch, FaFilter, FaSync } from "react-icons/fa";
import axios from "axios";

const AuditLogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch logs dynamically (replace with your real API later)
  const fetchLogs = async () => {
    try {
      setLoading(true);
      // Replace this with your actual API endpoint, e.g. `/api/admin/audit-logs`
      const response = await axios.get("https://mockapi.io/api/audit-logs");
      setLogs(response.data);
      setFilteredLogs(response.data);
    } catch (error) {
      console.error("Error fetching audit logs:", error);
      // Fallback demo data if API fails
      const mockLogs = [
        {
          id: 1,
          user: "Admin",
          action: "Approved course: React for Beginners",
          role: "Moderator",
          timestamp: "2025-10-28 09:15 AM",
          details: "Course approved successfully after review",
        },
        {
          id: 2,
          user: "John Doe",
          action: "Rejected tutorial: NodeJS Basics",
          role: "Reviewer",
          timestamp: "2025-10-27 02:40 PM",
          details: "Content violated platform guidelines",
        },
        {
          id: 3,
          user: "Super Admin",
          action: "Created new Moderator: Jane Smith",
          role: "Admin",
          timestamp: "2025-10-27 11:20 AM",
          details: "Assigned moderator access to Jane Smith",
        },
        {
          id: 4,
          user: "Jane Smith",
          action: "Updated course title: React Masterclass",
          role: "Instructor",
          timestamp: "2025-10-26 05:45 PM",
          details: "Updated to make the course SEO-friendly",
        },
      ];
      setLogs(mockLogs);
      setFilteredLogs(mockLogs);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  // Filter + Search
  useEffect(() => {
    let filtered = [...logs];

    if (filter !== "All") {
      filtered = filtered.filter((log) => log.role === filter);
    }

    if (search.trim() !== "") {
      filtered = filtered.filter(
        (log) =>
          log.user.toLowerCase().includes(search.toLowerCase()) ||
          log.action.toLowerCase().includes(search.toLowerCase()) ||
          log.details.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredLogs(filtered);
  }, [filter, search, logs]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen backdrop-blur-sm">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-900">
            Audit Log Viewer
          </h2>

          <div className="flex items-center gap-3">
            <div className="relative">
              <FaSearch className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search logs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-purple-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-purple-900 outline-none text-purple-900"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-purple-300 rounded-lg px-4 py-2 text-purple-900 focus:ring-2 focus:ring-purple-900 outline-none"
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Moderator">Moderator</option>
              <option value="Reviewer">Reviewer</option>
              <option value="Instructor">Instructor</option>
            </select>

            <button
              onClick={fetchLogs}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaSync /> {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900">
                <th className="p-3 text-left">User</th>
                <th className="p-3 text-left">Action</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Timestamp</th>
                <th className="p-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-500 py-6 animate-pulse"
                  >
                    Loading audit logs...
                  </td>
                </tr>
              ) : filteredLogs.length > 0 ? (
                filteredLogs.map((log) => (
                  <tr
                    key={log.id}
                    className="border-t hover:bg-purple-50 transition duration-150"
                  >
                    <td className="p-3 font-semibold text-gray-800">
                      {log.user}
                    </td>
                    <td className="p-3 text-gray-700">{log.action}</td>
                    <td className="p-3 font-medium text-purple-700">
                      {log.role}
                    </td>
                    <td className="p-3 text-gray-600">{log.timestamp}</td>
                    <td className="p-3 text-gray-700">{log.details}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-6">
                    No logs found for the selected filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditLogViewer;

import React, { useState } from "react";

const ModerationQueue = () => {
  const [filter, setFilter] = useState("All");
  const [selectedItems, setSelectedItems] = useState([]);

  const [contents, setContents] = useState([
    {
      id: 1,
      title: "React for Beginners - Lesson 3",
      type: "Course",
      author: "John Doe",
      status: "Pending",
      submittedAt: "2025-10-27 10:20 AM",
    },
    {
      id: 2,
      title: "Advanced NodeJS Guide",
      type: "Course",
      author: "Jane Smith",
      status: "Approved",
      submittedAt: "2025-10-25 04:45 PM",
    },
    {
      id: 3,
      title: "How to use Git efficiently",
      type: "Tutorial",
      author: "Mike Ross",
      status: "Pending",
      submittedAt: "2025-10-26 12:15 PM",
    },
  ]);

  const filteredContents =
    filter === "All"
      ? contents
      : contents.filter((item) => item.status === filter);

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const bulkAction = (action) => {
    setContents((prev) =>
      prev.map((item) =>
        selectedItems.includes(item.id)
          ? { ...item, status: action }
          : item
      )
    );
    setSelectedItems([]);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen backdrop-blur-sm">
      <div className="bg-white shadow-md rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Moderation Queue
          </h2>

          <div className="flex gap-3 items-center">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-400 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-gray-700 outline-none"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>

            {selectedItems.length > 0 && (
              <div className="flex gap-2">
                <button
                  onClick={() => bulkAction("Approved")}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Approve Selected
                </button>
                <button
                  onClick={() => bulkAction("Rejected")}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Reject Selected
                </button>
              </div>
            )}
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-900">
              <th className="p-3 text-left">Select</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Author</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Submitted At</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredContents.map((item) => (
              <tr
                key={item.id}
                className={`border-t hover:bg-gray-100 ${
                  selectedItems.includes(item.id) ? "bg-gray-100" : ""
                }`}
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="accent-gray-900"
                  />
                </td>
                <td className="p-3 font-semibold text-gray-900">{item.title}</td>
                <td className="p-3 text-gray-800">{item.type}</td>
                <td className="p-3 text-gray-800">{item.author}</td>
                <td
                  className={`p-3 font-medium ${
                    item.status === "Approved"
                      ? "text-green-700"
                      : item.status === "Rejected"
                      ? "text-red-700"
                      : "text-yellow-700"
                  }`}
                >
                  {item.status}
                </td>
                <td className="p-3 text-sm text-gray-700">{item.submittedAt}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() =>
                      setContents((prev) =>
                        prev.map((x) =>
                          x.id === item.id
                            ? { ...x, status: "Approved" }
                            : x
                        )
                      )
                    }
                    className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 text-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() =>
                      setContents((prev) =>
                        prev.map((x) =>
                          x.id === item.id
                            ? { ...x, status: "Rejected" }
                            : x
                        )
                      )
                    }
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 text-sm"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredContents.length === 0 && (
          <p className="text-gray-700 text-center py-6">
            No items found for this filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default ModerationQueue;

import React, { useState } from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import { useNavigate } from "react-router-dom";

// ClickableCard component must come first
const ClickableCard = ({ children, courseId, nodeId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${courseId}/section/${nodeId}`);
  };

  const clickableCardContentStyle = {
    background: "#f8f5ff",
    padding: "6px 8px",
    borderRadius: "12px",
    textAlign: "left",
    fontSize: "12px",
    lineHeight: "1.2",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    color: "#111",
    fontWeight: "400",
    cursor: "pointer",
  };

  const clickableCardTitleStyle = {
    color: "#7e22ce",
    fontWeight: "600",
    marginBottom: "4px",
  };

  const clickableCardParagraphStyle = {
    margin: "1px 0",
  };

  return (
    <div
      style={clickableCardContentStyle}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      role="button"
      tabIndex={0}
    >
      {React.Children.map(children, (child) => {
        if (child.type === "h4") {
          return React.cloneElement(child, { style: clickableCardTitleStyle });
        }
        if (child.type === "p") {
          return React.cloneElement(child, { style: clickableCardParagraphStyle });
        }
        return child;
      })}
    </div>
  );
};

// Styles for cards and edges
const cardStyle = {
  width: 180,
  height: 120,
  border: "1px solid #a855f7",
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(168,85,247,0.2)",
  cursor: "pointer",
};

const edgeStyle = { stroke: "#a855f7", strokeDasharray: "4 4" };

// Now define allCourses after ClickableCard
const allCourses = [
  {
    id: "1",
    title: "React for Beginners",
    nodes: [
      {
        id: "1",
        position: { x: 0, y: 0 },
        data: {
          label: (
            <ClickableCard courseId="1" nodeId="1">
              <h4>📘 Course Summary</h4>
              <p>Modules: 3</p>
              <p>Lectures: 15</p>
              <p>Quizzes: 6</p>
            </ClickableCard>
          ),
        },
        style: cardStyle,
      },
      {
        id: "2",
        position: { x: 200, y: 0 },
        data: {
          label: (
            <ClickableCard courseId="1" nodeId="2">
              <h4>📈 Course Progress</h4>
              <p>Modules Completed: 1</p>
              <p>In Progress: 1</p>
              <p>Yet to Start: 1</p>
            </ClickableCard>
          ),
        },
        style: cardStyle,
      },
      {
        id: "3",
        position: { x: 400, y: 0 },
        data: {
          label: (
            <ClickableCard courseId="1" nodeId="3">
              <h4>🧠 Quizzes</h4>
              <p>4/6 Completed</p>
              <p>Final Project: ✅ Done</p>
            </ClickableCard>
          ),
        },
        style: cardStyle,
      },
      {
        id: "4",
        position: { x: 600, y: 0 },
        data: {
          label: (
            <ClickableCard courseId="1" nodeId="4">
              <h4>🏆 Score & Achievements</h4>
              <p>Score: 85%</p>
              <p>Badge: 🥇 Beginner</p>
              <p>Certificate: ✅</p>
            </ClickableCard>
          ),
        },
        style: cardStyle,
      },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: edgeStyle },
      { id: "e2-3", source: "2", target: "3", animated: true, style: edgeStyle },
      { id: "e3-4", source: "3", target: "4", animated: true, style: edgeStyle },
    ],
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    nodes: [
      {
        id: "5",
        position: { x: 0, y: 0 },
        data: {
          label: (
            <ClickableCard courseId="2" nodeId="5">
              <h4>📘 Course Summary</h4>
              <p>Modules: 4</p>
              <p>Lectures: 18</p>
              <p>Quizzes: 5</p>
            </ClickableCard>
          ),
        },
        style: cardStyle,
      },
      {
        id: "6",
        position: { x: 200, y: 0 },
        data: {
          label: (
            <ClickableCard courseId="2" nodeId="6">
              <h4>📈 Course Progress</h4>
              <p>Modules Completed: 2</p>
              <p>In Progress: 2</p>
              <p>Yet to Start: 0</p>
            </ClickableCard>
          ),
        },
        style: cardStyle,
      },
      {
        id: "7",
        position: { x: 400, y: 0 },
        data: {
          label: (
            <ClickableCard courseId="2" nodeId="7">
              <h4>🧠 Quizzes</h4>
              <p>2/5 Completed</p>
              <p>Async Project: ⏳ Pending</p>
            </ClickableCard>
          ),
        },
        style: cardStyle,
      },
      {
        id: "8",
        position: { x: 600, y: 0 },
        data: {
          label: (
            <ClickableCard courseId="2" nodeId="8">
              <h4>🏆 Score & Achievements</h4>
              <p>Score: 70%</p>
              <p>Badge: 🥈 JS Challenger</p>
            </ClickableCard>
          ),
        },
        style: cardStyle,
      },
    ],
    edges: [
      { id: "e5-6", source: "5", target: "6", animated: true, style: edgeStyle },
      { id: "e6-7", source: "6", target: "7", animated: true, style: edgeStyle },
      { id: "e7-8", source: "7", target: "8", animated: true, style: edgeStyle },
    ],
  },
];

const EnrollCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 2;

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = allCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(allCourses.length / coursesPerPage);

  return (
    <div style={{ padding: "30px", background: "#fafafa", minHeight: "90vh" }}>
      <h1
        style={{
          textAlign: "left",
          fontSize: "32px",
          fontWeight: "bold",
          color: "#6b21a8",
          marginBottom: "30px",
        }}
      >
        My Courses
      </h1>

      {currentCourses.map((course) => (
        <div key={course.id} style={{ marginBottom: "60px" }}>
          <h2 style={{ color: "#6b21a8", marginLeft: "10px", marginBottom: "15px" }}>{course.title}</h2>
          <div style={{ height: "150px" }}>
            <ReactFlow
              nodes={course.nodes}
              edges={course.edges}
              fitView
              zoomOnScroll={false}
              zoomOnPinch={false}
              panOnDrag={false}
              zoomOnDoubleClick={false}
            >
              <Background color="#e5e5e5" variant="dots" gap={12} size={1} />
            </ReactFlow>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              background: currentPage === i + 1 ? "#6b21a8" : "#e0e0e0",
              color: currentPage === i + 1 ? "#fff" : "#111",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnrollCourses;

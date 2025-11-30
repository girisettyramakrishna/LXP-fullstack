import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

// 🏠 General Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ResetPassword from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";
import CourseSectionPage from "./pages/CourseSectionPage";
import SandboxPage from "./pages/SandboxPage";
import UploadQuiz from "./pages/UploadQuiz";
import CreateCourse from "./pages/CreateCourse";
import CoursePreview from "./pages/CoursePreview";

// 👨‍🏫 Instructor
import InstructorPage from "./pages/InstructorPage";
import InstructorCourses from "./components/Instructor/InstructorCourses";
import InstructorStats from "./components/Instructor/InstructorStats";
import InstructorHeader from "./components/Instructor/InstructorHeader";

// 💳 Payments
import CheckoutPage from "./components/Payments/CheckoutPage";
import PaymentHistory from "./components/Payments/PaymentHistory";
import CertificateUnlockTrigger from "./components/Payments/CertificateUnlockTrigger";
import InvoiceManager from "./components/Payments/InvoiceManager";
import OrgSubscriptionView from "./components/Payments/OrgSubscriptionView";
import PaymentNotifications from "./components/Payments/PaymentNotifications";

// 🛠 Admin – Core
import AdminDashboard from "./components/Admin/AdminDashboard";
import ManageRoles from "./components/Admin/ManageRoles";
import ModerationQueue from "./components/Admin/ModerationQueue";
import AuditLogViewer from "./components/Admin/AuditLogViewer";
import ModerationRoleManagement from "./components/Admin/ModerationRoleManagement";
import OrgManagement from "./components/Admin/OrgManagement";

// 🧾 Admin – Certificates
import CertificateDashboard from "./components/Admin/CertificateDashboard";
import CertificateTemplateManager from "./components/Admin/CertificateTemplateManager";
import CertificatePreviewPage from "./components/Admin/CertificatePreviewPage";
import CertificateAuditTrail from "./components/Admin/CertificateAuditTrail";

// 💰 Admin – Payment Management
import AdminTransactionDashboard from "./components/AdminPayments/AdminTransactionDashboard";
import RefundCorrectionUI from "./components/AdminPayments/RefundCorrectionUI";
import InvoiceRegeneration from "./components/AdminPayments/InvoiceRegeneration";
import MultiCurrencySettings from "./components/AdminPayments/MultiCurrencySettings";
import TransactionAuditLog from "./components/AdminPayments/TransactionAuditLog";

// 🏢 Organization Control Panel
import OrgRegistration from "./components/OrgControlPanel/OrgRegistration";
import OrgDashboard from "./components/OrgControlPanel/OrgDashboard";
import OrgUserManagement from "./components/OrgControlPanel/OrgUserManagement";
import SubscriptionPlans from "./components/OrgControlPanel/SubscriptionPlans";
import OrgErrorHandler from "./components/OrgControlPanel/OrgErrorHandler";

// 🧩 Content Moderation (NEW)
import {
  ContentSubmissionForm,
  ModerationDashboard,
  ModerationHistory,
  NotificationsUI,
  ModerationErrorHandler,
} from "./components/ContentModerationUI";

// 🔐 Optional Protected Route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

export default function App() {
  const mockInstructor = {
    avatar: null,
    name: "John Doe",
    title: "Senior Instructor",
    bio: "Experienced instructor in web development.",
    social: { linkedin: "#", twitter: "#" },
    stats: { students: 12000, courses: 4, rating: 4.6, reviews: 300 },
  };

  const mockCourses = [
    {
      id: 1,
      title: "React for Beginners",
      thumbnail: "https://via.placeholder.com/300x180?text=React",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Advanced Node.js",
      thumbnail: "https://via.placeholder.com/300x180?text=Node.js",
      rating: 4.7,
    },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        {/* General */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} /> {/* ✅ alias added */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/reset-password" element={<NewPassword />} />
        <Route path="/course/:courseId/section/:sectionId" element={<CourseSectionPage />} />
        <Route path="/sandboxpage" element={<SandboxPage />} />
        <Route path="/upload-quiz" element={<UploadQuiz />} />
        <Route path="/course-preview/:id" element={<CoursePreview />} />

        {/* Instructor */}
        <Route
          path="/instructor"
          element={
            <ProtectedRoute>
              <InstructorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructor/create-course"
          element={
            <ProtectedRoute>
              <CreateCourse />
            </ProtectedRoute>
          }
        />
        <Route path="/instructor/header" element={<InstructorHeader instructor={mockInstructor} />} />
        <Route path="/instructor/stats" element={<InstructorStats stats={mockInstructor.stats} />} />
        <Route path="/instructor/courses" element={<InstructorCourses courses={mockCourses} />} />

        {/* Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/manage-roles" element={<ManageRoles />} />
        <Route path="/admin-dashboard/moderation-queue" element={<ModerationQueue />} />
        <Route path="/admin-dashboard/audit-logs" element={<AuditLogViewer />} />
        <Route path="/admin-dashboard/moderation-role-management" element={<ModerationRoleManagement />} />
        <Route path="/admin-dashboard/org-management" element={<OrgManagement />} />

        {/* Admin - Certificates */}
        <Route path="/admin-dashboard/certificate-dashboard" element={<CertificateDashboard />} />
        <Route path="/admin-dashboard/certificate-templates" element={<CertificateTemplateManager />} />
        <Route path="/admin-dashboard/certificate-preview" element={<CertificatePreviewPage />} />
        <Route path="/admin-dashboard/certificate-audit-trail" element={<CertificateAuditTrail />} />

        {/* Payments */}
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/certificate-unlock" element={<CertificateUnlockTrigger />} />
        <Route path="/invoice-manager" element={<InvoiceManager />} />
        <Route path="/org-subscription" element={<OrgSubscriptionView />} />
        <Route
          path="/payment-notifications"
          element={<PaymentNotifications type="success" message="Test notification" onClose={() => {}} />}
        />

        {/* Admin - Payment Management */}
        <Route path="/admin-dashboard/transaction-dashboard" element={<AdminTransactionDashboard />} />
        <Route path="/admin-dashboard/refund-correction" element={<RefundCorrectionUI />} />
        <Route path="/admin-dashboard/invoice-regeneration" element={<InvoiceRegeneration />} />
        <Route path="/admin-dashboard/multi-currency-settings" element={<MultiCurrencySettings />} />
        <Route path="/admin-dashboard/transaction-audit-log" element={<TransactionAuditLog />} />

        {/* Organization */}
        <Route path="/org-registration" element={<OrgRegistration />} />
        <Route path="/org-dashboard" element={<OrgDashboard />} />
        <Route path="/org-user-management" element={<OrgUserManagement />} />
        <Route path="/subscription-plans" element={<SubscriptionPlans />} />
        <Route path="/org-error-handler" element={<OrgErrorHandler />} />

        {/* 🧩 Content Moderation */}
        <Route path="/moderation/submission" element={<ContentSubmissionForm />} />
        <Route path="/moderation/dashboard" element={<ModerationDashboard />} />
        <Route path="/moderation/history" element={<ModerationHistory />} />
        <Route path="/moderation/notifications" element={<NotificationsUI />} />
        <Route path="/moderation/error-handler" element={<ModerationErrorHandler />} />
      </Routes>
    </>
  );
}

import React from "react";

const CertificatePreviewPage = () => {
  // Example static data for preview
  const template = {
    name: "React Mastery Certificate",
    background: null, // or use "https://example.com/bg.jpg"
    logo: null,        // or use "https://example.com/logo.png"
    signature: null,   // or use "https://example.com/signature.png"
    learnerName: "John Doe",
    courseName: "React Basics",
    issuer: "Tech Academy",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Certificate Preview
      </h1>

      <div className="bg-white shadow-2xl rounded-xl p-10 w-11/12 md:w-3/4 lg:w-2/3 relative overflow-hidden">
        {/* Optional Background */}
        {template.background && (
          <img
            src={template.background}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
        )}

        {/* Optional Logo */}
        {template.logo && (
          <div className="flex justify-center mb-6">
            <img
              src={template.logo}
              alt="Logo"
              className="h-16 object-contain"
            />
          </div>
        )}

        {/* Certificate Content */}
        <div className="relative text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-800">
            Certificate of Completion
          </h2>
          <p className="text-gray-600 mt-3 italic">
            This is to certify that
          </p>
          <p className="text-3xl font-bold mt-4 text-gray-800">
            {template.learnerName}
          </p>
          <p className="text-gray-700 mt-3">has successfully completed</p>
          <p className="text-2xl font-semibold text-gray-900 mt-2">
            {template.courseName}
          </p>
          <p className="mt-4 text-gray-600 text-sm">
            Issued by {template.issuer}
          </p>
        </div>

        {/* Signature Area */}
        <div className="relative flex justify-end mt-10">
          {template.signature ? (
            <img
              src={template.signature}
              alt="Signature"
              className="h-12 object-contain"
            />
          ) : (
            <p className="text-gray-500 text-sm italic">
              (Authorized Signature)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatePreviewPage;
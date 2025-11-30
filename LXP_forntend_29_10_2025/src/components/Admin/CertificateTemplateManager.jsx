import React, { useState } from "react";
import CertificatePreviewModal from "./CertificatePreviewPage";

const CertificateTemplateManager = () => {
  const [templates, setTemplates] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [editTemplateId, setEditTemplateId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    background: null,
    logo: null,
    signature: null,
    namePosition: "center",
  });

  // Handle input / file changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Add or update a template
  const handleSaveTemplate = () => {
    if (!formData.name) return alert("Please enter a template name");

    if (editTemplateId) {
      // Update existing
      setTemplates((prev) =>
        prev.map((t) =>
          t.id === editTemplateId ? { ...formData, id: t.id } : t
        )
      );
      setEditTemplateId(null);
    } else {
      // Add new
      setTemplates([...templates, { ...formData, id: Date.now() }]);
    }

    // Reset form
    setFormData({
      name: "",
      background: null,
      logo: null,
      signature: null,
      namePosition: "center",
    });
  };

  // Open edit mode
  const handleEdit = (template) => {
    setFormData({
      name: template.name,
      background: template.background,
      logo: template.logo,
      signature: template.signature,
      namePosition: template.namePosition,
    });
    setEditTemplateId(template.id);
  };

  // Preview modal
  const openPreview = (template) => {
    setSelectedTemplate(template);
    setShowPreview(true);
  };
  const closePreview = () => {
    setShowPreview(false);
    setSelectedTemplate(null);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Certificate Template Management
      </h1>

      {/* Template Form */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          {editTemplateId ? "Edit Template" : "Create Template"}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Template Name"
            value={formData.name}
            onChange={handleInputChange}
            className="border rounded-md p-2 focus:ring-2 focus:ring-purple-400 text-gray-900 bg-gray-100"
          />

          <select
            name="namePosition"
            value={formData.namePosition}
            onChange={handleInputChange}
            className="border rounded-md p-2 focus:ring-2 focus:ring-purple-400 text-gray-900 bg-gray-100"
          >
            <option value="center">Center</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>

          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Upload Background Image:
            </label>
            <input
              type="file"
              name="background"
              accept="image/*"
              onChange={handleInputChange}
              className="text-gray-900"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Upload Logo:
            </label>
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleInputChange}
              className="text-gray-900"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Upload Signature:
            </label>
            <input
              type="file"
              name="signature"
              accept="image/*"
              onChange={handleInputChange}
              className="text-gray-900"
            />
          </div>
        </div>

        <button
          onClick={handleSaveTemplate}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
        >
          {editTemplateId ? "Update Template" : "Save Template"}
        </button>
      </div>

      {/* Template List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Available Templates
        </h2>

        {templates.length === 0 ? (
          <p className="text-gray-600 italic">
            No templates created yet. Add one above.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className="border rounded-lg p-4 bg-white shadow-md"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {template.name}
                </h3>

                <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-md overflow-hidden border">
                  {template.background ? (
                    <img
                      src={template.background}
                      alt="Background"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">No Background</span>
                  )}
                </div>

                <div className="flex justify-between mt-4 text-sm font-medium">
                  <button
                    onClick={() => openPreview(template)}
                    className="text-purple-600 hover:underline"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => handleEdit(template)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      setTemplates(templates.filter((t) => t.id !== template.id))
                    }
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <CertificatePreviewModal
          template={selectedTemplate}
          onClose={closePreview}
        />
      )}
    </div>
  );
};

export default CertificateTemplateManager;
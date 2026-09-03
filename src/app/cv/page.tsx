import React from "react";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header with Download Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">📄 My Resume</h1>
          <a 
            href="/Shivam_Sharma.pdf" 
            download 
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium flex items-center gap-2"
          >
            ⬇️ Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <object 
            data="/Shivam_Sharma.pdf" 
            type="application/pdf" 
            className="w-full h-[800px]"
          >
            <p className="p-8 text-center text-gray-500">
              Your browser doesn't support PDF preview. 
              <a href="/Shivam_Sharma.pdf" className="text-blue-600 ml-2 underline" download>
                Download CV instead
              </a>
            </p>
          </object>
        </div>
        
        {/* Back button */}
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </main>
  );
}
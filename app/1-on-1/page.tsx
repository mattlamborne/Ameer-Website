export default function SurveyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Video Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">Watch This First</h2>
              <p className="text-gray-600">Learn more about our approach before getting started</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/yakWWoyzPlY"
                  title="AB Coaching Introduction Video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Survey Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/Y9BWE7zMl48w2sgne1J4"
                style={{ border: "none", width: "100%", minHeight: "600px" }}
                scrolling="no"
                id="Y9BWE7zMl48w2sgne1J4"
                title="survey"
              />
            </div>
          </div>
        </div>
      </div>

      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </div>
  )
}

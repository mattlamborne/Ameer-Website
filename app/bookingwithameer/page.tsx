import Script from "next/script"

export default function BookingWithAmeerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Call</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Schedule a time to speak with Ameer and start your transformation journey.
          </p>
        </div>
      </div>

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

      {/* Booking Calendar Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/yZAmtXHp9MNsLHGjfSF7"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }}
                scrolling="no"
                id="yZAmtXHp9MNsLHGjfSF7_1763531994522"
                title="Booking Calendar"
              />
            </div>
          </div>
        </div>
      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  )
}

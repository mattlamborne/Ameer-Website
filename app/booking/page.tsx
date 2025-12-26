export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              SCHEDULE YOUR CONSULTATION
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book your free consultation with Ameer to discuss your personalized fitness plan.
            </p>
          </div>

          {/* Calendar Embed */}
          <div className="bg-card rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="font-montserrat font-bold text-2xl text-foreground mb-2">Book Your Free Consultation</h2>
              <p className="text-muted-foreground">Choose a time that works best for you</p>
            </div>
            <div className="w-full">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/V9RgeJDm4M9p38KCB4nx"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }}
                scrolling="no"
                id="V9RgeJDm4M9p38KCB4nx_1757462179449"
                title="Book Your Free Consultation"
              />
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Have questions? This consultation is completely free with no obligations.
              <br />
              Let's discuss how we can help you achieve your fitness goals.
            </p>
          </div>
        </div>
      </div>

      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
    </main>
  )
}

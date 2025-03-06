import { Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-blue-900 md:text-4xl">Let's Connect</h2>
          <p className="mt-4 text-lg text-blue-700">Contact Us</p>
          <div className="mt-8 rounded-xl bg-white p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow-md">
                  <img
                    src="/images/suldaan.jpg"
                    alt="Suldaan Said Ahmed - Founder and CEO"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-left">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Suldaan Said Ahmed</h3>
                <p className="text-blue-600 mb-4">Founder and CEO</p>
                <p className="text-gray-600 mb-6">
                  Are you a political leader, government official, or business executive seeking strategic guidance on
                  diplomacy, peace mediation, or high-level partnerships? With our extensive global network and direct
                  access to decision-makers, we can help you forge the right connections and achieve your vision.
                </p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">Email:</span>
                    <a href="mailto:suldaan@bridgepointglobal.fi" className="text-blue-600 hover:underline">
                      suldaan@bridgepointglobal.fi
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">Phone:</span>
                    <a href="tel:+358458939080" className="text-blue-600 hover:underline">
                      +358 (0) 458939080
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
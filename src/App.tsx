import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="font-montserrat">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-[#1B365D]">BridgePoint Global</h1>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-[#1B365D] hover:text-[#4A90E2]">About Us</a>
              <a href="#services" className="text-[#1B365D] hover:text-[#4A90E2]">Services</a>
              <a href="#contact" className="text-[#1B365D] hover:text-[#4A90E2]">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-[#1B365D] to-[#4A90E2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <div className="space-y-6 text-lg">
              <p>
                BridgePoint Global is a premier management consulting firm specializing in strategic advisory, political risk analysis, and high-level networking. We help organizations navigate complex political, economic, and regulatory landscapes, leveraging our extensive global network and direct access to key decision-makers in government and business.
              </p>
              <p>
                With an extensive global network and direct access to key decision-makers in politics and business, we facilitate high-level connections that unlock opportunities and drive strategic collaboration. Our network spans policymakers, senior executives, and influential stakeholders, enabling us to deliver real-time insights and exclusive access to critical markets.
              </p>
              <p>
                Our team brings decades of experience in international diplomacy, high-level negotiations, and stakeholder engagement. By leveraging our trusted relationships with political and business leaders, we help clients make informed strategic decisions, forge meaningful partnerships, and address critical geopolitical challenges.
              </p>
            </div>
            <div className="mt-12">
              <a href="#contact">
                <Button className="bg-white text-[#1B365D] hover:bg-[#4A90E2] hover:text-white transition-colors px-8 py-3 text-lg">
                  Let's Talk
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-[#1B365D]">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[#1B365D]">Strategic Advisory & Market Entry</h3>
              <p className="text-gray-700">
                We provide expert guidance to organizations looking to expand, adapt, or enter new markets. Our strategic insights—backed by direct connections with industry leaders and policymakers—help clients make informed decisions, mitigate risks, and achieve sustainable growth.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[#1B365D]">Government & Political Advisory</h3>
              <p className="text-gray-700">
                We offer strategic counsel to political leaders, policymakers, and government institutions. With our direct access to key decision-makers, we support clients in navigating complex geopolitical challenges, fostering international cooperation, and implementing impactful policy initiatives.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[#1B365D]">High-Level Networking & Stakeholder Engagement</h3>
              <p className="text-gray-700">
                We connect our clients with influential decision-makers, business leaders, and policymakers, facilitating strategic collaborations that drive meaningful change. Through our established relationships and exclusive access, we open doors to high-value opportunities and partnerships.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[#1B365D]">Market Analysis & Risk Assessment</h3>
              <p className="text-gray-700">
                Our team provides in-depth insights into emerging opportunities, business trends, and political and economic developments. With real-time intelligence from our global network, we empower clients to navigate complex environments with confidence and precision.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="#contact">
              <Button className="bg-[#1B365D] text-white hover:bg-[#4A90E2] transition-colors px-8 py-3 text-lg">
                Let's Talk
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1B365D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-12 text-center">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <p className="text-xl leading-relaxed">
                Are you a political leader, government official, or business executive seeking strategic guidance on diplomacy, peace mediation, or high-level partnerships? With our extensive global network and direct access to decision-makers, we can help you forge the right connections and achieve your vision.
              </p>
              <div className="space-y-6 bg-[#234477] rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="flex items-center text-lg group">
                  <span className="mr-4 text-2xl">📧</span>
                  <a href="mailto:contact@bridgepointglobal.com"
                     className="hover:text-[#4A90E2] transition-colors duration-300">
                    contact@bridgepointglobal.com
                  </a>
                </p>
                <p className="flex items-center text-lg group">
                  <span className="mr-4 text-2xl">📞</span>
                  <a href="tel:+358458939080"
                     className="hover:text-[#4A90E2] transition-colors duration-300">
                    +358 (0) 458939080
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center bg-[#234477] rounded-xl p-8">
              <img
                src="/images/suldaan.jpg"
                alt="Suldaan Said Ahmed - Founder and CEO"
                className="w-56 h-56 rounded-full object-cover shadow-xl mb-6 border-4 border-[#4A90E2]"
              />
              <div className="space-y-2">
                <p className="text-3xl font-semibold">Suldaan Said Ahmed</p>
                <p className="text-xl text-[#4A90E2]">Founder and CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

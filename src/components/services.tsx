import { Briefcase, Globe, Users, BarChart } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-20 bg-white md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-blue-900 md:text-4xl">What We Do</h2>
          <p className="mt-4 text-lg text-blue-700">Our Services</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-blue-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <Briefcase className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold text-blue-900">Strategic Advisory & Market Entry</h3>
            <p className="mt-4 text-gray-600">
              We provide expert guidance to organizations looking to expand, adapt, or enter new markets. Our strategic
              insights—backed by direct connections with industry leaders and policymakers—help clients make informed
              decisions, mitigate risks, and achieve sustainable growth.
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <Globe className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold text-blue-900">Government & Political Advisory</h3>
            <p className="mt-4 text-gray-600">
              We offer strategic counsel to political leaders, policymakers, and government institutions. With our
              direct access to key decision-makers, we support clients in navigating complex geopolitical challenges,
              fostering international cooperation, and implementing impactful policy initiatives.
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <Users className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold text-blue-900">High-Level Networking & Stakeholder Engagement</h3>
            <p className="mt-4 text-gray-600">
              We connect our clients with influential decision-makers, business leaders, and policymakers, facilitating
              strategic collaborations that drive meaningful change. Through our established relationships and exclusive
              access, we open doors to high-value opportunities and partnerships.
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <BarChart className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold text-blue-900">Market Analysis & Risk Assessment</h3>
            <p className="mt-4 text-gray-600">
              Our team provides in-depth insights into emerging opportunities, business trends, and political and
              economic developments. With real-time intelligence from our global network, we empower clients to navigate
              complex environments with confidence and precision.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-blue-800 px-8 text-sm font-medium text-white shadow-lg transition-colors hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
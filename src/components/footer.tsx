
export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="text-xl font-bold text-blue-800">BridgePoint Global</div>
            <p className="text-center text-sm text-gray-500 md:text-left">
              Premier management consulting firm specializing in strategic advisory, political risk analysis, and
              high-level networking.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center gap-4">
              <a href="#home" className="text-sm text-gray-500 hover:text-blue-600">
                Home
              </a>
              <a href="#services" className="text-sm text-gray-500 hover:text-blue-600">
                Services
              </a>
              <a href="#contact" className="text-sm text-gray-500 hover:text-blue-600">
                Contact
              </a>
            </div>
            <p className="text-center text-sm text-gray-500 md:text-right">
              &copy; {new Date().getFullYear()} BridgePoint Global. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


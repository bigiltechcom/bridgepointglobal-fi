import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { ThemeProvider } from "./components/theme-provider"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

import { LanguageProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PortsMarquee } from "@/components/ports-marquee"
import { Services } from "@/components/services"
import { ProcessTimeline } from "@/components/process-timeline"
import { OperationsMap } from "@/components/operations-map"
import { Metrics } from "@/components/metrics"
import { WhyLbh } from "@/components/why-lbh"
import { Sectors } from "@/components/sectors"
import { About } from "@/components/about"
import { Network } from "@/components/network"
import { Certifications } from "@/components/certifications"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AmandaWidget } from "@/components/amanda-widget"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <PortsMarquee />
          <Services />
          <ProcessTimeline />
          <OperationsMap />
          <Metrics />
          <WhyLbh />
          <Sectors />
          <About />
          <Network />
          <Certifications />
          <Cta />
        </main>
        <Footer />
        <AmandaWidget />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  )
}

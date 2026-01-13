import { useEffect } from 'react'

// Sections (remapped for odaklan.co)
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ScrollRevealText from './sections/ScrollRevealText'  // → Scroll-driven text reveal
import SocialProof from './sections/SocialProof'      // → Problem Section
import ProductCover from './sections/ProductCover'    // → Comparison Section
import LibraryStats from './sections/LibraryStats'    // → 6-Step Method
import Features from './sections/Features'            // → Package Content
import FinalCTA from './sections/FinalCTA'           // → Pricing
import Footer from './sections/Footer'

// Components
import StickyButton from './components/StickyButton'

function App() {
  useEffect(() => {
    // VR Mode: Detect ?vr=1 query param and disable animations
    const params = new URLSearchParams(window.location.search)
    if (params.get('vr') === '1') {
      document.documentElement.classList.add('vr-mode')
    }
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Navbar />
      {/* Main content wrapper - positioned above sticky footer */}
      <main
        className="relative"
        style={{
          background: '#ffffff',
          zIndex: 10,
          marginBottom: '420px', // Footer height
        }}
      >
        <Hero />
        <ScrollRevealText />  {/* Scroll-driven text with emoji */}
        <SocialProof />    {/* Neden netlerin artmıyor? */}
        <ProductCover />   {/* Oyunun kurallarını değiştir */}
        <LibraryStats />   {/* 6 Adımlık Aktif Öğrenme */}
        <Features />       {/* Paket İçeriği */}
        <FinalCTA />       {/* Fiyat - has rounded bottom edge */}
      </main>
      <Footer />

      {/* Sticky CTA Button - floats at bottom */}
      <StickyButton />
    </div>
  )
}

export default App


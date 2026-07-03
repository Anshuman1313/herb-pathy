import React from 'react'

const BrownFooter = () => {
  return (
    <footer style={{ backgroundColor: "#3a1a1a" }} className="font-sans">
  <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-12 sm:pt-14">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[rgba(255,220,200,0.12)]">

      {/* Brand */}
      <div>
        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
           className="text-[#f5ddd0] text-[1.75rem] font-normal italic mb-3 tracking-wide">
          DreamSliceStudio
        </p>
        <div className="w-7 h-px bg-[#c8887a] opacity-50 mb-4" />
        <p className="text-[11px] text-[rgba(240,195,175,0.5)] leading-relaxed tracking-wide mb-6 max-w-[200px]">
          Custom cakes baked with love,<br />crafted for your sweetest moments.
        </p>
        <div className="flex gap-2.5">
          {/* Instagram */}
          <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer"
             className="w-9 h-9 rounded-[10px] border border-[rgba(255,200,180,0.2)] flex items-center justify-center hover:border-[rgba(255,200,180,0.45)] hover:bg-[rgba(220,39,67,0.18)] transition-all -translate-y-0 hover:-translate-y-0.5 duration-150">
            <svg viewBox="0 0 24 24" fill="#e8b8a8" className="w-4 h-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/916284219963" target="_blank" rel="noopener noreferrer"
             className="w-9 h-9 rounded-[10px] border border-[rgba(255,200,180,0.2)] flex items-center justify-center hover:border-[rgba(255,200,180,0.45)] hover:bg-[rgba(37,211,102,0.15)] transition-all hover:-translate-y-0.5 duration-150">
            <svg viewBox="0 0 24 24" fill="#e8b8a8" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Explore */}
      <div>
        <p className="text-[10px] tracking-[0.22em] font-semibold text-[#c8887a] uppercase mb-5">Explore</p>
        <ul className="space-y-3">
          {["Our Story", "Our Menu", "About Us"].map(l => (
            <li key={l}><a href="#" className="text-[12.5px] text-[rgba(240,205,190,0.65)] hover:text-[#f0cdc0] transition-colors tracking-wide no-underline">{l}</a></li>
          ))}
        </ul>
      </div>

      {/* Support */}
      <div>
        <p className="text-[10px] tracking-[0.22em] font-semibold text-[#c8887a] uppercase mb-5">Support</p>
        <ul className="space-y-3">
          <li><a href="#" className="text-[12.5px] text-[rgba(240,205,190,0.65)] hover:text-[#f0cdc0] transition-colors tracking-wide no-underline">Contact Us</a></li>
          <li><a href="#" className="text-[12.5px] text-[rgba(240,205,190,0.65)] hover:text-[#f0cdc0] transition-colors tracking-wide no-underline">Find Us</a></li>
          <li><a href="https://wa.me/916284219963" target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-[rgba(240,205,190,0.65)] hover:text-[#f0cdc0] transition-colors tracking-wide no-underline">WhatsApp Us</a></li>
          <li><a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-[rgba(240,205,190,0.65)] hover:text-[#f0cdc0] transition-colors tracking-wide no-underline">Instagram DM</a></li>
        </ul>
      </div>

      {/* Visit */}
      <div>
        <p className="text-[10px] tracking-[0.22em] font-semibold text-[#c8887a] uppercase mb-5">Visit Us</p>
        <div className="space-y-3">
          {[
            { icon: "📍", text: "Sector 23, Chandigarh" },
            { icon: "📍", text: "Vista Tower Sector 75, Mohali" },
            { icon: "📞", text: "+91 62842 19963" },
            { icon: "🕐", text: "Mon–Fri 10 AM–7 PM\nSat–Sun 10 AM–6 PM" },
          ].map(({ icon, text }, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="text-[#c8887a] text-[12px] mt-0.5 shrink-0">{icon}</span>
              <span className="text-[12px] text-[rgba(240,205,190,0.65)] leading-relaxed whitespace-pre-line">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="py-5 flex items-center justify-between">
      <p className="text-[11px] text-[rgba(200,160,140,0.4)] tracking-wide">© 2026 DreamSliceStudio. All Rights Reserved.</p>
      <p className="text-[11px] text-[rgba(200,160,140,0.4)] tracking-wide flex items-center gap-1.5">
        Baked with <span className="text-[#b85c5c]">♥</span> in Chandigarh
      </p>
    </div>
  </div>
</footer>
  )
}

export default BrownFooter
"use client"

export default function Footer() {
  return (
    <footer className="w-full border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Dream Slice Studio</h2>
          <p className="text-sm text-muted-foreground">
            Crafted cakes for every occasion.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">Cakes</a>
          <a href="#" className="hover:text-black transition">Custom Orders</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </div>

        {/* Bottom */}
        <div className="text-xs text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Dream Slice Studio
        </div>

      </div>
    </footer>
  )
}
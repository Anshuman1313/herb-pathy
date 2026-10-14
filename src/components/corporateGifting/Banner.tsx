import { Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react'
import React from 'react'

const Banner = () => {
    return (
        <div className="hidden bg-brand-burgundy text-brand-cream md:block font-inter">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
                <div className="flex items-center gap-1.5 w-1/3">
                    <MapPin className="h-3.5 w-3.5 text-brand-gold" />
                    <span>New Delhi, India</span>
                </div>

                <p className="tracking-wide w-1/3">
                    Bespoke Cakes &nbsp;|&nbsp; Premium Desserts &nbsp;|&nbsp; Corporate Gifting
                </p>

                <div className="flex items-center gap-4 w-1/3 justify-center">
                    <div className="flex items-center gap-1.5 ">
                        <Mail className="h-3.5 w-3.5 text-brand-gold" />
                        <span>hello@dreamslicestudio.com</span>
                    </div>

                    <div className="flex items-center gap-3 text-brand-cream/80">
                        <Instagram className="h-3.5 w-3.5  text-brand-gold" />
                        <Facebook className="h-3.5 w-3.5 text-brand-gold" />
                        <Linkedin className="h-3.5 w-3.5 text-brand-gold" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
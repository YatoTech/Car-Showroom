import React from "react";
    import { Button } from "@/components/ui/button";

    export function HeroSection() {
      return (
        <section
          id="beranda"
          className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center flex items-center justify-center text-center p-4"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-white max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-in fade-in-up duration-700">
              Temukan Mobil Impian Anda di <span className="text-primary">Alhabsyi Jaya Mobil</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 animate-in fade-in-up delay-200 duration-700">
              Koleksi mobil terbaik dengan harga kompetitif dan pelayanan prima.
            </p>
            <Button size="lg" className="mt-8 animate-in fade-in-up delay-400 duration-700">
              <a href="#mobil">Lihat Koleksi Kami</a>
            </Button>
          </div>
        </section>
      );
    }

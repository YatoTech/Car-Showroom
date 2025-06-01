import React from "react";
    import { Input } from "@/components/ui/input";
    import { Textarea } from "@/components/ui/textarea";
    import { Button } from "@/components/ui/button";
    import { Label } from "@/components/ui/label";

    export function ContactUs() {
      return (
        <section id="kontak" className="container py-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">Hubungi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Informasi Kontak</h3>
              <p className="text-muted-foreground">
                Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin menjadwalkan test drive.
              </p>
              <div className="space-y-2">
                <p className="text-foreground font-medium">Alamat:</p>
                <p className="text-muted-foreground">Jl. Raya Contoh No. 123, Jakarta, Indonesia</p>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium">Telepon:</p>
                <p className="text-muted-foreground">+62 812 3456 7890</p>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium">Email:</p>
                <p className="text-muted-foreground">info@alhabsyijayamobil.com</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" type="text" placeholder="Nama Anda" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Email Anda" />
                </div>
                <div>
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea id="message" placeholder="Tulis pesan Anda di sini..." rows={5} />
                </div>
                <Button type="submit" className="w-full">Kirim Pesan</Button>
              </form>
            </div>
          </div>
        </section>
      );
    }

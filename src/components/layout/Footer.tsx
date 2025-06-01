import React from "react";
    import { Facebook, Instagram, Twitter } from "lucide-react";

    export function Footer() {
      return (
        <footer className="bg-card text-card-foreground py-8 mt-12">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Alhabsyi Jaya Mobil. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </footer>
      );
    }
